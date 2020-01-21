
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.SpecialNeedsMultipleVolunteer")]
    [BasedOnRow(typeof(Entities.SpecialNeedsMultipleVolunteerRow), CheckNames = true)]
    public class SpecialNeedsMultipleVolunteerForm
    {
        public Int32 SpecialNeedsId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}