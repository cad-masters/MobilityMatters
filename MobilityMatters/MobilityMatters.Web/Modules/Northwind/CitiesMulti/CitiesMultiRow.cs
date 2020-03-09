
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[CitiesMulti]")]
    [DisplayName("Cities Multi"), InstanceName("Cities Multi")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class CitiesMultiRow : Row, IIdRow
    {
        [DisplayName("Cities Multi Id"), Identity]
        public Int32? CitiesMultiId
        {
            get { return Fields.CitiesMultiId[this]; }
            set { Fields.CitiesMultiId[this] = value; }
        }

        [DisplayName("City"), NotNull, ForeignKey("[dbo].[Cities]", "CityId"), LeftJoin("jCity"), TextualField("CityName")]
        public Int32? CityId
        {
            get { return Fields.CityId[this]; }
            set { Fields.CityId[this] = value; }
        }

        [DisplayName("Employee"), NotNull, ForeignKey("[dbo].[Employees]", "EmployeeID"), LeftJoin("jEmployee"), TextualField("EmployeeLastName")]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        [DisplayName("City Name"), Expression("jCity.[Name]")]
        public String CityName
        {
            get { return Fields.CityName[this]; }
            set { Fields.CityName[this] = value; }
        }

        [DisplayName("Employee Last Name"), Expression("jEmployee.[LastName]")]
        public String EmployeeLastName
        {
            get { return Fields.EmployeeLastName[this]; }
            set { Fields.EmployeeLastName[this] = value; }
        }

        [DisplayName("Employee First Name"), Expression("jEmployee.[FirstName]")]
        public String EmployeeFirstName
        {
            get { return Fields.EmployeeFirstName[this]; }
            set { Fields.EmployeeFirstName[this] = value; }
        }

        [DisplayName("Employee Title"), Expression("jEmployee.[Title]")]
        public String EmployeeTitle
        {
            get { return Fields.EmployeeTitle[this]; }
            set { Fields.EmployeeTitle[this] = value; }
        }

        [DisplayName("Employee Title Of Courtesy"), Expression("jEmployee.[TitleOfCourtesy]")]
        public String EmployeeTitleOfCourtesy
        {
            get { return Fields.EmployeeTitleOfCourtesy[this]; }
            set { Fields.EmployeeTitleOfCourtesy[this] = value; }
        }

        [DisplayName("Employee Birth Date"), Expression("jEmployee.[BirthDate]")]
        public DateTime? EmployeeBirthDate
        {
            get { return Fields.EmployeeBirthDate[this]; }
            set { Fields.EmployeeBirthDate[this] = value; }
        }

        [DisplayName("Employee Hire Date"), Expression("jEmployee.[HireDate]")]
        public DateTime? EmployeeHireDate
        {
            get { return Fields.EmployeeHireDate[this]; }
            set { Fields.EmployeeHireDate[this] = value; }
        }

        [DisplayName("Employee Address"), Expression("jEmployee.[Address]")]
        public String EmployeeAddress
        {
            get { return Fields.EmployeeAddress[this]; }
            set { Fields.EmployeeAddress[this] = value; }
        }

        [DisplayName("Employee City"), Expression("jEmployee.[City]")]
        public String EmployeeCity
        {
            get { return Fields.EmployeeCity[this]; }
            set { Fields.EmployeeCity[this] = value; }
        }

        [DisplayName("Employee Region"), Expression("jEmployee.[Region]")]
        public String EmployeeRegion
        {
            get { return Fields.EmployeeRegion[this]; }
            set { Fields.EmployeeRegion[this] = value; }
        }

        [DisplayName("Employee Postal Code"), Expression("jEmployee.[PostalCode]")]
        public String EmployeePostalCode
        {
            get { return Fields.EmployeePostalCode[this]; }
            set { Fields.EmployeePostalCode[this] = value; }
        }

        [DisplayName("Employee Country"), Expression("jEmployee.[Country]")]
        public String EmployeeCountry
        {
            get { return Fields.EmployeeCountry[this]; }
            set { Fields.EmployeeCountry[this] = value; }
        }

        [DisplayName("Employee Home Phone"), Expression("jEmployee.[HomePhone]")]
        public String EmployeeHomePhone
        {
            get { return Fields.EmployeeHomePhone[this]; }
            set { Fields.EmployeeHomePhone[this] = value; }
        }

        [DisplayName("Employee Extension"), Expression("jEmployee.[Extension]")]
        public String EmployeeExtension
        {
            get { return Fields.EmployeeExtension[this]; }
            set { Fields.EmployeeExtension[this] = value; }
        }

        [DisplayName("Employee Photo"), Expression("jEmployee.[Photo]")]
        public Stream EmployeePhoto
        {
            get { return Fields.EmployeePhoto[this]; }
            set { Fields.EmployeePhoto[this] = value; }
        }

        [DisplayName("Employee Notes"), Expression("jEmployee.[Notes]")]
        public String EmployeeNotes
        {
            get { return Fields.EmployeeNotes[this]; }
            set { Fields.EmployeeNotes[this] = value; }
        }

        [DisplayName("Employee Reports To"), Expression("jEmployee.[ReportsTo]")]
        public Int32? EmployeeReportsTo
        {
            get { return Fields.EmployeeReportsTo[this]; }
            set { Fields.EmployeeReportsTo[this] = value; }
        }

        [DisplayName("Employee Photo Path"), Expression("jEmployee.[PhotoPath]")]
        public String EmployeePhotoPath
        {
            get { return Fields.EmployeePhotoPath[this]; }
            set { Fields.EmployeePhotoPath[this] = value; }
        }

        [DisplayName("Employee On Vacation"), Expression("jEmployee.[OnVacation]")]
        public Boolean? EmployeeOnVacation
        {
            get { return Fields.EmployeeOnVacation[this]; }
            set { Fields.EmployeeOnVacation[this] = value; }
        }

        [DisplayName("Employee Email"), Expression("jEmployee.[Email]")]
        public String EmployeeEmail
        {
            get { return Fields.EmployeeEmail[this]; }
            set { Fields.EmployeeEmail[this] = value; }
        }

        [DisplayName("Employee Drivers License"), Expression("jEmployee.[DriversLicense]")]
        public String EmployeeDriversLicense
        {
            get { return Fields.EmployeeDriversLicense[this]; }
            set { Fields.EmployeeDriversLicense[this] = value; }
        }

        [DisplayName("Employee Drivers License Exp"), Expression("jEmployee.[DriversLicenseExp]")]
        public DateTime? EmployeeDriversLicenseExp
        {
            get { return Fields.EmployeeDriversLicenseExp[this]; }
            set { Fields.EmployeeDriversLicenseExp[this] = value; }
        }

        [DisplayName("Employee Insurance"), Expression("jEmployee.[Insurance]")]
        public String EmployeeInsurance
        {
            get { return Fields.EmployeeInsurance[this]; }
            set { Fields.EmployeeInsurance[this] = value; }
        }

        [DisplayName("Employee Insurance Exp"), Expression("jEmployee.[InsuranceExp]")]
        public DateTime? EmployeeInsuranceExp
        {
            get { return Fields.EmployeeInsuranceExp[this]; }
            set { Fields.EmployeeInsuranceExp[this] = value; }
        }

        [DisplayName("Employee License Plate"), Expression("jEmployee.[LicensePlate]")]
        public String EmployeeLicensePlate
        {
            get { return Fields.EmployeeLicensePlate[this]; }
            set { Fields.EmployeeLicensePlate[this] = value; }
        }

        [DisplayName("Employee License Plate Exp"), Expression("jEmployee.[LicensePlateExp]")]
        public DateTime? EmployeeLicensePlateExp
        {
            get { return Fields.EmployeeLicensePlateExp[this]; }
            set { Fields.EmployeeLicensePlateExp[this] = value; }
        }

        [DisplayName("Employee Vehicle Make"), Expression("jEmployee.[VehicleMake]")]
        public String EmployeeVehicleMake
        {
            get { return Fields.EmployeeVehicleMake[this]; }
            set { Fields.EmployeeVehicleMake[this] = value; }
        }

        [DisplayName("Employee Vehicle Model"), Expression("jEmployee.[VehicleModel]")]
        public String EmployeeVehicleModel
        {
            get { return Fields.EmployeeVehicleModel[this]; }
            set { Fields.EmployeeVehicleModel[this] = value; }
        }

        [DisplayName("Employee Special Needs Id"), Expression("jEmployee.[SpecialNeedsID]")]
        public Int32? EmployeeSpecialNeedsId
        {
            get { return Fields.EmployeeSpecialNeedsId[this]; }
            set { Fields.EmployeeSpecialNeedsId[this] = value; }
        }

        [DisplayName("Employee Gender"), Expression("jEmployee.[Gender]")]
        public String EmployeeGender
        {
            get { return Fields.EmployeeGender[this]; }
            set { Fields.EmployeeGender[this] = value; }
        }

        [DisplayName("Employee Smoker"), Expression("jEmployee.[Smoker]")]
        public Boolean? EmployeeSmoker
        {
            get { return Fields.EmployeeSmoker[this]; }
            set { Fields.EmployeeSmoker[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.CitiesMultiId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public CitiesMultiRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field CitiesMultiId;
            public Int32Field CityId;
            public Int32Field EmployeeId;

            public StringField CityName;

            public StringField EmployeeLastName;
            public StringField EmployeeFirstName;
            public StringField EmployeeTitle;
            public StringField EmployeeTitleOfCourtesy;
            public DateTimeField EmployeeBirthDate;
            public DateTimeField EmployeeHireDate;
            public StringField EmployeeAddress;
            public StringField EmployeeCity;
            public StringField EmployeeRegion;
            public StringField EmployeePostalCode;
            public StringField EmployeeCountry;
            public StringField EmployeeHomePhone;
            public StringField EmployeeExtension;
            public StreamField EmployeePhoto;
            public StringField EmployeeNotes;
            public Int32Field EmployeeReportsTo;
            public StringField EmployeePhotoPath;
            public BooleanField EmployeeOnVacation;
            public StringField EmployeeEmail;
            public StringField EmployeeDriversLicense;
            public DateTimeField EmployeeDriversLicenseExp;
            public StringField EmployeeInsurance;
            public DateTimeField EmployeeInsuranceExp;
            public StringField EmployeeLicensePlate;
            public DateTimeField EmployeeLicensePlateExp;
            public StringField EmployeeVehicleMake;
            public StringField EmployeeVehicleModel;
            public Int32Field EmployeeSpecialNeedsId;
            public StringField EmployeeGender;
            public BooleanField EmployeeSmoker;
        }
    }
}
