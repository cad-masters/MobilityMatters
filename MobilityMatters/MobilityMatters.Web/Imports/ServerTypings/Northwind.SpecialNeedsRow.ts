namespace MobilityMatters.Northwind {
    export interface SpecialNeedsRow {
        SpecialNeedsID?: number;
        Name?: string;
    }

    export namespace SpecialNeedsRow {
        export const idProperty = 'SpecialNeedsID';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.SpecialNeeds';
        export const lookupKey = 'Northwind.SpecialNeeds';

        export function getLookup(): Q.Lookup<SpecialNeedsRow> {
            return Q.getLookup<SpecialNeedsRow>('Northwind.SpecialNeeds');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SpecialNeedsID = "SpecialNeedsID",
            Name = "Name"
        }
    }
}

