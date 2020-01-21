
namespace MobilityMatters.Northwind {
    export class SpecialNeedsMultipleVolunteerForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.SpecialNeedsMultipleVolunteer';
    }

    export interface SpecialNeedsMultipleVolunteerForm {
        SpecialNeedsId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    [,
        ['SpecialNeedsId', () => Serenity.IntegerEditor],
        ['EmployeeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(SpecialNeedsMultipleVolunteerForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}