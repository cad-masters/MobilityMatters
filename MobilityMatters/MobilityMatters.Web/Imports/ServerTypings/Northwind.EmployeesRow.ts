namespace MobilityMatters.Northwind {
    export interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        Email?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        EndDate?: string;
        WhyEnding?: string;
        TrainingDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        OnVacation?: boolean;
        Inactive?: boolean;
        DriversLicense?: string;
        DriversLicenseExp?: string;
        LicensePlate?: string;
        LicensePlateExp?: string;
        Insurance?: string;
        InsuranceExp?: string;
        VehicleMake?: string;
        VehicleModel?: string;
        VehicleMake2?: string;
        VehicleModel2?: string;
        SpecialNeedsList?: number[];
        CitiesList?: number[];
        AvailabilityAMList?: number[];
        AvailabilityPMList?: number[];
        Gender?: string;
        Smoker?: boolean;
        DMVClearance?: boolean;
        PoliceClearance?: boolean;
        ReferralSource?: string;
        Language?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsTo1?: number;
        ReportsToPhotoPath?: string;
    }

    export namespace EmployeesRow {
        export const idProperty = 'EmployeeId';
        export const nameProperty = 'LastName';
        export const localTextPrefix = 'Northwind.Employees';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EmployeeId = "EmployeeId",
            LastName = "LastName",
            FirstName = "FirstName",
            Email = "Email",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            EndDate = "EndDate",
            WhyEnding = "WhyEnding",
            TrainingDate = "TrainingDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            OnVacation = "OnVacation",
            Inactive = "Inactive",
            DriversLicense = "DriversLicense",
            DriversLicenseExp = "DriversLicenseExp",
            LicensePlate = "LicensePlate",
            LicensePlateExp = "LicensePlateExp",
            Insurance = "Insurance",
            InsuranceExp = "InsuranceExp",
            VehicleMake = "VehicleMake",
            VehicleModel = "VehicleModel",
            VehicleMake2 = "VehicleMake2",
            VehicleModel2 = "VehicleModel2",
            SpecialNeedsList = "SpecialNeedsList",
            CitiesList = "CitiesList",
            AvailabilityAMList = "AvailabilityAMList",
            AvailabilityPMList = "AvailabilityPMList",
            Gender = "Gender",
            Smoker = "Smoker",
            DMVClearance = "DMVClearance",
            PoliceClearance = "PoliceClearance",
            ReferralSource = "ReferralSource",
            Language = "Language",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsTo1 = "ReportsTo1",
            ReportsToPhotoPath = "ReportsToPhotoPath"
        }
    }
}

