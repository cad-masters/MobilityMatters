namespace MobilityMatters.Northwind {
    export interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ProgramList: Serenity.LookupEditor;
        Program: Serenity.LookupEditor;
        ProgramOption: Serenity.LookupEditor;
        ReferralSource: Serenity.StringEditor;
        TEMP: Serenity.BooleanEditor;
        Active: Serenity.BooleanEditor;
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
        Gender: Helpers.HardcodedValuesGenderEditor;
        BirthDate: Serenity.DateEditor;
        AgeCalc: Serenity.IntegerEditor;
        Race: Serenity.StringEditor;
        Income: Serenity.StringEditor;
        PLanguage: Serenity.StringEditor;
        SpecialNeedsList: Serenity.LookupEditor;
        SpecialNeedsPlainText: Serenity.TextAreaEditor;
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
                var w2 = s.BooleanEditor;
                var w3 = s.EmailEditor;
                var w4 = NotesEditor;
                var w5 = Helpers.HardcodedValuesGenderEditor;
                var w6 = s.DateEditor;
                var w7 = s.IntegerEditor;
                var w8 = s.TextAreaEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerID', w0,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'ProgramList', w1,
                    'Program', w1,
                    'ProgramOption', w1,
                    'ReferralSource', w0,
                    'TEMP', w2,
                    'Active', w2,
                    'Phone', w0,
                    'Email', w3,
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
                    'NoteList', w4,
                    'Gender', w5,
                    'BirthDate', w6,
                    'AgeCalc', w7,
                    'Race', w0,
                    'Income', w0,
                    'PLanguage', w0,
                    'SpecialNeedsList', w1,
                    'SpecialNeedsPlainText', w8,
                    'DNR', w1,
                    'Radio', w2,
                    'EIO', w2,
                    'PreferredHospital', w0,
                    'Smoker', w2,
                    'Medical', w0,
                    'Dental', w0,
                    'Groceries', w0,
                    'OtherTransport', w0
                ]);
            }
        }
    }
}

