
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.SpecialNeeds")]
    [BasedOnRow(typeof(Entities.SpecialNeedsRow), CheckNames = true)]
    public class SpecialNeedsForm
    {
        public String Name { get; set; }
    }
}