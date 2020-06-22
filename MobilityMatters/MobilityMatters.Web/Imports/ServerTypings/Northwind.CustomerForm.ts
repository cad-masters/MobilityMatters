namespace MobilityMatters.Northwind {
    export interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        ID: Serenity.IntegerEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        Program: Serenity.LookupEditor;
        ProgramOption: Serenity.LookupEditor;
        ReferralSource: Serenity.StringEditor;
        TEMP: Serenity.StringEditor;
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
        SpecialConditionsDirections: Serenity.TextAreaEditor;
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
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.EmailEditor;
                var w5 = NotesEditor;
                var w6 = Helpers.HardcodedValuesGenderEditor;
                var w7 = s.DateEditor;
                var w8 = s.TextAreaEditor;

                Q.initFormType(CustomerForm, [
                    'CustomerID', w0,
                    'ID', w1,
                    'CompanyName', w0,
                    'ContactName', w0,
                    'Program', w2,
                    'ProgramOption', w2,
                    'ReferralSource', w0,
                    'TEMP', w0,
                    'Active', w3,
                    'Phone', w0,
                    'Email', w4,
                    'EmergencyName', w0,
                    'EmergencyPhone', w0,
                    'EmergencyRelation', w0,
                    'EmergencyName2', w0,
                    'EmergencyPhone2', w0,
                    'EmergencyRelation2', w0,
                    'Address', w0,
                    'Country', w2,
                    'City', w2,
                    'Region', w0,
                    'PostalCode', w0,
                    'Residence', w2,
                    'LivingWith', w0,
                    'NoteList', w5,
                    'Gender', w6,
                    'BirthDate', w7,
                    'AgeCalc', w1,
                    'Race', w0,
                    'Income', w0,
                    'PLanguage', w0,
                    'SpecialNeedsList', w2,
                    'SpecialNeedsPlainText', w8,
                    'SpecialConditionsDirections', w8,
                    'DNR', w2,
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

