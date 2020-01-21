
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.CitiesMulti")]
    [BasedOnRow(typeof(Entities.CitiesMultiRow), CheckNames = true)]
    public class CitiesMultiColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 CitiesMultiId { get; set; }
        public String CityName { get; set; }
        public String EmployeeLastName { get; set; }
    }
}