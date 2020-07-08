
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[Employees]")]
    [DisplayName("Volunteers"), InstanceName("Volunteer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [OuterApply("jLastTrip", "select top 1 * from Orders o where o.EmployeeId = t0.EmployeeId order by o.OrderDate desc")]
    [LookupScript]
    public sealed class EmployeesRow : Row, IIdRow, INameRow
    {
        [DisplayName("Employee Id"), Size(2), Column("EmployeeID"), Identity]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("Last Name"), Size(15), NotNull, QuickSearch]
        public String LastName
        {
            get { return Fields.LastName[this]; }
            set { Fields.LastName[this] = value; }
        }

        [DisplayName("First Name"), Size(10), NotNull]
        public String FirstName
        {
            get { return Fields.FirstName[this]; }
            set { Fields.FirstName[this] = value; }
        }

        [DisplayName("Email"), EmailEditor, Size(15)]
        public String Email
        {
            get { return Fields.Email[this]; }
            set { Fields.Email[this] = value; }
        }


        [DisplayName("Status"), Size(25), QuickSearch, LookupEditor(typeof(Lookups.EmployeesStatusLookup), InplaceAdd = true, AutoComplete = true)]
        public String Title
        {
            get { return Fields.Title[this]; }
            set { Fields.Title[this] = value; }
        }

        [DisplayName("Status Options"), Size(50)]
        public String TitleOfCourtesy
        {
            get { return Fields.TitleOfCourtesy[this]; }
            set { Fields.TitleOfCourtesy[this] = value; }
        }

        [DisplayName("Birth Date")]
        public DateTime? BirthDate
        {
            get { return Fields.BirthDate[this]; }
            set { Fields.BirthDate[this] = value; }
        }

        [DisplayName("Date of Return")]
        public DateTime? ReturnDate
        {
            get { return Fields.ReturnDate[this]; }
            set { Fields.ReturnDate[this] = value; }
        }

        [DisplayName("Start Date")]
        public DateTime? HireDate
        {
            get { return Fields.HireDate[this]; }
            set { Fields.HireDate[this] = value; }
        }

        [DisplayName("End Date")]
        public DateTime? EndDate
        {
            get { return Fields.EndDate[this]; }
            set { Fields.EndDate[this] = value; }
        }

        [DisplayName("Why Ending?"), Size(60)]
        public String WhyEnding
        {
            get { return Fields.WhyEnding[this]; }
            set { Fields.WhyEnding[this] = value; }
        }

        [DisplayName("Training Date")]
        public DateTime? TrainingDate
        {
            get { return Fields.TrainingDate[this]; }
            set { Fields.TrainingDate[this] = value; }
        }

        [DisplayName("Address"), Size(60)]
        public String Address
        {
            get { return Fields.Address[this]; }
            set { Fields.Address[this] = value; }
        }

        [DisplayName("City"), Size(15)]
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

        [DisplayName("Country"), Size(15)]
        public String Country
        {
            get { return Fields.Country[this]; }
            set { Fields.Country[this] = value; }
        }

        [DisplayName("Phone #"), Size(24)]
        public String HomePhone
        {
            get { return Fields.HomePhone[this]; }
            set { Fields.HomePhone[this] = value; }
        }

        [DisplayName("Extension"), Size(4)]
        public String Extension
        {
            get { return Fields.Extension[this]; }
            set { Fields.Extension[this] = value; }
        }

        [DisplayName("Photo"), Size(2147483647)]
        public Stream Photo
        {
            get { return Fields.Photo[this]; }
            set { Fields.Photo[this] = value; }
        }

        [DisplayName("Notes"), Size(1073741823)]
        public String Notes
        {
            get { return Fields.Notes[this]; }
            set { Fields.Notes[this] = value; }
        }

        [DisplayName("Gender"), Helpers.HardcodedValuesGenderEditor]
        public String Gender
        {
            get { return Fields.Gender[this]; }
            set { Fields.Gender[this] = value; }
        }

        /*[LookupEditor(typeof(Lookups.EmployeesReferralSourceLookup))]*/
        [DisplayName("Referral Source"), Size(30)]
        public String ReferralSource
        {
            get { return Fields.ReferralSource[this]; }
            set { Fields.ReferralSource[this] = value; }
        }

        [DisplayName("Lic. Plate #"), Size(15)]
        public String LicensePlate
        {
            get { return Fields.LicensePlate[this]; }
            set { Fields.LicensePlate[this] = value; }
        }
        [DisplayName("Lic. Plate Exp.")]
        public DateTime? LicensePlateExp
        {
            get { return Fields.LicensePlateExp[this]; }
            set { Fields.LicensePlateExp[this] = value; }
        }

        [DisplayName("Drivers Lic. #"), Size(15)]
        public String DriversLicense
        {
            get { return Fields.DriversLicense[this]; }
            set { Fields.DriversLicense[this] = value; }
        }

        [DisplayName("Drivers Lic. Exp.")]
        public DateTime? DriversLicenseExp
        {
            get { return Fields.DriversLicenseExp[this]; }
            set { Fields.DriversLicenseExp[this] = value; }
        }

        [DisplayName("Insurance"), Size(15)]
        public String Insurance
        {
            get { return Fields.Insurance[this]; }
            set { Fields.Insurance[this] = value; }
        }

        [DisplayName("Insurance Exp.")]
        public DateTime? InsuranceExp
        {
            get { return Fields.InsuranceExp[this]; }
            set { Fields.InsuranceExp[this] = value; }
        }

        [DisplayName("Vehicle Make"), Size(15)]
        public String VehicleMake
        {
            get { return Fields.VehicleMake[this]; }
            set { Fields.VehicleMake[this] = value; }
        }

        [DisplayName("Vehicle Model"), Size(15)]
        public String VehicleModel
        {
            get { return Fields.VehicleModel[this]; }
            set { Fields.VehicleModel[this] = value; }
        }

        [DisplayName("Vehicle 2 Make"), Size(15)]
        public String VehicleMake2
        {
            get { return Fields.VehicleMake2[this]; }
            set { Fields.VehicleMake2[this] = value; }
        }

        [DisplayName("Vehicle 2 Model"), Size(15)]
        public String VehicleModel2
        {
            get { return Fields.VehicleModel2[this]; }
            set { Fields.VehicleModel2[this] = value; }
        }

        [DisplayName("Needs Serviced?")]
        [LookupEditor(typeof(SpecialNeedsRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(SpecialNeedsMultipleVolunteerRow), "EmployeeId", "SpecialNeedsId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> SpecialNeedsList
        {
            get { return Fields.SpecialNeedsList[this]; }
            set { Fields.SpecialNeedsList[this] = value; }
        }

        [DisplayName("Cities Serviced?")]
        [LookupEditor(typeof(CitiesRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(CitiesMultiRow), "EmployeeId", "CityId")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> CitiesList
        {
            get { return Fields.CitiesList[this]; }
            set { Fields.CitiesList[this] = value; }
        }

        [DisplayName("AM Availability")]
        [LookupEditor(typeof(AvailabilityAmRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(AvailabilityAmMultipleRow), "EmployeeId", "AvailabilityAMID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> AvailabilityAMList
        {
            get { return Fields.AvailabilityAMList[this]; }
            set { Fields.AvailabilityAMList[this] = value; }
        }

        [DisplayName("PM Availability")]
        [LookupEditor(typeof(AvailabilityPmRow), Multiple = true), NotMapped]
        [LinkingSetRelation(typeof(AvailabilityPmMultipleRow), "EmployeeId", "AvailabilityPMID")]
        [MinSelectLevel(SelectLevel.Details)]
        public List<Int32> AvailabilityPMList
        {
            get { return Fields.AvailabilityPMList[this]; }
            set { Fields.AvailabilityPMList[this] = value; }
        }

        [DisplayName("Reports To"), ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jReportsTo"), TextualField("ReportsToLastName")]
        public Int32? ReportsTo
        {
            get { return Fields.ReportsTo[this]; }
            set { Fields.ReportsTo[this] = value; }
        }

        [DisplayName("Photo Path"), Size(255)]
        public String PhotoPath
        {
            get { return Fields.PhotoPath[this]; }
            set { Fields.PhotoPath[this] = value; }
        }

        [DisplayName("Volunteer Region"), Size(255)]
        public String VolunteerRegion
        {
            get { return Fields.VolunteerRegion[this]; }
            set { Fields.VolunteerRegion[this] = value; }
        }

        [DisplayName("Additional Languages"), Size(100)]
        public String Language
        {
            get { return Fields.Language[this]; }
            set { Fields.Language[this] = value; }
        }

        [DisplayName("Inactive"), Size(30)]
        public Boolean? Inactive
        {
            get { return Fields.Inactive[this]; }
            set { Fields.Inactive[this] = value; }
        }

        [DisplayName("On Vacation"), Size(30)]
        public Boolean? OnVacation
        {
            get { return Fields.OnVacation[this]; }
            set { Fields.OnVacation[this] = value; }
        }

        [DisplayName("Smoker"), Size(30)]
        public Boolean? Smoker
        {
            get { return Fields.Smoker[this]; }
            set { Fields.Smoker[this] = value; }
        }

        [DisplayName("DMV Clearance"), Size(30)]
        public Boolean? DMVClearance
        {
            get { return Fields.DMVClearance[this]; }
            set { Fields.DMVClearance[this] = value; }
        }

        [DisplayName("Police Clearance"), Size(30)]
        public Boolean? PoliceClearance
        {
            get { return Fields.PoliceClearance[this]; }
            set { Fields.PoliceClearance[this] = value; }
        }

        [DisplayName("COVID-19 Test Results"), Size(30) /*Helpers.HardcodedValuesCOVIDEditor*/]
        public String COVIDResults
        {
            get { return Fields.COVIDResults[this]; }
            set { Fields.COVIDResults[this] = value; }
        }

        [DisplayName("COVID-19 Test Date")]
        public DateTime? COVIDTestDate
        {
            get { return Fields.COVIDTestDate[this]; }
            set { Fields.COVIDTestDate[this] = value; }
        }

        [DisplayName("Reports To Last Name"), Expression("jReportsTo.[LastName]")]
        public String ReportsToLastName
        {
            get { return Fields.ReportsToLastName[this]; }
            set { Fields.ReportsToLastName[this] = value; }
        }

        [DisplayName("Reports To First Name"), Expression("jReportsTo.[FirstName]")]
        public String ReportsToFirstName
        {
            get { return Fields.ReportsToFirstName[this]; }
            set { Fields.ReportsToFirstName[this] = value; }
        }

        [DisplayName("Reports To Title"), Expression("jReportsTo.[Title]")]
        public String ReportsToTitle
        {
            get { return Fields.ReportsToTitle[this]; }
            set { Fields.ReportsToTitle[this] = value; }
        }

        [DisplayName("Reports To Title Of Courtesy"), Expression("jReportsTo.[TitleOfCourtesy]")]
        public String ReportsToTitleOfCourtesy
        {
            get { return Fields.ReportsToTitleOfCourtesy[this]; }
            set { Fields.ReportsToTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Reports To Birth Date"), Expression("jReportsTo.[BirthDate]")]
        public DateTime? ReportsToBirthDate
        {
            get { return Fields.ReportsToBirthDate[this]; }
            set { Fields.ReportsToBirthDate[this] = value; }
        }

        [DisplayName("Reports To Hire Date"), Expression("jReportsTo.[HireDate]")]
        public DateTime? ReportsToHireDate
        {
            get { return Fields.ReportsToHireDate[this]; }
            set { Fields.ReportsToHireDate[this] = value; }
        }

        [DisplayName("Reports To Address"), Expression("jReportsTo.[Address]")]
        public String ReportsToAddress
        {
            get { return Fields.ReportsToAddress[this]; }
            set { Fields.ReportsToAddress[this] = value; }
        }

        [DisplayName("Reports To City"), Expression("jReportsTo.[City]")]
        public String ReportsToCity
        {
            get { return Fields.ReportsToCity[this]; }
            set { Fields.ReportsToCity[this] = value; }
        }

        [DisplayName("Reports To Region"), Expression("jReportsTo.[Region]")]
        public String ReportsToRegion
        {
            get { return Fields.ReportsToRegion[this]; }
            set { Fields.ReportsToRegion[this] = value; }
        }

        [DisplayName("Reports To Postal Code"), Expression("jReportsTo.[PostalCode]")]
        public String ReportsToPostalCode
        {
            get { return Fields.ReportsToPostalCode[this]; }
            set { Fields.ReportsToPostalCode[this] = value; }
        }

        [DisplayName("Reports To Country"), Expression("jReportsTo.[Country]")]
        public String ReportsToCountry
        {
            get { return Fields.ReportsToCountry[this]; }
            set { Fields.ReportsToCountry[this] = value; }
        }

        [DisplayName("Reports To Home Phone"), Expression("jReportsTo.[HomePhone]")]
        public String ReportsToHomePhone
        {
            get { return Fields.ReportsToHomePhone[this]; }
            set { Fields.ReportsToHomePhone[this] = value; }
        }

        [DisplayName("Volunteer Notes")]
        public String NotesPlainText
        {
            get { return Fields.NotesPlainText[this]; }
            set { Fields.NotesPlainText[this] = value; }
        }

        [DisplayName("Reports To Extension"), Expression("jReportsTo.[Extension]")]
        public String ReportsToExtension
        {
            get { return Fields.ReportsToExtension[this]; }
            set { Fields.ReportsToExtension[this] = value; }
        }

        [DisplayName("Reports To Photo"), Expression("jReportsTo.[Photo]")]
        public Stream ReportsToPhoto
        {
            get { return Fields.ReportsToPhoto[this]; }
            set { Fields.ReportsToPhoto[this] = value; }
        }

        [DisplayName("Reports To Notes"), Expression("jReportsTo.[Notes]")]
        public String ReportsToNotes
        {
            get { return Fields.ReportsToNotes[this]; }
            set { Fields.ReportsToNotes[this] = value; }
        }

        [DisplayName("Reports To"), Expression("jReportsTo.[ReportsTo]")]
        public Int32? ReportsTo1
        {
            get { return Fields.ReportsTo1[this]; }
            set { Fields.ReportsTo1[this] = value; }
        }

        [DisplayName("Reports To Photo Path"), Expression("jReportsTo.[PhotoPath]")]
        public String ReportsToPhotoPath
        {
            get { return Fields.ReportsToPhotoPath[this]; }
            set { Fields.ReportsToPhotoPath[this] = value; }
        }

        [DisplayName("Date of Last Trip"), ReadOnly(true), Expression("jLastTrip.[OrderDate]")]
        public DateTime? DateOfLastTrip
        {
            get { return Fields.DateOfLastTrip[this]; }
            set { Fields.DateOfLastTrip[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.EmployeeId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.LastName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public EmployeesRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field EmployeeId;
            public StringField LastName;
            public StringField FirstName;
            public StringField Email;
            public StringField Title;
            public StringField TitleOfCourtesy;
            public DateTimeField BirthDate;
            public DateTimeField HireDate;
            public DateTimeField EndDate;
            public StringField WhyEnding;
            public DateTimeField TrainingDate;
            public StringField Address;
            public StringField City;
            public StringField Region;
            public StringField PostalCode;
            public StringField Country;
            public StringField HomePhone;
            public StringField Extension;
            public StreamField Photo;
            public StringField Notes;
            public StringField VolunteerRegion;
            public StringField NotesPlainText;
            public Int32Field ReportsTo;
            public StringField PhotoPath;
            public BooleanField OnVacation;
            public BooleanField Inactive;
            public StringField DriversLicense;
            public DateTimeField DriversLicenseExp;
            public StringField LicensePlate;
            public DateTimeField LicensePlateExp;
            public StringField Insurance;
            public DateTimeField InsuranceExp;
            public DateTimeField COVIDTestDate;
            public StringField COVIDResults;

            public StringField VehicleMake;
            public StringField VehicleModel;
            public StringField VehicleMake2;
            public StringField VehicleModel2;
            public ListField<Int32> SpecialNeedsList;
            public ListField<Int32> CitiesList;
            public ListField<Int32> AvailabilityAMList;
            public ListField<Int32> AvailabilityPMList;
            public StringField Gender;
            public BooleanField Smoker;
            public BooleanField DMVClearance;
            public BooleanField PoliceClearance;
            public StringField ReferralSource;
            public StringField Language;

            public StringField ReportsToLastName;
            public StringField ReportsToFirstName;
            public StringField ReportsToTitle;
            public StringField ReportsToTitleOfCourtesy;
            public DateTimeField ReportsToBirthDate;
            public DateTimeField ReportsToHireDate;
            public StringField ReportsToAddress;
            public StringField ReportsToCity;
            public StringField ReportsToRegion;
            public StringField ReportsToPostalCode;
            public StringField ReportsToCountry;
            public StringField ReportsToHomePhone;
            public StringField ReportsToExtension;
            public StreamField ReportsToPhoto;
            public StringField ReportsToNotes;
            public Int32Field ReportsTo1;
            public StringField ReportsToPhotoPath;

            public DateTimeField DateOfLastTrip;
            public DateTimeField ReturnDate;
        }
    }
}
