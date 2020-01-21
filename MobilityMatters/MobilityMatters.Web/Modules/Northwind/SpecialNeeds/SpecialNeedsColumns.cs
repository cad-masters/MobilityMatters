
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

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