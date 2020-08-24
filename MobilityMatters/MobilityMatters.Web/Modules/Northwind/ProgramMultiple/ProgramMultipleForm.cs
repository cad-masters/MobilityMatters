
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.ProgramMultiple")]
    [BasedOnRow(typeof(Entities.ProgramMultipleRow), CheckNames = true)]
    public class ProgramMultipleForm
    {
        public Int32 ProgramId { get; set; }
        public Int32 CustomerId { get; set; }
    }
}