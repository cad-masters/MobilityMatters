namespace MobilityMatters.Northwind {
    export interface AvailabilityAmMultipleRow {
        AvailabilityAmMultipleId?: number;
        AvailabilityAmid?: number;
        EmployeeId?: number;
    }

    export namespace AvailabilityAmMultipleRow {
        export const idProperty = 'AvailabilityAmMultipleId';
        export const localTextPrefix = 'Northwind.AvailabilityAmMultiple';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AvailabilityAmMultipleId = "AvailabilityAmMultipleId",
            AvailabilityAmid = "AvailabilityAmid",
            EmployeeId = "EmployeeId"
        }
    }
}

