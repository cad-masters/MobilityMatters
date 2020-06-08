namespace MobilityMatters.Northwind {
    export interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        Program: Serenity.LookupEditor;
        ProgramOption: Serenity.LookupEditor;
        ReferralSource: Serenity.StringEditor;
        DateOfLastTrip: Serenity.DateEditor;
        Active: Serenity.BooleanEditor;
        TEMP: Serenity.BooleanEditor;
        StartDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        WhyEnding: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        AltPhone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        EmergencyName: Serenity.StringEditor;
        EmergencyPhone: Serenity.StringEditor;
        EmergencyRelation: Serenity.StringEditor;
        EmergencyName2: Serenity.StringEditor;
        EmergencyPhone2: Serenity.StringEditor;
        EmergencyRelation2: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Residence: Serenity.LookupEditor;
        LivingWith: Serenity.StringEditor;
        NoteList: NotesEditor;
        Gender: Serenity.LookupEditor;
        BirthDate: Serenity.DateEditor;
        AgeCalc: Serenity.IntegerEditor;
        PLanguage: Serenity.StringEditor;
        SpecialNeedsList: Serenity.LookupEditor;
        DNR: Serenity.LookupEditor;
        Radio: Serenity.BooleanEditor;
        EIO: Serenity.BooleanEditor;
        PreferredHospital: Serenity.StringEditor;
        Smoker: Serenity.BooleanEditor;
        Medical: Serenity.StringEditor;
        Dental: Serenity.StringEditor;
        Groceries: Serenity.StringEditor;
        OtherTransport: Serenity.StringEditor;
    }

    export class CustomerForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Customer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CustomerForm.init)  {
                CustomerForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.EmailEditor;
                var w5 = NotesEditor;
                var w6 = s.IntegerEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerID', w0,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'Program', w1,
                    'ProgramOption', w1,
                    'ReferralSource', w0,
                    'DateOfLastTrip', w2,
                    'Active', w3,
                    'TEMP', w3,
                    'StartDate', w2,
                    'EndDate', w2,
                    'WhyEnding', w0,
                    'Phone', w0,
                    'AltPhone', w0,
                    'Email', w4,
                    'EmergencyName', w0,
                    'EmergencyPhone', w0,
                    'EmergencyRelation', w0,
                    'EmergencyName2', w0,
                    'EmergencyPhone2', w0,
                    'EmergencyRelation2', w0,
                    'Address', w0,
                    'Country', w1,
                    'City', w1,
                    'Region', w0,
                    'PostalCode', w0,
                    'Residence', w1,
                    'LivingWith', w0,
                    'NoteList', w5,
                    'Gender', w1,
                    'BirthDate', w2,
                    'AgeCalc', w6,
                    'PLanguage', w0,
                    'SpecialNeedsList', w1,
                    'DNR', w1,
                    'Radio', w3,
                    'EIO', w3,
                    'PreferredHospital', w0,
                    'Smoker', w3,
                    'Medical', w0,
                    'Dental', w0,
                    'Groceries', w0,
                    'OtherTransport', w0
                ]);
            }
        }
    }
}

