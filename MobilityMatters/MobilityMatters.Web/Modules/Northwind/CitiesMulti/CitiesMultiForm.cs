
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.CitiesMulti")]
    [BasedOnRow(typeof(Entities.CitiesMultiRow), CheckNames = true)]
    public class CitiesMultiForm
    {
        public Int32 CityId { get; set; }
        public Int32 EmployeeId { get; set; }
    }
}