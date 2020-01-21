
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

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