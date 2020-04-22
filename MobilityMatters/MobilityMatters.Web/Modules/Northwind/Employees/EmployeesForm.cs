
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Northwind.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesForm
    {
        [Category("General")]
        [HalfWidth]
        public String Title { get; set; }
        [HalfWidth]
        public String TitleOfCourtesy { get; set; }
        [HalfWidth, BooleanFormatter]
        public Boolean OnVacation { get; set; }
        [HalfWidth, BooleanFormatter]
        public Boolean Inactive { get; set; }
        [HalfWidth]
        public DateTime DateOfLastTrip { get; set; }
        [HalfWidth]
        public DateTime ReturnDate { get; set; }
        [Category("Contact")]
        [HalfWidth]
        public String LastName { get; set; }
        [HalfWidth]
        public String FirstName { get; set; }
        public String HomePhone { get; set; }
        public String Email { get; set; }
        [Category("Address")]
        public String Address { get; set; }
        public String City { get; set; }
        public String Region { get; set; }
        public String PostalCode { get; set; }
        /* public String Country { get; set; }*/
        [Category("Details")]
        public DateTime BirthDate { get; set; }
        [HalfWidth]
        public String Gender { get; set; }
        [HalfWidth]
        public Boolean Smoker { get; set; }
        public String Language { get; set; }

        [Category("Transportation")]
        [HalfWidth]
        public String DriversLicense { get; set; }
        [HalfWidth]
        public DateTime DriversLicenseExp { get; set; }
        [HalfWidth]
        public String LicensePlate { get; set; }
        [HalfWidth]
        public DateTime LicensePlateExp { get; set; }
        [HalfWidth]
        public String Insurance { get; set; }
        [HalfWidth]
        public DateTime InsuranceExp { get; set; }
        [HalfWidth]
        public String VehicleMake { get; set; }
        [HalfWidth]
        public String VehicleModel { get; set; }
        [HalfWidth]
        public String VehicleMake2 { get; set; }
        [HalfWidth]
        public String VehicleModel2 { get; set; }
        [HalfWidth]
        public Boolean DMVClearance { get; set; }
        [HalfWidth]
        public Boolean PoliceClearance { get; set; }
        [Category("Volunteer Details")]
        public String ReferralSource { get; set; }
        public DateTime TrainingDate { get; set; }
        [HalfWidth]
        public DateTime HireDate { get; set; }
        [HalfWidth]
        public DateTime EndDate { get; set; }
        public String WhyEnding { get; set; }
        public List<Int32> SpecialNeedsList { get; set; }
        public List<Int32> CitiesList { get; set; }
        [HalfWidth]
        public List<Int32> AvailabilityAMList { get; set; }
        [HalfWidth]
        public List<Int32> AvailabilityPMList { get; set; }
        /*public String Extension { get; set; }
        public Stream Photo { get; set; }
        public String Notes { get; set; }
        public Int32 ReportsTo { get; set; }
        public String PhotoPath { get; set; }*/
    }
}