using Serenity.ComponentModel;

namespace MobilityMatters.Northwind
{
    public partial class SpecialNeedsListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "MobilityMatters.Northwind.SpecialNeedsListFormatter";

        public SpecialNeedsListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

