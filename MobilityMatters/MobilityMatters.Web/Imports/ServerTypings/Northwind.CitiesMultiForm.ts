namespace MobilityMatters.Northwind {
    export interface CitiesMultiForm {
        CityId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }

    export class CitiesMultiForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.CitiesMulti';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesMultiForm.init)  {
                CitiesMultiForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(CitiesMultiForm, [
                    'CityId', w0,
                    'EmployeeId', w0
                ]);
            }
        }
    }
}

