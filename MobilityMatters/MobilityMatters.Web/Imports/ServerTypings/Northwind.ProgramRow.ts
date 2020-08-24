namespace MobilityMatters.Northwind {
    export interface ProgramRow {
        ProgramId?: number;
        Name?: string;
    }

    export namespace ProgramRow {
        export const idProperty = 'ProgramId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.Program';
        export const lookupKey = 'Northwind.Program';

        export function getLookup(): Q.Lookup<ProgramRow> {
            return Q.getLookup<ProgramRow>('Northwind.Program');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            ProgramId = "ProgramId",
            Name = "Name"
        }
    }
}

