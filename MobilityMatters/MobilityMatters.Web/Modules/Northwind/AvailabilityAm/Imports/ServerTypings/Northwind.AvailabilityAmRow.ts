namespace MobilityMatters.Northwind {
    export interface AvailabilityAmRow {
        AvailabilityAmid?: number;
        Day?: string;
    }

    export namespace AvailabilityAmRow {
        export const idProperty = 'AvailabilityAmid';
        export const nameProperty = 'Day';
        export const localTextPrefix = 'Northwind.AvailabilityAm';
        export const lookupKey = 'Northwind.AvailabilityAM';

        export function getLookup(): Q.Lookup<AvailabilityAmRow> {
            return Q.getLookup<AvailabilityAmRow>('Northwind.AvailabilityAM');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AvailabilityAmid = "AvailabilityAmid",
            Day = "Day"
        }
    }
}

