
namespace MobilityMatters.Northwind {
    export class AvailabilityPmForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityPm';
    }

    export interface AvailabilityPmForm {
        Day: Serenity.StringEditor;
    }

    [,
        ['Day', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AvailabilityPmForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}