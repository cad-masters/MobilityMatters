
namespace MobilityMatters.Common.Pages
{
    using Northwind;
    using Northwind.Entities;
    using Serenity;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Mvc;

    [RoutePrefix("Dashboard"), Route("{action=index}")]
    public class DashboardController : Controller
    {
        [Authorize, HttpGet, Route("~/")]
        public ActionResult Index()
        {
            var cachedModel = TwoLevelCache.GetLocalStoreOnly("DashboardPageModel", TimeSpan.FromMinutes(5),
                OrderRow.Fields.GenerationKey, () =>
                {
                    var model = new DashboardPageModel();
                    var o = OrderRow.Fields;
                    var r = CustomerRow.Fields;
                    using (var connection = SqlConnections.NewFor<OrderRow>())
                    {
                        model.OpenOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.NotShipped);
                        var closedOrders = connection.Count<OrderRow>(o.ShippingState == (int)OrderShippingState.Shipped);
                        var totalOrders = model.OpenOrders + closedOrders;
                        model.ClosedOrderPercent = (int)Math.Round(totalOrders == 0 ? 100 :
                            ((double)closedOrders / (double)totalOrders * 100));
                        model.CustomerCount = connection.Count<CustomerRow>();
                        model.ProductCount = connection.Count<ProductRow>();
                        model.EmployeeCount = connection.Count<EmployeeRow>();
                        model.OrderCount = connection.Count<OrderRow>();

                        model.ClientsByCity = ClientsByCity(connection);
                        model.ClientsByAge = ClientsByAgeRange(connection);
                    }

                    using (var connection = SqlConnections.NewFor<CustomerRow>())
                    {
                        model.ContraCostaRiders = connection.Count<CustomerRow>(r.County == (int)RiderByCounty.Alameda);
                        model.AlamedaRiders = connection.Count<CustomerRow>(r.County == (int)RiderByCounty.ContraCosta);
                    }
                    return model;
                });
            return View(MVC.Views.Common.Dashboard.DashboardIndex, cachedModel);
        }

        private List<ClientReportModel> ClientsByCity(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.City.IsNotNull())
                .Select(fld.City, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.City)
                .OrderBy(fld.City);

            return connection.Query<ClientReportModel>(query).ToList();
        }

        private List<ClientReportModel> ClientsByAge(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.AgeCalc.IsNotNull())
                .Select(fld.AgeCalc, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.AgeCalc)
                .OrderBy(fld.AgeCalc);

            return connection.Query<ClientReportModel>(query).ToList();
        }

        private List<ClientReportModel> ClientsByAgeRange(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery();

            var caseExpression = query.Case(x => x.When(fld.AgeCalc < 18).Then("Under 18")
                .When(fld.AgeCalc > 18 && fld.AgeCalc <= 26).Then("19 - 26")
                .When(fld.AgeCalc > 26 && fld.AgeCalc <= 35).Then("25 - 35")
                .When(fld.AgeCalc > 35 && fld.AgeCalc <= 45).Then("36 - 45")
                .When(fld.AgeCalc > 45).Then("Over 45"));

            query.From(fld)
            .Where(fld.AgeCalc.IsNotNull())
            .Select(caseExpression, nameof(ClientReportModel.Name))
            .Select(Sql.Count(), nameof(ClientReportModel.Count))
            .GroupBy(caseExpression);

            return connection.Query<ClientReportModel>(query).ToList();
        }
    }
}
