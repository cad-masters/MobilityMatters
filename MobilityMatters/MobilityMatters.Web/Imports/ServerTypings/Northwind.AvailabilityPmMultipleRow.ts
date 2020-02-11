namespace MobilityMatters.Northwind {
    export interface AvailabilityPmMultipleRow {
        AvailabilityPmMultipleId?: number;
        AvailabilityPmid?: number;
        EmployeeId?: number;
    }

    export namespace AvailabilityPmMultipleRow {
        export const idProperty = 'AvailabilityPmMultipleId';
        export const localTextPrefix = 'Northwind.AvailabilityPmMultiple';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AvailabilityPmMultipleId = "AvailabilityPmMultipleId",
            AvailabilityPmid = "AvailabilityPmid",
            EmployeeId = "EmployeeId"
        }
    }
}

