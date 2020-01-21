
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.AvailabilityPmMultiple")]
    [BasedOnRow(typeof(Entities.AvailabilityPmMultipleRow), CheckNames = true)]
    public class AvailabilityPmMultipleForm
    {
        public Int32 AvailabilityPmid { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}