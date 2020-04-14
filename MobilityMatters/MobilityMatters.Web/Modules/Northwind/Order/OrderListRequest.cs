using Newtonsoft.Json;
using Serenity.Services;

namespace MobilityMatters.Northwind
{
    public class OrderListRequest : ListRequest
    {
        public int? ProductID { get; set; }
    }
}