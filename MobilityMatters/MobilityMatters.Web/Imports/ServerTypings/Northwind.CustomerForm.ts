namespace MobilityMatters.Northwind {
    export interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        Program: Serenity.LookupEditor;
        ProgramOption: Serenity.LookupEditor;
        ReferralSource: Serenity.LookupEditor;
        TEMP: Serenity.LookupEditor;
        ContactName: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
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
                var w2 = s.EmailEditor;
                var w3 = NotesEditor;
                var w4 = s.DateEditor;
                var w5 = s.IntegerEditor;
                var w6 = s.BooleanEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerID', w0,
                    'CompanyName', w0,
                    'Program', w1,
                    'ProgramOption', w1,
                    'ReferralSource', w1,
                    'TEMP', w1,
                    'ContactName', w0,
                    'Phone', w0,
                    'Email', w2,
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
                    'NoteList', w3,
                    'Gender', w1,
                    'BirthDate', w4,
                    'AgeCalc', w5,
                    'PLanguage', w0,
                    'SpecialNeedsList', w1,
                    'DNR', w1,
                    'Radio', w6,
                    'EIO', w6,
                    'PreferredHospital', w0,
                    'Smoker', w6,
                    'Medical', w0,
                    'Dental', w0,
                    'Groceries', w0,
                    'OtherTransport', w0
                ]);
            }
        }
    }
}

