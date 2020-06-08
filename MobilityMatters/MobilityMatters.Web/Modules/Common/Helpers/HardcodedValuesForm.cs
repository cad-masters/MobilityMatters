
namespace MobilityMatters.Helpers
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Helpers.HarcodedValues")]
    public class HardcodedValuesForm
    {
        [DisplayName("Some Value")]
        [HardcodedValuesEditor]
        public String SomeValue { get; set; }
    }
}