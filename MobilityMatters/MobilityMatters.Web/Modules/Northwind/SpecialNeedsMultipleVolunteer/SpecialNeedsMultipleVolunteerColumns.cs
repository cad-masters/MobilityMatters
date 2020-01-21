
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.SpecialNeedsMultipleVolunteer")]
    [BasedOnRow(typeof(Entities.SpecialNeedsMultipleVolunteerRow), CheckNames = true)]
    public class SpecialNeedsMultipleVolunteerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SpecialNeedsMultipleVolunteerId { get; set; }
        public Int32 SpecialNeedsId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}