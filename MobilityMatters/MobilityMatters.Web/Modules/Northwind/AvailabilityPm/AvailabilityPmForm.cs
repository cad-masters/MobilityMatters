
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.AvailabilityPm")]
    [BasedOnRow(typeof(Entities.AvailabilityPmRow), CheckNames = true)]
    public class AvailabilityPmForm
    {
        public String Day { get; set; }
    }
}