namespace MobilityMatters.Northwind {
    export interface SpecialNeedsMultipleRow {
        SpecialNeedsMultipleId?: number;
        SpecialNeedsId?: number;
        CustomerId?: number;
    }

    export namespace SpecialNeedsMultipleRow {
        export const idProperty = 'SpecialNeedsMultipleId';
        export const localTextPrefix = 'Northwind.SpecialNeedsMultiple';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SpecialNeedsMultipleId = "SpecialNeedsMultipleId",
            SpecialNeedsId = "SpecialNeedsId",
            CustomerId = "CustomerId"
        }
    }
}

