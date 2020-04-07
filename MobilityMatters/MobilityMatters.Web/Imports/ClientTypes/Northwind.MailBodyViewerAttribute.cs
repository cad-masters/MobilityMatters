using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

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

