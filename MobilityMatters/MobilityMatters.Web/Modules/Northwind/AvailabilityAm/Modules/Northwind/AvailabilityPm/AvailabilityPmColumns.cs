
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

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