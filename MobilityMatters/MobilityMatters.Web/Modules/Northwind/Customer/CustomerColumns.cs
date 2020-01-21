
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow), CheckNames = true)]
    public class CustomerColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), Hidden, Width(100)]
        public String CustomerID { get; set; }
        [EditLink, Width(150)]
        public String CompanyName { get; set; }
        [Width(150)]
        public String ContactName { get; set; }
        [Width(50), QuickFilter, LookupEditor(typeof(Lookups.CustomerProgramLookup))]
        public String Program { get; set; }
        [Width(65), QuickFilter, LookupEditor(typeof(Lookups.CustomerProgramOptionLookup))]
        public String ProgramOption { get; set; }
        [Width(120)]
        public String Phone { get; set; }
        [Width(150)]
        public String Address { get; set; }
        [Width(130), FilterOnly, LookupEditor(typeof(Lookups.CustomerCountryLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String Country { get; set; }
        [Width(100), LookupEditor(typeof(Lookups.CustomerCityLookup))]
        [QuickFilter(CssClass = "hidden-xs"), QuickFilterOption("cascadeFrom", "Country")]
        public String City { get; set; }
        [Width(50)]
        public String Region { get; set; }
        [Width(130), FilterOnly, LookupEditor(typeof(Lookups.CustomerDetailsTEMPLookup)), QuickFilter(CssClass = "hidden-xs")]
        public String TEMP { get; set; }
        [Width(80)]
        public String PostalCode { get; set; }
        [Width(110), SpecialNeedsListFormatter]
        public List<Int32> SpecialNeedsList { get; set; }
        [Width(50)]
        public String DNR { get; set; }
        [Width(7)]
        public Boolean EIO { get; set; }
        [Width(7), Hidden]
        public Boolean Smoker { get; set; }

        [Width(70)]
        public String PLanguage { get; set; }
        [Width(70), Hidden]
        public String Gender { get; set; }

        [Width(70)]
        public String Residence { get; set; }
        [Width(70), QuickFilter]
        public String ReferralSource { get; set; }
        [Width(25)]
        public Boolean Radio { get; set; }
        [Width(110)]
        public String EmergencyName { get; set; }
        [Width(110)]
        public String EmergencyPhone { get; set; }
        [Width(110), Hidden]
        public String EmergencyName2 { get; set; }
        [Width(110), Hidden]
        public String EmergencyPhone2 { get; set; }
        [Width(110), Hidden]
        public String BirthDate { get; set; }
        [Width(110), Hidden]
        public String LivingWith { get; set; }

        [Width(50), Hidden]
        public String AgeCalc { get; set; }
        /*[Width(250), EmployeeListFormatter, CellDecorator(typeof(EmployeeListDecorator))]
        public String Representatives { get; set; }*/
    }
}