
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.AvailabilityPmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityPmMultipleRow), CheckNames = true)]
    public class AvailabilityPmMultipleForm
    {
        public Int32 AvailabilityPmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}