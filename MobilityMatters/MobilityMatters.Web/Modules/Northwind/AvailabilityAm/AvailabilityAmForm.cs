
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.AvailabilityAm")]
    [BasedOnRow(typeof(Entities.AvailabilityAmRow), CheckNames = true)]
    public class AvailabilityAmForm
    {
        public String Day { get; set; }
    }
}