using Newtonsoft.Json;
using Serenity.Services;

namespace MobilityMatters.Northwind
{
    public class TripConfirmRequest : ServiceRequest
    {
        public string Token { get; set; }
    }

    public class TripConfirmUrlRequest : ServiceRequest
    {
        public int Id { get; set; }
    }

    public class TripConfirmUrlResponse : ServiceResponse
    {
        public string Url { get; set; }
    }

    public class TripConfirm
    {
        public string Message { get; set; }
    }
}