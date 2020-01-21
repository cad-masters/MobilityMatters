
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.AvailabilityAm")]
    [BasedOnRow(typeof(Entities.AvailabilityAmRow), CheckNames = true)]
    public class AvailabilityAmColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AvailabilityAmid { get; set; }
        [EditLink]
        public String Day { get; set; }
    }
}