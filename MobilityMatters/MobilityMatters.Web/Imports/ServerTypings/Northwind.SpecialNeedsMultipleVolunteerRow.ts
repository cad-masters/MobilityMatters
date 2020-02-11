namespace MobilityMatters.Northwind {
    export interface SpecialNeedsMultipleVolunteerRow {
        SpecialNeedsMultipleVolunteerId?: number;
        SpecialNeedsId?: number;
        EmployeeId?: number;
    }

    export namespace SpecialNeedsMultipleVolunteerRow {
        export const idProperty = 'SpecialNeedsMultipleVolunteerId';
        export const localTextPrefix = 'Northwind.SpecialNeedsMultipleVolunteer';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SpecialNeedsMultipleVolunteerId = "SpecialNeedsMultipleVolunteerId",
            SpecialNeedsId = "SpecialNeedsId",
            EmployeeId = "EmployeeId"
        }
    }
}

