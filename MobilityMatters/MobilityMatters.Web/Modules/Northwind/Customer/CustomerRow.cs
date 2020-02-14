
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Customers")]
    [DisplayName("Riders"), InstanceName("Rider")]
    [ReadPermission(PermissionKeys.Customer.View)]
    [ModifyPermission(PermissionKeys.Customer.Modify)]
    [DeletePermission(PermissionKeys.Customer.Delete)]
    [LeftJoin("cd", "CustomerDetails", "cd.[ID] = t0.[ID]", RowType = typeof(CustomerDetailsRow), TitlePrefix = "")]
    [UpdatableExtension("cd", typeof(CustomerDetailsRow), CascadeDelete = true)]
    [LookupScript(typeof(Lookups.CustomerLookup))]
    public sealed class CustomerRow : Row, IIdRow, INameRow
    {
        [DisplayName("ID"), Identity]
        public Int32? ID
        {
            get { return Fields.ID[this]; }
            set { Fields.ID[this] = value; }
        }

        [DisplayName("Rider Id"), Size(5), PrimaryKey, NotNull, QuickSearch, Updatable(false), LookupInclude]
        public String CustomerID
        {
            get { return Fields.CustomerID[this]; }
            set { Fields.CustomerID[this] = value; }
        }

        [DisplayName("Last Name"), Size(40), NotNull, QuickSearch, LookupInclude]
        public String CompanyName
        {
            get { return Fields.CompanyName[this]; }
            set { Fields.CompanyName[this] = value; }
        }

        [DisplayName("First Name"), Size(30), QuickSearch]
        public String ContactName
        {
            get { return Fields.ContactName[this]; }
            set { Fields.ContactName[this] = value; }
        }

        [DisplayName("FullName"), QuickSearch]
        [Expression("CONCAT(T0.[ContactName], CONCAT(' ', T0.[CompanyName]))")]
        [Expression("(T0.ContacttName || ' ' || T0.CompanyName)", Dialect = "Sqlite")]
        public String RiderFullName
        {
            get { return Fields.RiderFullName[this]; }
            set { Fields.RiderFullName[this] = value; }
        }

        /*[DisplayName("Contact Title"), Size(30)]
        public String ContactTitle
        {
            get { return Fields.ContactTitle[this]; }
            set { Fields.ContactTitle[this] = value; }
        }*/

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15), LookupEditor(typeof(Lookups.CustomerCityLookup), CascadeFrom = "Country", AutoComplete = true)]
        public String City
        {
            get { return Fields.City[this]; }
            set { Fields.City[this] = value; }
        }

        [DisplayName("State"), Size(15)]
        public String Region
        {
            get { return Fields.Region[this]; }
            set { Fields.Region[this] = value; }
        }

        [DisplayName("Zip Code"), Size(10)]
        public String PostalCode
        {
            get { return Fields.PostalCode[this]; }
            set { Fields.PostalCode[this] = value; }
        }

        [DisplayName("Residence"), Size(10), LookupEditor(typeof(Lookups.CustomerResidenceLookup), AutoComplete = true)]
        public String Residence
        {
            get { return Fields.Residence[this]; }
            set { Fields.Residence[this] = value; }
        }

        [DisplayName("DNR"), Size(10), LookupEditor(typeof(Lookups.CustomerDNRLookup), AutoComplete = true)]
        public String DNR
        {
            get { return Fields.DNR[this]; }
            set { Fields.DNR[this] = value; }
        }

        [DisplayName("ER Radio"), Size(15)]
        public Boolean? Radio
        {
            get { return Fields.Radio[this]; }
            set { Fields.Radio[this] = value; }
        }
        [DisplayName("Program"), Size(30), LookupEditor(typeof(Lookups.CustomerProgramOptionLookup), InplaceAdd = true, AutoComplete = true)]
        public String ProgramOption
        {
            get { return Fields.ProgramOption[this]; }
            set { Fields.ProgramOption[this] = value; }
        }

        [DisplayName("County"), Size(15), LookupEditor(typeof(Lookups.CustomerCountryLookup), AutoComplete = true)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Rider By County"), Expression("(CASE WHEN T0.[Country] = 'Alameda' THEN 0 ELSE 1 END)")]
        public RiderByCounty? County
        {
            get { return (RiderByCounty?)Fields.County[this]; }
            set { Fields.County[this] = (Int32?)value; }
        }


        [DisplayName("Status"), Size(5), LookupEditor(typeof(Lookups.CustomerProgramLookup), InplaceAdd = true, AutoComplete = true)]
        public String Program
        {
            get { return Fields.Program[this]; }
            set { Fields.Program[this] = value; }
        }

        [DisplayName("Phone"), Size(24)]
        public String Phone
        {
            get { return Fields.Phone[this]; }
            set { Fields.Phone[this] = value; }
        }

        [DisplayName("Language"), Size(24)]
        public String PLanguage
        {
            get { return Fields.PLanguage[this]; }
            set { Fields.PLanguage[this] = value; }
        }

        [DisplayName("EIO"), NotNull]
        public Boolean? EIO
        {
            get { return Fields.EIO[this]; }
            set { Fields.EIO[this] = value; }
        }

        [DisplayName("Age"), Size(24), Updatable(false)]
        public Int32? AgeCalc
        {
            get { return Fields.AgeCalc[this]; }
            set { Fields.AgeCalc[this] = value; }
        }

        [DisplayName("Birthday")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [Origin("cd")]
        public DateTime? LastContactDate
        {
            get { return Fields.LastContactDate[this]; }
            set { Fields.LastContactDate[this] = value; }
        }


        [Origin("cd"), LookupEditor(typeof(EmployeeRow))]
        public Int32? LastContactedBy
        {
            get { return Fields.LastContactedBy[this]; }
            set { Fields.LastContactedBy[this] = value; }
        }

        [Origin("cd"), EmailEditor]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyName
        {
            get { return Fields.EmergencyName[this]; }
            set { Fields.EmergencyName[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyName2
        {
            get { return Fields.EmergencyName2[this]; }
            set { Fields.EmergencyName2[this] = value; }
        }

        [Origin("cd"), LookupEditor(typeof(Lookups.CustomerDetailsGenderLookup))]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [Origin("cd"), LookupEditor(typeof(Lookups.CustomerDetailsReferralSourceLookup), InplaceAdd = true)]
        public String ReferralSource
        {
            get { return Fields.ReferralSource[this]; }
            set { Fields.ReferralSource[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyPhone
        {
            get { return Fields.EmergencyPhone[this]; }
            set { Fields.EmergencyPhone[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyPhone2
        {
            get { return Fields.EmergencyPhone2[this]; }
            set { Fields.EmergencyPhone2[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyRelation
        {
            get { return Fields.EmergencyRelation[this]; }
            set { Fields.EmergencyRelation[this] = value; }
        }

        [Origin("cd")]
        public String EmergencyRelation2
        {
            get { return Fields.EmergencyRelation2[this]; }
            set { Fields.EmergencyRelation2[this] = value; }
        }

        [Origin("cd")]
        public String PreferredHospital
        {
            get { return Fields.PreferredHospital[this]; }
            set { Fields.PreferredHospital[this] = value; }
        }

        [Origin("cd")]
        public String Medical
        {
            get { return Fields.Medical[this]; }
            set { Fields.Medical[this] = value; }
        }

        [Origin("cd")]
        public String Dental
        {
            get { return Fields.Dental[this]; }
            set { Fields.Dental[this] = value; }
        }
        [Origin("cd")]
        public String Groceries
        {
            get { return Fields.Groceries[this]; }
            set { Fields.Groceries[this] = value; }
        }
        [Origin("cd")]
        public String OtherTransport
        {
            get { return Fields.OtherTransport[this]; }
            set { Fields.OtherTransport[this] = value; }
        }

        [Origin("cd"), LookupEditor(typeof(Lookups.CustomerDetailsTEMPLookup))]
        public String TEMP
        {
            get { return Fields.TEMP[this]; }
            set { Fields.TEMP[this] = value; }
        }

        [Origin("cd")]
        public String LivingWith
        {
            get { return Fields.LivingWith[this]; }
            set { Fields.LivingWith[this] = value; }
        }

        [Origin("cd"), DefaultValue(false)]
        public Boolean? SendBulletin
        {
            get { return Fields.SendBulletin[this]; }
            set { Fields.SendBulletin[this] = value; }
        }

        [Origin("cd"), DefaultValue(false)]
        public Boolean? Smoker
        {
            get { return Fields.Smoker[this]; }
            set { Fields.Smoker[this] = value; }
        }

        [NotesEditor, NotMapped]
        public List<NoteRow> NoteList
        {
            get { return Fields.NoteList[this]; }
            set { Fields.NoteList[this] = value; }
        }
        
        [LookupEditor(typeof(EmployeeRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CustomerRepresentativesRow), "CustomerId", "EmployeeId")]
        [MinSelectLevel(SelectLevel.Details), QuickFilter(CssClass = "hidden-xs")]
        public List<Int32> Representatives
        {
            get { return Fields.Representatives[this]; }
            set { Fields.Representatives[this] = value; }
        }

        [DisplayName("Special Needs")]
        [LookupEditor(typeof(SpecialNeedsRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(SpecialNeedsMultipleRow), "CustomerId", "SpecialNeedsId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> SpecialNeedsList
        {
            get { return Fields.SpecialNeedsList[this]; }
            set { Fields.SpecialNeedsList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CompanyName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field  ID;
            public StringField CustomerID;
            public StringField CompanyName;
            public StringField ContactName;
            public StringField RiderFullName;
            public StringField PLanguage;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField DNR;
            public BooleanField Radio;
            public StringField Country;
            public Int32Field County;
            public StringField Phone;
            public StringField PreferredHospital;
            public StringField Medical;
            public StringField Dental;
            public StringField Groceries;
            public StringField OtherTransport;
            public StringField Program;
            public StringField ProgramOption;
            public StringField TEMP;
            public BooleanField EIO;
            public BooleanField Smoker;
            public StringField LivingWith;
            public StringField Residence;
            public StringField ReferralSource;
            public DateTimeField BirthDate;
            public RowListField<NoteRow> NoteList;
            public ListField<Int32> Representatives;
            public ListField<Int32> SpecialNeedsList;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public StringField Gender;
            public StringField EmergencyName;
            public StringField EmergencyPhone;
            public StringField EmergencyName2;
            public StringField EmergencyPhone2;
            public StringField EmergencyRelation2;
            public StringField EmergencyRelation;
            public Int32Field AgeCalc;
            public BooleanField SendBulletin;

        }
    }
}