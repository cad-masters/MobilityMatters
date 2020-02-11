namespace MobilityMatters.Northwind {
    export interface AvailabilityAmMultipleForm {
        AvailabilityAmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    export class AvailabilityAmMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityAmMultiple';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvailabilityAmMultipleForm.init)  {
                AvailabilityAmMultipleForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(AvailabilityAmMultipleForm, [
                    'AvailabilityAmid', w0,
                    'EmployeeId', w0
                ]);
            }
        }
    }
}

