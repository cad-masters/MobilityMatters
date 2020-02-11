namespace MobilityMatters.Northwind {
    export interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        SendBulletin?: boolean;
        EmergencyName?: string;
        EmergencyPhone?: string;
        EmergencyName2?: string;
        EmergencyPhone2?: string;
        EmergencyRelation?: string;
        EmergencyRelation2?: string;
        ReferralSource?: string;
        Gender?: string;
        LivingWith?: string;
        TEMP?: string;
        PreferredHospital?: string;
        Smoker?: boolean;
        Medical?: string;
        Dental?: string;
        Groceries?: string;
        OtherTransport?: string;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }

    export namespace CustomerDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Email';
        export const localTextPrefix = 'Northwind.CustomerDetails';
        export const lookupKey = 'Northwind.CustomerDetails';

        export function getLookup(): Q.Lookup<CustomerDetailsRow> {
            return Q.getLookup<CustomerDetailsRow>('Northwind.CustomerDetails');
        }
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            SendBulletin = "SendBulletin",
            EmergencyName = "EmergencyName",
            EmergencyPhone = "EmergencyPhone",
            EmergencyName2 = "EmergencyName2",
            EmergencyPhone2 = "EmergencyPhone2",
            EmergencyRelation = "EmergencyRelation",
            EmergencyRelation2 = "EmergencyRelation2",
            ReferralSource = "ReferralSource",
            Gender = "Gender",
            LivingWith = "LivingWith",
            TEMP = "TEMP",
            PreferredHospital = "PreferredHospital",
            Smoker = "Smoker",
            Medical = "Medical",
            Dental = "Dental",
            Groceries = "Groceries",
            OtherTransport = "OtherTransport",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}

