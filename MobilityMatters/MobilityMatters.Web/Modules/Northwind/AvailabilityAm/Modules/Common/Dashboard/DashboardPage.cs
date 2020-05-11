
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
                        model.ClientsByStatusType = ClientsByStatusType(connection);
                        model.ClientsByStatusOption = ClientsByStatusOption(connection);
                        model.ClientsByReferralSource = ClientsByReferralSource(connection);
                        model.VolunteersByReferralSource = VolunteersByReferralSource(connection);
                    }

                    using (var connection = SqlConnections.NewFor<CustomerRow>())
                    {
                        model.ContraCostaRiders = connection.Count<CustomerRow>(r.County == (int)RiderByCounty.ContraCosta);
                        model.AlamedaRiders = connection.Count<CustomerRow>(r.County == (int)RiderByCounty.Alameda);
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

        private List<ClientReportModel> ClientsByStatusOption(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.ProgramOption.IsNotNull())
                .Select(fld.ProgramOption, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.ProgramOption)
                .OrderBy(fld.ProgramOption);

            return connection.Query<ClientReportModel>(query).ToList();
        }

        private List<ClientReportModel> ClientsByStatusType(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.Program.IsNotNull())
                .Select(fld.Program, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.Program)
                .OrderBy(fld.Program);

            return connection.Query<ClientReportModel>(query).ToList();
        }


        private List<ClientReportModel> ClientsByReferralSource(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.ReferralSource.IsNotNull())
                .Select(fld.ReferralSource, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.ReferralSource)
                .OrderBy(fld.ReferralSource);

            return connection.Query<ClientReportModel>(query).ToList();
        }

        private List<ClientReportModel> VolunteersByReferralSource(System.Data.IDbConnection connection)
        {
            var fld = EmployeesRow.Fields;
            var query = new SqlQuery()
                .From(fld)
                .Where(fld.ReferralSource.IsNotNull())
                .Select(fld.ReferralSource, nameof(ClientReportModel.Name))
                .Select(Sql.Count(), nameof(ClientReportModel.Count))
                .GroupBy(fld.ReferralSource)
                .OrderBy(fld.ReferralSource);

            return connection.Query<ClientReportModel>(query).ToList();
        }

        private List<ClientReportModel> ClientsByAgeRange(System.Data.IDbConnection connection)
        {
            var fld = CustomerRow.Fields;
            var query = new SqlQuery();

            var caseExpression = query.Case(x => x.When(fld.AgeCalc < 18).Then("Under 18")
                .When(fld.AgeCalc > 19 && fld.AgeCalc <= 29).Then("20 - 29")
                .When(fld.AgeCalc > 29 && fld.AgeCalc <= 39).Then("30 - 39")
                .When(fld.AgeCalc > 39 && fld.AgeCalc <= 49).Then("40 - 49")
                .When(fld.AgeCalc > 49 && fld.AgeCalc <= 59).Then("50 - 59")
                .When(fld.AgeCalc > 59 && fld.AgeCalc <= 69).Then("60 - 69")
                .When(fld.AgeCalc > 69 && fld.AgeCalc <= 79).Then("70 - 79")
                .When(fld.AgeCalc > 79 && fld.AgeCalc <= 89).Then("80 - 89")
                .When(fld.AgeCalc > 89 && fld.AgeCalc <= 99).Then("90 - 99")
                .When(fld.AgeCalc > 99).Then("100+"));

            query.From(fld)
            .Where(fld.AgeCalc.IsNotNull())
            .Select(caseExpression, nameof(ClientReportModel.Name))
            .Select(Sql.Count(), nameof(ClientReportModel.Count))
            .GroupBy(caseExpression);

            return connection.Query<ClientReportModel>(query).ToList();
        }
    }
}
