
namespace MobilityMatters.Northwind {
    export class CitiesMultiForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.CitiesMulti';
    }

    export interface CitiesMultiForm {
        CityId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    [,
        ['CityId', () => Serenity.IntegerEditor],
        ['EmployeeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(CitiesMultiForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}