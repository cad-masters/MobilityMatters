namespace MobilityMatters.Northwind {
    export interface EmployeesForm {
        Title: Serenity.LookupEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        OnVacation: Serenity.BooleanEditor;
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Gender: Serenity.LookupEditor;
        Smoker: Serenity.BooleanEditor;
        DriversLicense: Serenity.StringEditor;
        DriversLicenseExp: Serenity.DateEditor;
        LicensePlate: Serenity.StringEditor;
        LicensePlateExp: Serenity.DateEditor;
        Insurance: Serenity.StringEditor;
        InsuranceExp: Serenity.DateEditor;
        VehicleMake: Serenity.StringEditor;
        VehicleModel: Serenity.StringEditor;
        HireDate: Serenity.DateEditor;
        SpecialNeedsList: Serenity.LookupEditor;
    }

    export class EmployeesForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Employees';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmployeesForm.init)  {
                EmployeesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.BooleanEditor;
                var w3 = s.EmailEditor;
                var w4 = s.DateEditor;

                Q.initFormType(EmployeesForm, [
                    'Title', w0,
                    'TitleOfCourtesy', w1,
                    'OnVacation', w2,
                    'LastName', w1,
                    'FirstName', w1,
                    'HomePhone', w1,
                    'Email', w3,
                    'Address', w1,
                    'City', w1,
                    'Region', w1,
                    'PostalCode', w1,
                    'BirthDate', w4,
                    'Gender', w0,
                    'Smoker', w2,
                    'DriversLicense', w1,
                    'DriversLicenseExp', w4,
                    'LicensePlate', w1,
                    'LicensePlateExp', w4,
                    'Insurance', w1,
                    'InsuranceExp', w4,
                    'VehicleMake', w1,
                    'VehicleModel', w1,
                    'HireDate', w4,
                    'SpecialNeedsList', w0
                ]);
            }
        }
    }
}

