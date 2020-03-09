
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.AvailabilityPm")]
    [BasedOnRow(typeof(Entities.AvailabilityPmRow), CheckNames = true)]
    public class AvailabilityPmForm
    {
        public String Day { get; set; }
    }
}