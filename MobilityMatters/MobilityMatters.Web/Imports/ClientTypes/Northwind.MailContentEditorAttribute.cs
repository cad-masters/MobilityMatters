using Serenity.ComponentModel;

namespace MobilityMatters.Northwind
{
    public partial class MailContentEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MobilityMatters.Northwind.MailContentEditor";

        public MailContentEditorAttribute()
            : base(Key)
        {
        }

        public object Cols
        {
            get { return GetOption<object>("cols"); }
            set { SetOption("cols", value); }
        }

        public object Rows
        {
            get { return GetOption<object>("rows"); }
            set { SetOption("rows", value); }
        }
    }
}

