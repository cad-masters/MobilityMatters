
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.Program")]
    [BasedOnRow(typeof(Entities.ProgramRow), CheckNames = true)]
    public class ProgramColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProgramId { get; set; }
        [EditLink]
        public String Name { get; set; }
        
    }
}