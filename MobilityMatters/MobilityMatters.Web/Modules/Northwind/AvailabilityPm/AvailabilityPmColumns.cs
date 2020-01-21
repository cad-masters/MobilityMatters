
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.AvailabilityPm")]
    [BasedOnRow(typeof(Entities.AvailabilityPmRow), CheckNames = true)]
    public class AvailabilityPmColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AvailabilityPmid { get; set; }
        [EditLink]
        public String Day { get; set; }
    }
}