
namespace MobilityMatters.Northwind {
    export class AvailabilityPmMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityPmMultiple';
    }

    export interface AvailabilityPmMultipleForm {
        AvailabilityPmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    [,
        ['AvailabilityPmid', () => Serenity.IntegerEditor],
        ['EmployeeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(AvailabilityPmMultipleForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}