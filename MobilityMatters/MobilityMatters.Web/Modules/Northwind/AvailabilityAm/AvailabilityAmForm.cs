
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.AvailabilityAm")]
    [BasedOnRow(typeof(Entities.AvailabilityAmRow), CheckNames = true)]
    public class AvailabilityAmForm
    {
        public String Day { get; set; }
    }
}