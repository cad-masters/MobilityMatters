
namespace MobilityMatters.Northwind
{
    using Serenity.ComponentModel;
    using System.ComponentModel;

    [EnumKey("Northwind.RiderByCounty")]
    public enum RiderByCounty
    {
        [Description("Alameda")]
        Alameda = 0,
        [Description("Contra Costa")]
        ContraCosta = 1
    }
}