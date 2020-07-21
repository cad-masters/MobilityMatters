using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }

        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string AccessDenied = "~/Views/Errors/AccessDenied.cshtml";
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Northwind
        {
            public static class AvailabilityAm
            {
                public const string AvailabilityAmIndex = "~/Modules/Northwind/AvailabilityAm/AvailabilityAmIndex.cshtml";
            }

            public static class AvailabilityAmMultiple
            {
                public const string AvailabilityAmMultipleIndex = "~/Modules/Northwind/AvailabilityAmMultiple/AvailabilityAmMultipleIndex.cshtml";
            }

            public static class AvailabilityPm
            {
                public const string AvailabilityPmIndex = "~/Modules/Northwind/AvailabilityPm/AvailabilityPmIndex.cshtml";
            }

            public static class AvailabilityPmMultiple
            {
                public const string AvailabilityPmMultipleIndex = "~/Modules/Northwind/AvailabilityPmMultiple/AvailabilityPmMultipleIndex.cshtml";
            }

            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Cities
            {
                public const string CitiesIndex = "~/Modules/Northwind/Cities/CitiesIndex.cshtml";
            }

            public static class CitiesMulti
            {
                public const string CitiesMultiIndex = "~/Modules/Northwind/CitiesMulti/CitiesMultiIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
                public const string InactiveCustomerIndex = "~/Modules/Northwind/Customer/InactiveCustomerIndex.cshtml";
            }

            public static class Employees
            {
                public const string EmployeesIndex = "~/Modules/Northwind/Employees/EmployeesIndex.cshtml";
                public const string InactiveEmployeeIndex = "~/Modules/Northwind/Employees/InactiveEmployeeIndex.cshtml";
            }

            public static class Mail
            {
                public const string MailIndex = "~/Modules/Northwind/Mail/MailIndex.cshtml";
            }

            public static class MailAttachments
            {
                public const string MailAttachmentsIndex = "~/Modules/Northwind/MailAttachments/MailAttachmentsIndex.cshtml";
            }

            public static class Order
            {
                public const string CancelledOrderIndex = "~/Modules/Northwind/Order/CancelledOrderIndex.cshtml";
                public const string OrderDetailReport = "~/Modules/Northwind/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
                public const string TripConfirm = "~/Modules/Northwind/Order/TripConfirm.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class SpecialNeeds
            {
                public const string SpecialNeedsIndex = "~/Modules/Northwind/SpecialNeeds/SpecialNeedsIndex.cshtml";
            }

            public static class SpecialNeedsMultipleVolunteer
            {
                public const string SpecialNeedsMultipleVolunteerIndex = "~/Modules/Northwind/SpecialNeedsMultipleVolunteer/SpecialNeedsMultipleVolunteerIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Northwind/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string _LayoutSlim = "~/Views/Shared/_LayoutSlim.cshtml";
            public const string _LayoutSlimHead = "~/Views/Shared/_LayoutSlimHead.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}

