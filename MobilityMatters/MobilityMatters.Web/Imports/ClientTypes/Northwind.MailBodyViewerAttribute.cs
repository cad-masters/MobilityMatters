using Serenity.ComponentModel;

namespace MobilityMatters.Northwind
{
    public partial class MailBodyViewerAttribute : CustomEditorAttribute
    {
        public const string Key = "MobilityMatters.Northwind.MailBodyViewer";

        public MailBodyViewerAttribute()
            : base(Key)
        {
        }
    }
}

