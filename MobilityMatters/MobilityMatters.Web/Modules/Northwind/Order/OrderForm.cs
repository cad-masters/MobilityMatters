
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Northwind.Order")]
    [BasedOnRow(typeof(Entities.OrderRow), CheckNames = true)]
    public class OrderForm
    {
        [Tab("General")]
        [Category("Trip")]
        public String CustomerID { get; set; }
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        public String RequiredDate { get; set; }
        public Int32? EmployeeID { get; set; }

        /*[Category("Trip Details")]
        [OrderDetailsEditor]
        public List<Entities.OrderDetailRow> DetailList { get; set; }*/

        /*[Tab("Ride Details")]*/
        [Category("Info")]
        public DateTime ShippedDate { get; set; }
        public Int32 ShipVia { get; set; }
        public Decimal Freight { get; set; }

        [Category("Mileage")]
        /*public String ShipName { get; set; }*/
        public String ShipAddress { get; set; }
        public String ShipCity { get; set; }
        /*public String ShipRegion { get; set; }*/
        public String ShipPostalCode { get; set; }
        /*public String ShipCountry { get; set; }*/
        public String DestinationAddress { get; set; }
        public String DestinationCity { get; set; }
        public String DestinationZip { get; set; }
        [HalfWidth]
        public String DistanceText { get; set; }
        [HalfWidth]
        public String DurationText { get; set; }
    }
}