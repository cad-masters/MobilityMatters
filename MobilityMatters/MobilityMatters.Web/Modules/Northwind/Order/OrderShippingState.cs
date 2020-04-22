
namespace MobilityMatters.Northwind
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Northwind.OrderShippingState")]
    public enum OrderShippingState
    {
        [Description("Not Completed")]
        NotShipped = 0,
        [Description("Completed")]
        Shipped = 1
    }
}