namespace MobilityMatters.Northwind {
    export interface ProgramMultipleForm {
        ProgramId: Serenity.IntegerEditor;
        CustomerId: Serenity.IntegerEditor;
    }

    export class ProgramMultipleForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.ProgramMultiple';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProgramMultipleForm.init)  {
                ProgramMultipleForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(ProgramMultipleForm, [
                    'ProgramId', w0,
                    'CustomerId', w0
                ]);
            }
        }
    }
}

