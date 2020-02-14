

namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("CustomerDetails")]
    [DisplayName("CustomerDetails"), InstanceName("CustomerDetails")]
    [ReadPermission("Northwind:General")]
    [ModifyPermission("Northwind:General")]
    [LookupScript]
    public sealed class CustomerDetailsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), PrimaryKey]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Last Contact Date")]
        public DateTime? LastContactDate
        {
            get { return Fields.LastContactDate[this]; }
            set { Fields.LastContactDate[this] = value; }
        }

        [DisplayName("Last Contacted By"), ForeignKey("Employees", "EmployeeID"), LeftJoin("jLastContactedBy"), TextualField("LastContactedByLastName")]
        public Int32? LastContactedBy
        {
            get { return Fields.LastContactedBy[this]; }
            set { Fields.LastContactedBy[this] = value; }
        }

        [DisplayName("Email"), Size(100), QuickSearch]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }

        [DisplayName("Emergency Name"), Size(100), QuickSearch]
        public String EmergencyName
        {
            get { return Fields.EmergencyName[this]; }
            set { Fields.EmergencyName[this] = value; }
        }

        [DisplayName("Emergency Name 2"), Size(100), QuickSearch]
        public String EmergencyName2
        {
            get { return Fields.EmergencyName2[this]; }
            set { Fields.EmergencyName2[this] = value; }
        }

        [DisplayName("Referral Source"), Size(100), QuickSearch, LookupEditor(typeof(Lookups.CustomerDetailsReferralSourceLookup), InplaceAdd = true)]
        public String ReferralSource
        {
            get { return Fields.ReferralSource[this]; }
            set { Fields.ReferralSource[this] = value; }
        }

        [DisplayName("Emergency Phone"), Size(100), QuickSearch]
        public String EmergencyPhone
        {
            get { return Fields.EmergencyPhone[this]; }
            set { Fields.EmergencyPhone[this] = value; }
        }

        [DisplayName("Emergency Phone 2"), Size(100), QuickSearch]
        public String EmergencyPhone2
        {
            get { return Fields.EmergencyPhone2[this]; }
            set { Fields.EmergencyPhone2[this] = value; }
        }

        [DisplayName("Relationship"), Size(100), QuickSearch]
        public String EmergencyRelation
        {
            get { return Fields.EmergencyRelation[this]; }
            set { Fields.EmergencyRelation[this] = value; }
        }

        [DisplayName("Relationship 2"), Size(100), QuickSearch]
        public String EmergencyRelation2
        {
            get { return Fields.EmergencyRelation2[this]; }
            set { Fields.EmergencyRelation2[this] = value; }
        }

        [DisplayName("Gender"), Size(100), QuickSearch]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        [DisplayName("Living With"), Size(100), QuickSearch]
        public String LivingWith
        {
            get { return Fields.LivingWith[this]; }
            set { Fields.LivingWith[this] = value; }
        }

        [DisplayName("Preferred Hospital"), Size(100), QuickSearch]
        public String PreferredHospital
        {
            get { return Fields.PreferredHospital[this]; }
            set { Fields.PreferredHospital[this] = value; }
        }

        [DisplayName("Medical"), Size(100), QuickSearch]
        public String Medical
        {
            get { return Fields.Medical[this]; }
            set { Fields.Medical[this] = value; }
        }

        [DisplayName("Dental"), Size(100), QuickSearch]
        public String Dental
        {
            get { return Fields.Dental[this]; }
            set { Fields.Dental[this] = value; }
        }
        [DisplayName("Groceries"), Size(100), QuickSearch]
        public String Groceries
        {
            get { return Fields.Groceries[this]; }
            set { Fields.Groceries[this] = value; }
        }
        [DisplayName("Other Transport"), Size(100), QuickSearch]
        public String OtherTransport
        {
            get { return Fields.OtherTransport[this]; }
            set { Fields.OtherTransport[this] = value; }
        }

        [DisplayName("Temporary Client"), Size(100), QuickSearch]
        public String TEMP
        {
            get { return Fields.TEMP[this]; }
            set { Fields.TEMP[this] = value; }
        }

        [DisplayName("Send Bulletin"), NotNull]
        public Boolean? SendBulletin
        {
            get { return Fields.SendBulletin[this]; }
            set { Fields.SendBulletin[this] = value; }
        }

        [DisplayName("Smoker"), NotNull]
        public Boolean? Smoker
        {
            get { return Fields.Smoker[this]; }
            set { Fields.Smoker[this] = value; }
        }

        [DisplayName("Last Contacted By Last Name"), Expression("jLastContactedBy.[LastName]")]
        public String LastContactedByLastName
        {
            get { return Fields.LastContactedByLastName[this]; }
            set { Fields.LastContactedByLastName[this] = value; }
        }

        [DisplayName("Last Contacted By First Name"), Expression("jLastContactedBy.[FirstName]")]
        public String LastContactedByFirstName
        {
            get { return Fields.LastContactedByFirstName[this]; }
            set { Fields.LastContactedByFirstName[this] = value; }
        }

        [DisplayName("Last Contacted By Title"), Expression("jLastContactedBy.[Title]")]
        public String LastContactedByTitle
        {
            get { return Fields.LastContactedByTitle[this]; }
            set { Fields.LastContactedByTitle[this] = value; }
        }

        [DisplayName("Last Contacted By Title Of Courtesy"), Expression("jLastContactedBy.[TitleOfCourtesy]")]
        public String LastContactedByTitleOfCourtesy
        {
            get { return Fields.LastContactedByTitleOfCourtesy[this]; }
            set { Fields.LastContactedByTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Last Contacted By Birth Date"), Expression("jLastContactedBy.[BirthDate]")]
        public DateTime? LastContactedByBirthDate
        {
            get { return Fields.LastContactedByBirthDate[this]; }
            set { Fields.LastContactedByBirthDate[this] = value; }
        }

        [DisplayName("Last Contacted By Hire Date"), Expression("jLastContactedBy.[HireDate]")]
        public DateTime? LastContactedByHireDate
        {
            get { return Fields.LastContactedByHireDate[this]; }
            set { Fields.LastContactedByHireDate[this] = value; }
        }

        [DisplayName("Last Contacted By Address"), Expression("jLastContactedBy.[Address]")]
        public String LastContactedByAddress
        {
            get { return Fields.LastContactedByAddress[this]; }
            set { Fields.LastContactedByAddress[this] = value; }
        }

        [DisplayName("Last Contacted By City"), Expression("jLastContactedBy.[City]")]
        public String LastContactedByCity
        {
            get { return Fields.LastContactedByCity[this]; }
            set { Fields.LastContactedByCity[this] = value; }
        }

        [DisplayName("Last Contacted By Region"), Expression("jLastContactedBy.[Region]")]
        public String LastContactedByRegion
        {
            get { return Fields.LastContactedByRegion[this]; }
            set { Fields.LastContactedByRegion[this] = value; }
        }

        [DisplayName("Last Contacted By Postal Code"), Expression("jLastContactedBy.[PostalCode]")]
        public String LastContactedByPostalCode
        {
            get { return Fields.LastContactedByPostalCode[this]; }
            set { Fields.LastContactedByPostalCode[this] = value; }
        }

        [DisplayName("Last Contacted By Country"), Expression("jLastContactedBy.[Country]")]
        public String LastContactedByCountry
        {
            get { return Fields.LastContactedByCountry[this]; }
            set { Fields.LastContactedByCountry[this] = value; }
        }

        [DisplayName("Last Contacted By Home Phone"), Expression("jLastContactedBy.[HomePhone]")]
        public String LastContactedByHomePhone
        {
            get { return Fields.LastContactedByHomePhone[this]; }
            set { Fields.LastContactedByHomePhone[this] = value; }
        }

        [DisplayName("Last Contacted By Extension"), Expression("jLastContactedBy.[Extension]")]
        public String LastContactedByExtension
        {
            get { return Fields.LastContactedByExtension[this]; }
            set { Fields.LastContactedByExtension[this] = value; }
        }

        [DisplayName("Last Contacted By Photo"), Expression("jLastContactedBy.[Photo]")]
        public Stream LastContactedByPhoto
        {
            get { return Fields.LastContactedByPhoto[this]; }
            set { Fields.LastContactedByPhoto[this] = value; }
        }

        [DisplayName("Last Contacted By Notes"), Expression("jLastContactedBy.[Notes]")]
        public String LastContactedByNotes
        {
            get { return Fields.LastContactedByNotes[this]; }
            set { Fields.LastContactedByNotes[this] = value; }
        }

        [DisplayName("Last Contacted By Reports To"), Expression("jLastContactedBy.[ReportsTo]")]
        public Int32? LastContactedByReportsTo
        {
            get { return Fields.LastContactedByReportsTo[this]; }
            set { Fields.LastContactedByReportsTo[this] = value; }
        }

        [DisplayName("Last Contacted By Photo Path"), Expression("jLastContactedBy.[PhotoPath]")]
        public String LastContactedByPhotoPath
        {
            get { return Fields.LastContactedByPhotoPath[this]; }
            set { Fields.LastContactedByPhotoPath[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Email; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CustomerDetailsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public DateTimeField LastContactDate;
            public Int32Field LastContactedBy;
            public StringField Email;
            public BooleanField SendBulletin;
            public StringField EmergencyName;
            public StringField EmergencyPhone;
            public StringField EmergencyName2;
            public StringField EmergencyPhone2;
            public StringField EmergencyRelation;
            public StringField EmergencyRelation2;
            public StringField ReferralSource;
            public StringField Gender;
            public StringField LivingWith;
            public StringField TEMP;
            public StringField PreferredHospital;
            public BooleanField Smoker;
            public StringField Medical;
            public StringField Dental;
            public StringField Groceries;
            public StringField OtherTransport;

            public StringField LastContactedByLastName;
            public StringField LastContactedByFirstName;
            public StringField LastContactedByTitle;
            public StringField LastContactedByTitleOfCourtesy;
            public DateTimeField LastContactedByBirthDate;
            public DateTimeField LastContactedByHireDate;
            public StringField LastContactedByAddress;
            public StringField LastContactedByCity;
            public StringField LastContactedByRegion;
            public StringField LastContactedByPostalCode;
            public StringField LastContactedByCountry;
            public StringField LastContactedByHomePhone;
            public StringField LastContactedByExtension;
            public StreamField LastContactedByPhoto;
            public StringField LastContactedByNotes;
            public Int32Field LastContactedByReportsTo;
            public StringField LastContactedByPhotoPath;
        }
    }
}