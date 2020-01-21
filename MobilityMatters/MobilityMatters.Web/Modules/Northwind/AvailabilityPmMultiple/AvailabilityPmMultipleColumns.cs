
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.AvailabilityPmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityPmMultipleRow), CheckNames = true)]
    public class AvailabilityPmMultipleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AvailabilityPmMultipleId { get; set; }
        public Int32 AvailabilityPmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}