namespace MobilityMatters.Northwind {
    export interface ProgramMultipleRow {
        ProgramMultipleId?: number;
        ProgramId?: number;
        CustomerId?: number;
    }

    export namespace ProgramMultipleRow {
        export const idProperty = 'ProgramMultipleId';
        export const localTextPrefix = 'Northwind.ProgramMultiple';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProgramMultipleId = "ProgramMultipleId",
            ProgramId = "ProgramId",
            CustomerId = "CustomerId"
        }
    }
}

