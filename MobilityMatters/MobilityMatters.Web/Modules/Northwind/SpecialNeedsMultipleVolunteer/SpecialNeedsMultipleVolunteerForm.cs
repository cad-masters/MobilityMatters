
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.SpecialNeedsMultipleVolunteer")]
    [BasedOnRow(typeof(Entities.SpecialNeedsMultipleVolunteerRow), CheckNames = true)]
    public class SpecialNeedsMultipleVolunteerForm
    {
        public Int32 SpecialNeedsId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}