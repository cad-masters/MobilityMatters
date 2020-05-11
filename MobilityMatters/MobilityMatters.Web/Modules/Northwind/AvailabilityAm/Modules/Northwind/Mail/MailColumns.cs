
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;

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