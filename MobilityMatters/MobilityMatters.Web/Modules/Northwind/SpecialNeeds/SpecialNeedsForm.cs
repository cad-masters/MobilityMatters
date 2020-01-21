
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.SpecialNeeds")]
    [BasedOnRow(typeof(Entities.SpecialNeedsRow), CheckNames = true)]
    public class SpecialNeedsForm
    {
        public String Name { get; set; }
    }
}