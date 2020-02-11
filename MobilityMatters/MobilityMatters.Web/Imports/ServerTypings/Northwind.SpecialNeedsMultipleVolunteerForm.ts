namespace MobilityMatters.Northwind {
    export interface SpecialNeedsMultipleVolunteerForm {
        SpecialNeedsId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    export class SpecialNeedsMultipleVolunteerForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.SpecialNeedsMultipleVolunteer';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SpecialNeedsMultipleVolunteerForm.init)  {
                SpecialNeedsMultipleVolunteerForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(SpecialNeedsMultipleVolunteerForm, [
                    'SpecialNeedsId', w0,
                    'EmployeeId', w0
                ]);
            }
        }
    }
}

