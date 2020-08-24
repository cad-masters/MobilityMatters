using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace MobilityMatters.Northwind
{
    public partial class ProgramListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "MobilityMatters.Northwind.ProgramListFormatter";

        public ProgramListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

