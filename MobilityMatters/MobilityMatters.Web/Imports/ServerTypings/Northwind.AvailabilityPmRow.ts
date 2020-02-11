namespace MobilityMatters.Northwind {
    export interface AvailabilityPmRow {
        AvailabilityPmid?: number;
        Day?: string;
    }

    export namespace AvailabilityPmRow {
        export const idProperty = 'AvailabilityPmid';
        export const nameProperty = 'Day';
        export const localTextPrefix = 'Northwind.AvailabilityPm';
        export const lookupKey = 'Northwind.AvailabilityPM';

        export function getLookup(): Q.Lookup<AvailabilityPmRow> {
            return Q.getLookup<AvailabilityPmRow>('Northwind.AvailabilityPM');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AvailabilityPmid = "AvailabilityPmid",
            Day = "Day"
        }
    }
}

