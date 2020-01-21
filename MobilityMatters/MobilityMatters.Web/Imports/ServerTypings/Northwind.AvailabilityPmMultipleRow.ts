
namespace MobilityMatters.Northwind {
    export interface AvailabilityPmMultipleRow {
        AvailabilityPmMultipleId?: number;
        AvailabilityPmid?: number;
        EmployeeId?: number;
    }

    export namespace AvailabilityPmMultipleRow {
        export const idProperty = 'AvailabilityPmMultipleId';
        export const localTextPrefix = 'Northwind.AvailabilityPmMultiple';

        export namespace Fields {
            export declare const AvailabilityPmMultipleId;
            export declare const AvailabilityPmid;
            export declare const EmployeeId;
        }

        [
            'AvailabilityPmMultipleId',
            'AvailabilityPmid',
            'EmployeeId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}