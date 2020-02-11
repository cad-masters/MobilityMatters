
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.Mail")]
    [BasedOnRow(typeof(Entities.MailRow), CheckNames = true)]
    public class MailColumns
    {
        [EditLink, SortOrder(1, descending: true), QuickFilter]
        public DateTime SendDateTime { get; set; }
        [EditLink]
        public String Subject { get; set; }
        [DistinctValuesEditor(AutoComplete = true), QuickFilter]
        public String From { get; set; }
        [DistinctValuesEditor(AutoComplete = true), QuickFilter]
        public String To { get; set; }
    }
}