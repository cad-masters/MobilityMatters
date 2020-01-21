
namespace MobilityMatters.Northwind {
    export interface AvailabilityPmRow {
        AvailabilityPmid?: number;
        Day?: string;
    }

    export namespace AvailabilityPmRow {
        export const idProperty = 'AvailabilityPmid';
        export const nameProperty = 'Day';
        export const localTextPrefix = 'Northwind.AvailabilityPm';

        export namespace Fields {
            export declare const AvailabilityPmid;
            export declare const Day;
        }

        [
            'AvailabilityPmid',
            'Day'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}