
namespace MobilityMatters.Northwind.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Northwind.Employees")]
    [BasedOnRow(typeof(Entities.EmployeesRow), CheckNames = true)]
    public class EmployeesColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight, Hidden]
        public Int32 EmployeeId { get; set; }
        [Width(100), AlignCenter]
        public Boolean OnVacation { get; set; }
        [Width(100), ]
        public DateTime? ReturnDate { get; set; }
        [EditLink]
        public String LastName { get; set; }
        public String FirstName { get; set; }
        [Width(100), QuickFilter]
        public String COVIDResults { get; set; }
        public DateTime COVIDTestDate { get; set; }

        [Width(60), QuickFilter]
        public String Title { get; set; }
        [Width(90)]
        public String TitleOfCourtesy { get; set; }
        /*[Width(120)]
        public DateTime? DateOfLastTrip { get; set; }*/
        public String HomePhone { get; set; }
        public DateTime BirthDate { get; set; }
        /* public DateTime HireDate { get; set; }*/
        public String Address { get; set; }
        public String City { get; set; }
        /*public String Region { get; set; }*/
        public String PostalCode { get; set; }
        public String Email { get; set; }
        public DateTime HireDate { get; set; }
        public String ReferralSource { get; set; }
        public String VolunteerRegion { get; set; }
        public DateTime DriversLicenseExp { get; set; }
        public DateTime InsuranceExp { get; set; }
        /*public String Country { get; set; }
        
        public String Extension { get; set; }
        public Stream Photo { get; set; }
        public String Notes { get; set; }
        public String ReportsToLastName { get; set; }
        public String PhotoPath { get; set; }*/
    }
}