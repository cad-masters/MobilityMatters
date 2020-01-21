
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

        export namespace Fields {
            export declare const CitiesMultiId;
            export declare const CityId;
            export declare const EmployeeId;
            export declare const CityName;
            export declare const EmployeeLastName;
            export declare const EmployeeFirstName;
            export declare const EmployeeTitle;
            export declare const EmployeeTitleOfCourtesy;
            export declare const EmployeeBirthDate;
            export declare const EmployeeHireDate;
            export declare const EmployeeAddress;
            export declare const EmployeeCity;
            export declare const EmployeeRegion;
            export declare const EmployeePostalCode;
            export declare const EmployeeCountry;
            export declare const EmployeeHomePhone;
            export declare const EmployeeExtension;
            export declare const EmployeePhoto;
            export declare const EmployeeNotes;
            export declare const EmployeeReportsTo;
            export declare const EmployeePhotoPath;
            export declare const EmployeeOnVacation;
            export declare const EmployeeEmail;
            export declare const EmployeeDriversLicense;
            export declare const EmployeeDriversLicenseExp;
            export declare const EmployeeInsurance;
            export declare const EmployeeInsuranceExp;
            export declare const EmployeeLicensePlate;
            export declare const EmployeeLicensePlateExp;
            export declare const EmployeeVehicleMake;
            export declare const EmployeeVehicleModel;
            export declare const EmployeeSpecialNeedsId;
            export declare const EmployeeGender;
            export declare const EmployeeSmoker;
        }

        [
            'CitiesMultiId',
            'CityId',
            'EmployeeId',
            'CityName',
            'EmployeeLastName',
            'EmployeeFirstName',
            'EmployeeTitle',
            'EmployeeTitleOfCourtesy',
            'EmployeeBirthDate',
            'EmployeeHireDate',
            'EmployeeAddress',
            'EmployeeCity',
            'EmployeeRegion',
            'EmployeePostalCode',
            'EmployeeCountry',
            'EmployeeHomePhone',
            'EmployeeExtension',
            'EmployeePhoto',
            'EmployeeNotes',
            'EmployeeReportsTo',
            'EmployeePhotoPath',
            'EmployeeOnVacation',
            'EmployeeEmail',
            'EmployeeDriversLicense',
            'EmployeeDriversLicenseExp',
            'EmployeeInsurance',
            'EmployeeInsuranceExp',
            'EmployeeLicensePlate',
            'EmployeeLicensePlateExp',
            'EmployeeVehicleMake',
            'EmployeeVehicleModel',
            'EmployeeSpecialNeedsId',
            'EmployeeGender',
            'EmployeeSmoker'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}