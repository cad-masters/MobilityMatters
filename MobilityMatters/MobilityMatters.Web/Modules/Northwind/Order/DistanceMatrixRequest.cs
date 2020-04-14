using Serenity.Services;

namespace MobilityMatters.Northwind
{
    public class DistanceMatrixRequest : ServiceRequest
    {
        public string Source { get; set; }
        public string Destination { get; set; }
    }
}