
namespace MobilityMatters.Northwind {
    export interface AvailabilityAmMultipleRow {
        AvailabilityAmMultipleId?: number;
        AvailabilityAmid?: number;
        EmployeeId?: number;
    }

    export namespace AvailabilityAmMultipleRow {
        export const idProperty = 'AvailabilityAmMultipleId';
        export const localTextPrefix = 'Northwind.AvailabilityAmMultiple';

        export namespace Fields {
            export declare const AvailabilityAmMultipleId;
            export declare const AvailabilityAmid;
            export declare const EmployeeId;
        }

        [
            'AvailabilityAmMultipleId',
            'AvailabilityAmid',
            'EmployeeId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}