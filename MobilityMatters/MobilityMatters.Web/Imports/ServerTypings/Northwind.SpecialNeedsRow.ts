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

        export declare const enum Fields {
            SpecialNeedsID = "SpecialNeedsID",
            Name = "Name"
        }
    }
}

