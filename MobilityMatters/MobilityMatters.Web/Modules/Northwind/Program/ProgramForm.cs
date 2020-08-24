
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.Program")]
    [BasedOnRow(typeof(Entities.ProgramRow), CheckNames = true)]
    public class ProgramForm
    {
        public String Name { get; set; }
    }
}