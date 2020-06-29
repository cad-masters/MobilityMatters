using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MobilityMatters.Helpers
{
    public partial class HardcodedValuesCOVIDEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MobilityMatters.Helpers.HardcodedValuesCOVIDEditor";

        public HardcodedValuesCOVIDEditorAttribute()
            : base(Key)
        {
        }
    }
}

