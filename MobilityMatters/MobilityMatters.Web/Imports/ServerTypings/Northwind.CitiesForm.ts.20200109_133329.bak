namespace MobilityMatters.Northwind {
    export interface CitiesForm {
        Name: Serenity.StringEditor;
    }

    export class CitiesForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Cities';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CitiesForm.init)  {
                CitiesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CitiesForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

