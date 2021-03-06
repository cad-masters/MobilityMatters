﻿

namespace MobilityMatters.Northwind.Repositories
{
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using System.Configuration;
    using System.Data;
    using System.IO;
    using System.Net;
    using MyRow = Entities.OrderRow;

    public class OrderRepository
    {
        private static MyRow.RowFields fld { get { return MyRow.Fields; } }

        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Create);
        }

        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MySaveHandler().Process(uow, request, SaveRequestType.Update);
        }

        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyDeleteHandler().Process(uow, request);
        }

        public UndeleteResponse Undelete(IUnitOfWork uow, UndeleteRequest request)
        {
            return new MyUndeleteHandler().Process(uow, request);
        }

        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRetrieveHandler().Process(connection, request);
        }

        public ListResponse<MyRow> List(IDbConnection connection, OrderListRequest request)
        {
            return new MyListHandler().Process(connection, request);
        }

        public DistanceMatrixResponse GetDistanceMatrix(IDbConnection connection, DistanceMatrixRequest DistanceMatrixRequest)
        {
            return GetDistanceMatrix(DistanceMatrixRequest);
        }

        //public DistanceMatrixResponse2 GetDistanceMatrix2(IDbConnection connection, DistanceMatrixRequest2 DistanceMatrixRequest2)
        //{
        //    return GetDistanceMatrix2(DistanceMatrixRequest2);
        //}

        public static DistanceMatrixResponse GetDistanceMatrix(DistanceMatrixRequest req)
        {
            try
            {
                string keyString = ConfigurationManager.AppSettings["GoogleApiKey"].ToString(); // passing API key
                string urlRequest = @"https://maps.googleapis.com/maps/api/distancematrix/json?" +
                    "units=imperial" + //it gives the result in miles
                    "&origins=" + req.Source +
                    "&destinations=" + req.Destination +
                    //"&mode=Driving" + //Driving, Walking, Bicycling, Transit.
                    "&key=" + keyString;

                WebRequest request = WebRequest.Create(urlRequest);
                request.Method = "POST";
                request.ContentType = "application/x-www-form-urlencoded";

                Stream dataStream = request.GetRequestStream();
                WebResponse response = request.GetResponse();
                dataStream = response.GetResponseStream();

                StreamReader reader = new StreamReader(dataStream);
                string resp = reader.ReadToEnd();
                reader.Close();
                dataStream.Close();
                response.Close();

                return JSON.Parse<DistanceMatrixResponse>(resp);
            }
            catch
            {
                return null;
            }

        }

        //public static DistanceMatrixResponse2 GetDistanceMatrix2(DistanceMatrixRequest2 req)
        //{
        //    try
        //    {
        //        string keyString = ConfigurationManager.AppSettings["GoogleApiKey"].ToString(); // passing API key
        //        string urlRequest = @"https://maps.googleapis.com/maps/api/distancematrix/json?" +
        //            "units=imperial" + //it gives the result in miles
        //            "&origins=" + req.Source2 +
        //            "&destinations=" + req.Destination2 +
        //            //"&mode=Driving" + //Driving, Walking, Bicycling, Transit.
        //            "&key=" + keyString;

        //        WebRequest request = WebRequest.Create(urlRequest);
        //        request.Method = "POST";
        //        request.ContentType = "application/x-www-form-urlencoded";

        //        Stream dataStream = request.GetRequestStream();
        //        WebResponse response = request.GetResponse();
        //        dataStream = response.GetResponseStream();

        //        StreamReader reader = new StreamReader(dataStream);
        //        string resp = reader.ReadToEnd();
        //        reader.Close();
        //        dataStream.Close();
        //        response.Close();

        //        return JSON.Parse<DistanceMatrixResponse2>(resp);
        //    }
        //    catch
        //    {
        //        return null;
        //    }

        //}


        private class MySaveHandler : SaveRequestHandler<MyRow>
        {
            protected override void BeforeSave()
            {
                base.BeforeSave();

                if (!IsCreate && (Old.DestinationAddress != Row.DestinationAddress ||
                    Old.DestinationCity != Row.DestinationCity ||
                    Old.DestinationZip != Row.DestinationZip))
                {
                    var destination = (Row.DestinationAddress == null ? "" : Row.DestinationAddress + ",") +
                        (Row.DestinationCity == null ? "" : Row.DestinationCity + ",") +
                        (Row.DestinationZip == null ? "" : Row.DestinationZip);

                    var source = (Row.ShipAddress == null ? "" : Row.ShipAddress + ",") +
                        (Row.ShipCity == null ? "" : Row.ShipCity + ",") +
                        (Row.ShipPostalCode == null ? "" : Row.ShipPostalCode);

                    var result = GetDistanceMatrix(new DistanceMatrixRequest
                    {
                        Destination = destination,
                        Source = source
                    });

                    if (result != null && result.Status == "OK" &&
                        result.Rows.Length > 0 && result.Rows[0].Elements.Length > 0 &&
                        result.Rows[0].Elements[0].Status == "OK")
                    {
                        Row.DistanceText = result.Rows[0].Elements[0].Distance.Text;
                        Row.DistanceValue = result.Rows[0].Elements[0].Distance.Value;
                        Row.DurationText = result.Rows[0].Elements[0].Duration.Text;
                        Row.DurationValue = result.Rows[0].Elements[0].Duration.Value;
                    }
                }

                //if (!IsCreate && (Old.DestinationAddress2 != Row.DestinationAddress2 ||
                //    Old.DestinationCity2 != Row.DestinationCity2 ||
                //    Old.DestinationZip2 != Row.DestinationZip2))
                //{
                //    var destination2 = (Row.DestinationAddress2 == null ? "" : Row.DestinationAddress2 + ",") +
                //        (Row.DestinationCity2 == null ? "" : Row.DestinationCity2 + ",") +
                //        (Row.DestinationZip2 == null ? "" : Row.DestinationZip2);

                //    var source2 = (Row.DestinationAddress == null ? "" : Row.DestinationAddress + ",") +
                //        (Row.DestinationCity == null ? "" : Row.DestinationCity + ",") +
                //        (Row.DestinationZip == null ? "" : Row.DestinationZip);

                //    var result = GetDistanceMatrix2(new DistanceMatrixRequest2
                //    {
                //        Destination2 = destination2,
                //        Source2 = source2
                //    });

                //    if (result != null && result.Status == "OK" &&
                //        result.Rows.Length > 0 && result.Rows[0].Elements.Length > 0 &&
                //        result.Rows[0].Elements[0].Status == "OK")
                //    {
                //        Row.DistanceText2 = result.Rows[0].Elements[0].Distance.Text;
                //        Row.DistanceValue2 = result.Rows[0].Elements[0].Distance.Value;
                //        Row.DurationText2 = result.Rows[0].Elements[0].Duration.Text;
                //        Row.DurationValue2 = result.Rows[0].Elements[0].Duration.Value;
                //    }
                //}
            }
        }
        private class MyDeleteHandler : DeleteRequestHandler<MyRow> { }
        private class MyUndeleteHandler : UndeleteRequestHandler<MyRow> { }
        private class MyRetrieveHandler : RetrieveRequestHandler<MyRow> { }

        private class MyListHandler : ListRequestHandler<MyRow, OrderListRequest>
        {
            protected override void ApplyFilters(SqlQuery query)
            {
                base.ApplyFilters(query);

                if (Request.ProductID != null)
                {
                    var od = Entities.OrderDetailRow.Fields.As("od");

                    query.Where(Criteria.Exists(
                        query.SubQuery()
                            .Select("1")
                            .From(od)
                            .Where(
                                od.OrderID == fld.OrderID &
                                od.ProductID == Request.ProductID.Value)
                            .ToString()));
                }
            }
        }
    }
}