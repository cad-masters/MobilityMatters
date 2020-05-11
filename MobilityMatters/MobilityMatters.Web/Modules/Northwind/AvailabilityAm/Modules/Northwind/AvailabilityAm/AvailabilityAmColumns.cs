
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

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