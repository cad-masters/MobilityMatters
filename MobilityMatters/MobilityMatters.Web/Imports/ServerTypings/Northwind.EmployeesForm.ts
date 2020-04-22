namespace MobilityMatters.Northwind {
    export interface EmployeesForm {
        Title: Serenity.LookupEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        OnVacation: Serenity.BooleanEditor;
        Inactive: Serenity.BooleanEditor;
        DateOfLastTrip: Serenity.DateEditor;
        ReturnDate: Serenity.DateEditor;
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
        Language: Serenity.StringEditor;
        DriversLicense: Serenity.StringEditor;
        DriversLicenseExp: Serenity.DateEditor;
        LicensePlate: Serenity.StringEditor;
        LicensePlateExp: Serenity.DateEditor;
        Insurance: Serenity.StringEditor;
        InsuranceExp: Serenity.DateEditor;
        VehicleMake: Serenity.StringEditor;
        VehicleModel: Serenity.StringEditor;
        VehicleMake2: Serenity.StringEditor;
        VehicleModel2: Serenity.StringEditor;
        DMVClearance: Serenity.BooleanEditor;
        PoliceClearance: Serenity.BooleanEditor;
        ReferralSource: Serenity.LookupEditor;
        TrainingDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        WhyEnding: Serenity.StringEditor;
        SpecialNeedsList: Serenity.LookupEditor;
        CitiesList: Serenity.LookupEditor;
        AvailabilityAMList: Serenity.LookupEditor;
        AvailabilityPMList: Serenity.LookupEditor;
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
                var w3 = s.DateEditor;
                var w4 = s.EmailEditor;

                Q.initFormType(EmployeesForm, [
                    'Title', w0,
                    'TitleOfCourtesy', w1,
                    'OnVacation', w2,
                    'Inactive', w2,
                    'DateOfLastTrip', w3,
                    'ReturnDate', w3,
                    'LastName', w1,
                    'FirstName', w1,
                    'HomePhone', w1,
                    'Email', w4,
                    'Address', w1,
                    'City', w1,
                    'Region', w1,
                    'PostalCode', w1,
                    'BirthDate', w3,
                    'Gender', w0,
                    'Smoker', w2,
                    'Language', w1,
                    'DriversLicense', w1,
                    'DriversLicenseExp', w3,
                    'LicensePlate', w1,
                    'LicensePlateExp', w3,
                    'Insurance', w1,
                    'InsuranceExp', w3,
                    'VehicleMake', w1,
                    'VehicleModel', w1,
                    'VehicleMake2', w1,
                    'VehicleModel2', w1,
                    'DMVClearance', w2,
                    'PoliceClearance', w2,
                    'ReferralSource', w0,
                    'TrainingDate', w3,
                    'HireDate', w3,
                    'EndDate', w3,
                    'WhyEnding', w1,
                    'SpecialNeedsList', w0,
                    'CitiesList', w0,
                    'AvailabilityAMList', w0,
                    'AvailabilityPMList', w0
                ]);
            }
        }
    }
}

