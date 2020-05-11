namespace MobilityMatters.Northwind {
    export interface CitiesMultiRow {
        CitiesMultiId?: number;
        CityId?: number;
        EmployeeId?: number;
        CityName?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        EmployeeOnVacation?: boolean;
        EmployeeEmail?: string;
        EmployeeDriversLicense?: string;
        EmployeeDriversLicenseExp?: string;
        EmployeeInsurance?: string;
        EmployeeInsuranceExp?: string;
        EmployeeLicensePlate?: string;
        EmployeeLicensePlateExp?: string;
        EmployeeVehicleMake?: string;
        EmployeeVehicleModel?: string;
        EmployeeSpecialNeedsId?: number;
        EmployeeGender?: string;
        EmployeeSmoker?: boolean;
    }

    export namespace CitiesMultiRow {
        export const idProperty = 'CitiesMultiId';
        export const localTextPrefix = 'Northwind.CitiesMulti';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CitiesMultiId = "CitiesMultiId",
            CityId = "CityId",
            EmployeeId = "EmployeeId",
            CityName = "CityName",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            EmployeeOnVacation = "EmployeeOnVacation",
            EmployeeEmail = "EmployeeEmail",
            EmployeeDriversLicense = "EmployeeDriversLicense",
            EmployeeDriversLicenseExp = "EmployeeDriversLicenseExp",
            EmployeeInsurance = "EmployeeInsurance",
            EmployeeInsuranceExp = "EmployeeInsuranceExp",
            EmployeeLicensePlate = "EmployeeLicensePlate",
            EmployeeLicensePlateExp = "EmployeeLicensePlateExp",
            EmployeeVehicleMake = "EmployeeVehicleMake",
            EmployeeVehicleModel = "EmployeeVehicleModel",
            EmployeeSpecialNeedsId = "EmployeeSpecialNeedsId",
            EmployeeGender = "EmployeeGender",
            EmployeeSmoker = "EmployeeSmoker"
        }
    }
}

