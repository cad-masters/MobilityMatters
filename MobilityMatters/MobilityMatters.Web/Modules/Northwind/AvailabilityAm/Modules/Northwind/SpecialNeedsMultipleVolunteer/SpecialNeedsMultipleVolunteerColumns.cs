
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.SpecialNeedsMultipleVolunteer")]
    [BasedOnRow(typeof(Entities.SpecialNeedsMultipleVolunteerRow), CheckNames = true)]
    public class SpecialNeedsMultipleVolunteerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SpecialNeedsMultipleVolunteerId { get; set; }
        public Int32 SpecialNeedsId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}