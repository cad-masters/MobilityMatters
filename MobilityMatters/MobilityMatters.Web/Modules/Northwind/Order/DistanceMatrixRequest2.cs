using Serenity.Services;

namespace MobilityMatters.Northwind
{
    public class DistanceMatrixRequest2 : ServiceRequest
    {
        public string Source2 { get; set; }
        public string Destination2 { get; set; }
    }
}