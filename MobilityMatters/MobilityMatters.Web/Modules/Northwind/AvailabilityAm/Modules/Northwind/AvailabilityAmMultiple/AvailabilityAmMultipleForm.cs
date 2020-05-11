
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.AvailabilityAmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityAmMultipleRow), CheckNames = true)]
    public class AvailabilityAmMultipleForm
    {
        public Int32 AvailabilityAmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}