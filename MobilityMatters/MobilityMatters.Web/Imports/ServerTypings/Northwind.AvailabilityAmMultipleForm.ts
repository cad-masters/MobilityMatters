
namespace MobilityMatters.Northwind {
    export class AvailabilityAmMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityAmMultiple';
    }

    export interface AvailabilityAmMultipleForm {
        AvailabilityAmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    [,
        ['AvailabilityAmid', () => Serenity.IntegerEditor],
        ['EmployeeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AvailabilityAmMultipleForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}