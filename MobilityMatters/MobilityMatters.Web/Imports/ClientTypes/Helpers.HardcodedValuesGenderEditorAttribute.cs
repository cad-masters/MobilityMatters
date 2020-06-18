using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MobilityMatters.Helpers
{
    public partial class HardcodedValuesGenderEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "MobilityMatters.Helpers.HardcodedValuesGenderEditor";

        public HardcodedValuesGenderEditorAttribute()
            : base(Key)
        {
        }
    }
}

