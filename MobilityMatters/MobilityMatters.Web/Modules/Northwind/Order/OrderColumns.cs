
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;

    [ColumnsScript("Northwind.Order")]
    [BasedOnRow(typeof(Entities.OrderRow), CheckNames = true)]
    public class OrderColumns
    {
        [EditLink, AlignRight, SortOrder(1, descending: true), Width(70)]
        public String OrderID { get; set; }

        [EditLink, QuickFilter(CssClass = "hidden-xs")]
        public DateTime? OrderDate { get; set; }

        [EditLink, Width(200)]
        public String CustomerCompanyName { get; set; }
        public String CustomerContactName { get; set; }

        [Width(140), /*EmployeeFormatter(GenderProperty = "EmployeeGender"),*/ QuickFilter(CssClass = "hidden-xs")]
        public String EmployeeFullName { get; set; }
        [Width(100)]
        public String RequiredDate { get; set; }

        [FilterOnly, QuickFilter, Hidden]
        public OrderShippingState ShippingState { get; set; }

        /*public DateTime? ShippedDate { get; set; }

        [Width(140), ShipperFormatter, QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("multiple", true)]
        public String ShipViaCompanyName { get; set; }

        [Width(100), QuickFilter(CssClass = "hidden-xs"), LookupEditor(typeof(Lookups.OrderShipCountryLookup))]
        public String ShipCountry { get; set; }*/

        [Width(100)/*, QuickFilter(CssClass = "hidden-xs")*/]
        public String ShipAddress { get; set; }

        [Width(100), LookupEditor(typeof(Lookups.OrderShipCityLookup))]
        [QuickFilter(CssClass = "hidden-xs")]
        public String ShipCity { get; set; }

        [Width(100)/*, QuickFilter(CssClass = "hidden-xs")*/]
        public String ShipPostalCode { get; set; }

        [Width(140)/*, QuickFilter(CssClass = "hidden-xs")*/]
        public String DestinationAddress { get; set; }

        [Width(120), LookupEditor(typeof(Lookups.OrderShipCityLookup))]
        [QuickFilter(CssClass = "hidden-xs")]
        public String DestinationCity { get; set; }

        [Width(120)/*, QuickFilter(CssClass = "hidden-xs")*/]
        public String DestinationZip { get; set; }

        /*[FreightFormatter]
        public Decimal? Freight { get; set; }*/
    }
}