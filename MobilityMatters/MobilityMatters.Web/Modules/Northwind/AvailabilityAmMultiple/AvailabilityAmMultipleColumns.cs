
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.AvailabilityAmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityAmMultipleRow), CheckNames = true)]
    public class AvailabilityAmMultipleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AvailabilityAmMultipleId { get; set; }
        public Int32 AvailabilityAmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}