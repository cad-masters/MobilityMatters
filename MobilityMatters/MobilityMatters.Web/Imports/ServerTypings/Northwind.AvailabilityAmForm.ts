
namespace MobilityMatters.Northwind {
    export class AvailabilityAmForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityAm';
    }

    export interface AvailabilityAmForm {
        Day: Serenity.StringEditor;
    }

    [,
        ['Day', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(AvailabilityAmForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}