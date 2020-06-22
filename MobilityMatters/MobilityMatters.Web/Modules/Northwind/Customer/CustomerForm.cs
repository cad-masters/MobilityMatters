
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Northwind.Customer")]
    [BasedOnRow(typeof(Entities.CustomerRow)/*, CheckNames = true*/)]
    public class CustomerForm
    {
        [Category("General")]
        public String CustomerID { get; set; }
        public Int32 ID { get; set; }
        [HalfWidth]
        public String CompanyName { get; set; }
        [HalfWidth]
        public String ContactName { get; set; }
        [HalfWidth]
        public String Program { get; set; }
        [HalfWidth]
        public String ProgramOption { get; set; }
        [HalfWidth]
        public String ReferralSource { get; set; }
        [HalfWidth]
        public String TEMP { get; set; }
        [HalfWidth, BooleanFormatter]
        public Boolean Active { get; set; }

        [Category("Contact")]
        
        public String Phone { get; set; }
        public String Email { get; set; }
        /*public List<Int32> Representatives { get; set; }*/

        [Category("Emergency Contact")]
        [HalfWidth]
        public String EmergencyName { get; set; }
        [QuarterWidth]
        public String EmergencyPhone { get; set; }
        [QuarterWidth]
        public String EmergencyRelation { get; set; }
        [HalfWidth]
        public String EmergencyName2 { get; set; }
        [QuarterWidth]
        public String EmergencyPhone2 { get; set; }
        [QuarterWidth]
        public String EmergencyRelation2 { get; set; }

        [Category("Address")]
        [HalfWidth]
        public String Address { get; set; }
        [HalfWidth]
        public String Country { get; set; }
        [HalfWidth]
        public String City { get; set; }
        [HalfWidth]
        public String Region { get; set; }
        [HalfWidth]
        public String PostalCode { get; set; }

        [HalfWidth]
        public String Residence { get; set; }
        [HalfWidth]
        public String LivingWith { get; set; }
        [QuarterWidth]
        public List<object> NoteList { get; set; }

        // note: these fields are stored in an extension table (CustomerDetails)
        [Category("Details")]
        [HalfWidth]
        public String Gender { get; set; }
        [QuarterWidth]
        public DateTime? BirthDate { get; set; }
        /*[HalfWidth]
        public Int32? LastContactedBy { get; set; }*/

        [QuarterWidth]
        public Int32 AgeCalc { get; set; }
        [HalfWidth]
        public String Race { get; set; }
        [HalfWidth]
        public String Income { get; set; }
        [HalfWidth]
        public String PLanguage { get; set; }

        [HalfWidth]
        public List<Int32> SpecialNeedsList { get; set; }


        [HalfWidth]
        public String SpecialNeedsPlainText { get; set; }
        [HalfWidth]
        public String SpecialConditionsDirections { get; set; }

        [HalfWidth]
        public String DNR { get; set; }

        [QuarterWidth, BooleanFormatter]
        public Boolean Radio { get; set; }
        [QuarterWidth, BooleanFormatter]
        public Boolean EIO { get; set; }

        [HalfWidth]
        public String PreferredHospital { get; set; }
        [HalfWidth, BooleanFormatter]
        public Boolean Smoker { get; set; }

        [Category("Transportation")]
        [HalfWidth]
        public String Medical { get; set; }
        [HalfWidth]
        public String Dental { get; set; }
        [HalfWidth]
        public String Groceries { get; set; }
        [HalfWidth]
        public String OtherTransport { get; set; }

    }
}