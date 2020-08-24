namespace MobilityMatters.Northwind {
    export interface ProgramForm {
        Name: Serenity.StringEditor;
    }

    export class ProgramForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Program';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramForm.init)  {
                ProgramForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProgramForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

