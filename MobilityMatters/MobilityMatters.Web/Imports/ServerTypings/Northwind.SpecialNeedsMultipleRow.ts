namespace MobilityMatters.Northwind {
    export interface SpecialNeedsMultipleRow {
        SpecialNeedsMultipleId?: number;
        SpecialNeedsId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }

    export namespace SpecialNeedsMultipleRow {
        export const idProperty = 'SpecialNeedsMultipleId';
        export const localTextPrefix = 'Northwind.SpecialNeedsMultiple';

        export declare const enum Fields {
            SpecialNeedsMultipleId = "SpecialNeedsMultipleId",
            SpecialNeedsId = "SpecialNeedsId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}

