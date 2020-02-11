namespace MobilityMatters.Northwind {
    export interface AvailabilityAmForm {
        Day: Serenity.StringEditor;
    }

    export class AvailabilityAmForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.AvailabilityAm';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AvailabilityAmForm.init)  {
                AvailabilityAmForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(AvailabilityAmForm, [
                    'Day', w0
                ]);
            }
        }
    }
}

