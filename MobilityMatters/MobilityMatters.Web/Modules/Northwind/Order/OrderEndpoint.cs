
namespace MobilityMatters.Northwind.Endpoints
{
    using MobilityMatters.Common;
    using Serenity.Data;
    using Serenity.Reporting;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Web;
    using System.Web.Mvc;
    using MyRepository = Repositories.OrderRepository;
    using MyRow = Entities.OrderRow;

    [RoutePrefix("Services/Northwind/Order"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class OrderController : ServiceEndpoint
    {
        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }

        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, OrderListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public FileContentResult ListExcel(IDbConnection connection, OrderListRequest request)
        {
            var data = List(connection, request).Entities;
            var report = new DynamicDataReport(data, request.IncludeColumns, typeof(Columns.OrderColumns));
            var bytes = new ReportRepository().Render(report);
            return ExcelContentResult.Create(bytes, "RidesList_" +
                DateTime.Now.ToString("MMddyyyy_HHmmss") + ".xlsx");
        }

        public DistanceMatrixResponse DistanceMatrix(IDbConnection connection, DistanceMatrixRequest request)
        {
            return new MyRepository().GetDistanceMatrix(connection, request);
        }

        public DistanceMatrixResponse GetDistanceMatrix(IDbConnection connection, DistanceMatrixRequest request)
        {
            return new MyRepository().GetDistanceMatrix(connection, request);
        }
        public TripConfirmUrlResponse GetConfirmUrl(TripConfirmUrlRequest request)
        {
            var baseUri = System.Web.HttpContext.Current.Request.Url.Scheme + "://" + System.Web.HttpContext.Current.Request.Url.Authority.ToString();
            var encrypetedId = EncryptionHelper.Encrypt(request.Id.ToString());

            return new TripConfirmUrlResponse { Url = baseUri  + "/Northwind/Order/ConfirmTrip?Token=" + encrypetedId};
        }
    }
}
