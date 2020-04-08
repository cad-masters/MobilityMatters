namespace MobilityMatters.Northwind {
    export interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        FullName?: string;
        PLanguage?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        DNR?: string;
        Radio?: boolean;
        Country?: string;
        County?: RiderByCounty;
        Phone?: string;
        PreferredHospital?: string;
        Medical?: string;
        Dental?: string;
        Groceries?: string;
        OtherTransport?: string;
        Program?: string;
        ProgramOption?: string;
        TEMP?: string;
        EIO?: boolean;
        Smoker?: boolean;
        Active?: boolean;
        LivingWith?: string;
        Residence?: string;
        ReferralSource?: string;
        BirthDate?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        SpecialNeedsList?: number[];
        Email?: string;
        Gender?: string;
        EmergencyName?: string;
        EmergencyPhone?: string;
        EmergencyName2?: string;
        EmergencyPhone2?: string;
        EmergencyRelation2?: string;
        EmergencyRelation?: string;
        AgeCalc?: number;
        DateOfLastTrip?: string;
    }

    export namespace CustomerRow {
        export const idProperty = 'ID';
        export const nameProperty = 'FullName';
        export const localTextPrefix = 'Northwind.Customer';
        export const lookupKey = 'Northwind.Customer';

        export function getLookup(): Q.Lookup<CustomerRow> {
            return Q.getLookup<CustomerRow>('Northwind.Customer');
        }
        export const deletePermission = 'Northwind:Customer:Delete';
        export const insertPermission = 'Northwind:Customer:Modify';
        export const readPermission = 'Northwind:Customer:View';
        export const updatePermission = 'Northwind:Customer:Modify';

        export declare const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            FullName = "FullName",
            PLanguage = "PLanguage",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            DNR = "DNR",
            Radio = "Radio",
            Country = "Country",
            County = "County",
            Phone = "Phone",
            PreferredHospital = "PreferredHospital",
            Medical = "Medical",
            Dental = "Dental",
            Groceries = "Groceries",
            OtherTransport = "OtherTransport",
            Program = "Program",
            ProgramOption = "ProgramOption",
            TEMP = "TEMP",
            EIO = "EIO",
            Smoker = "Smoker",
            Active = "Active",
            LivingWith = "LivingWith",
            Residence = "Residence",
            ReferralSource = "ReferralSource",
            BirthDate = "BirthDate",
            NoteList = "NoteList",
            Representatives = "Representatives",
            SpecialNeedsList = "SpecialNeedsList",
            Email = "Email",
            Gender = "Gender",
            EmergencyName = "EmergencyName",
            EmergencyPhone = "EmergencyPhone",
            EmergencyName2 = "EmergencyName2",
            EmergencyPhone2 = "EmergencyPhone2",
            EmergencyRelation2 = "EmergencyRelation2",
            EmergencyRelation = "EmergencyRelation",
            AgeCalc = "AgeCalc",
            DateOfLastTrip = "DateOfLastTrip"
        }
    }
}

