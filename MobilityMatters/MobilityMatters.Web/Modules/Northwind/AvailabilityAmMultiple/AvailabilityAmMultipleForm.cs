
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.AvailabilityAmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityAmMultipleRow), CheckNames = true)]
    public class AvailabilityAmMultipleForm
    {
        public Int32 AvailabilityAmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}