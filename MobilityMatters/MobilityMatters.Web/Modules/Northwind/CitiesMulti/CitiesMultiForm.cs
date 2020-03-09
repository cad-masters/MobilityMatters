
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.CitiesMulti")]
    [BasedOnRow(typeof(Entities.CitiesMultiRow), CheckNames = true)]
    public class CitiesMultiForm
    {
        public Int32 CityId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}