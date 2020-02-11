namespace MobilityMatters.Northwind {
    export interface AvailabilityPmMultipleForm {
        AvailabilityPmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    export class AvailabilityPmMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityPmMultiple';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvailabilityPmMultipleForm.init)  {
                AvailabilityPmMultipleForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(AvailabilityPmMultipleForm, [
                    'AvailabilityPmid', w0,
                    'EmployeeId', w0
                ]);
            }
        }
    }
}

