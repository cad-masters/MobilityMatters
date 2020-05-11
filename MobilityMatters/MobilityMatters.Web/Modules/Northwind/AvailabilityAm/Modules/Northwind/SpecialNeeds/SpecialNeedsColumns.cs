
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.SpecialNeeds")]
    [BasedOnRow(typeof(Entities.SpecialNeedsRow), CheckNames = true)]
    public class SpecialNeedsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SpecialNeedsID { get; set; }
        [EditLink]
        public String Name { get; set; }
    }
}