namespace MobilityMatters.Northwind {
    export interface CitiesRow {
        CityId?: number;
        Name?: string;
    }

    export namespace CitiesRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.Cities';
        export const lookupKey = 'Northwind.Cities';

        export function getLookup(): Q.Lookup<CitiesRow> {
            return Q.getLookup<CitiesRow>('Northwind.Cities');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name"
        }
    }
}

