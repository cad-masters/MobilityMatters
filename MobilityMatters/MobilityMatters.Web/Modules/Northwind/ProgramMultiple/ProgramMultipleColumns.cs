
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.ProgramMultiple")]
    [BasedOnRow(typeof(Entities.ProgramMultipleRow), CheckNames = true)]
    public class ProgramMultipleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ProgramMultipleId { get; set; }
        public Int32 ProgramId { get; set; }
        public Int32 CustomerId { get; set; }
    }
}