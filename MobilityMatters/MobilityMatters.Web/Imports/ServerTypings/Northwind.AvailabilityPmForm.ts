namespace MobilityMatters.Northwind {
    export interface AvailabilityPmForm {
        Day: Serenity.StringEditor;
    }

    export class AvailabilityPmForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityPm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvailabilityPmForm.init)  {
                AvailabilityPmForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AvailabilityPmForm, [
                    'Day', w0
                ]);
            }
        }
    }
}

