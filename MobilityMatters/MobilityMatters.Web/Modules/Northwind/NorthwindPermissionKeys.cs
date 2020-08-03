
using Serenity.Extensibility;
using System.ComponentModel;

namespace MobilityMatters.Northwind
{
    [NestedPermissionKeys]
    [DisplayName("Northwind")]
    public class PermissionKeys
    {
        [DisplayName("Customers")]
        public class Customer
        {
            [ImplicitPermission(General), ImplicitPermission(View)]
            public const string Delete = "Northwind:Customer:Delete";
            [Description("Create/Update"), ImplicitPermission(General)]
            public const string Modify = "Northwind:Customer:Modify";
            public const string View = "Northwind:Customer:View";
        }

        [DisplayName("Trips")]
        public class Orders
        {
            
            public const string Delete = "Northwind:Orders:Delete";
            [Description("Create/Update")]
            public const string Modify = "Northwind:Orders:Modify";
            public const string View = "Northwind:Orders:View";
        }

        [Description("[General]")]
        public const string General = "Northwind:General";
    }
}
