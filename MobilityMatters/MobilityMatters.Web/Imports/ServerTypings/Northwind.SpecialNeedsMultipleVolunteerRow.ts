
namespace MobilityMatters.Northwind {
    export interface SpecialNeedsMultipleVolunteerRow {
        SpecialNeedsMultipleVolunteerId?: number;
        SpecialNeedsId?: number;
        EmployeeId?: number;
    }

    export namespace SpecialNeedsMultipleVolunteerRow {
        export const idProperty = 'SpecialNeedsMultipleVolunteerId';
        export const localTextPrefix = 'Northwind.SpecialNeedsMultipleVolunteer';

        export namespace Fields {
            export declare const SpecialNeedsMultipleVolunteerId;
            export declare const SpecialNeedsId;
            export declare const EmployeeId;
        }

        [
            'SpecialNeedsMultipleVolunteerId',
            'SpecialNeedsId',
            'EmployeeId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}