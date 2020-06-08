
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
        [Category("Trip Info")]
        [Hidden]
        public Int32? OrderID { get; set; }
        public String CustomerID { get; set; }
        [DefaultValue("now")]
        public DateTime OrderDate { get; set; }
        public String RequiredDate { get; set; }
        
        public Int32? EmployeeID { get; set; }
        [BooleanFormatter, BooleanEditor, QuarterWidth]
        public Boolean RideCompleted { get; set; }
        [QuarterWidth]
        public Int32? HowMany { get; set; }
        [BooleanFormatter, BooleanEditor, QuarterWidth]
        public Boolean Cancelled { get; set; }
        [QuarterWidth]
        public String CancelReason { get; set; }
        /*[Category("Trip Details")]
        [OrderDetailsEditor]
        public List<Entities.OrderDetailRow> DetailList { get; set; }*/

        /*[Tab("Ride Details")
        [Category("Info")]
        public DateTime ShippedDate { get; set; }
        public Int32 ShipVia { get; set; }
        public Decimal Freight { get; set; }*/

        [Category("Mileage & Trip Details")]
        /*public String ShipName { get; set; }*/
        public String AppointmentTime { get; set; }
        [HalfWidth]
        public String ShipAddress { get; set; }
        [QuarterWidth]
        public String ShipCity { get; set; }
        [QuarterWidth]
        /*public String ShipRegion { get; set; }*/
        public String ShipPostalCode { get; set; }
        /*public String ShipCountry { get; set; }*/
        [HalfWidth]
        public String DestinationAddress { get; set; }
        [QuarterWidth]
        public String DestinationCity { get; set; }
        [QuarterWidth]
        public String DestinationZip { get; set; }
        
        [HalfWidth]
        public String ApptTime { get; set; }
        [HalfWidth]
        public String ApptType { get; set; }
        [HalfWidth]
        public String DistanceText { get; set; }
        [HalfWidth]
        public String DurationText { get; set; }
        [Category("Second Trip Details")]
        public String AppointmentTime2 { get; set; }
        [HalfWidth]
        public String DestinationAddress2 { get; set; }
        [QuarterWidth]
        public String DestinationCity2 { get; set; }
        [QuarterWidth]
        public String DestinationZip2 { get; set; }
        
        [HalfWidth]
        public String ApptTime2 { get; set; }
        [HalfWidth]
        public String ApptType2 { get; set; }
        [HalfWidth]
        public String DistanceText2 { get; set; }
        [HalfWidth]
        public String DurationText2 { get; set; }
    }
}