
namespace MobilityMatters.Northwind {
    export interface AvailabilityAmRow {
        AvailabilityAmid?: number;
        Day?: string;
    }

    export namespace AvailabilityAmRow {
        export const idProperty = 'AvailabilityAmid';
        export const nameProperty = 'Day';
        export const localTextPrefix = 'Northwind.AvailabilityAm';

        export namespace Fields {
            export declare const AvailabilityAmid;
            export declare const Day;
        }

        [
            'AvailabilityAmid',
            'Day'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}