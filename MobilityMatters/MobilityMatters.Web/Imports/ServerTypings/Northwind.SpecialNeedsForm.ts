namespace MobilityMatters.Northwind {
    export interface SpecialNeedsForm {
        Name: Serenity.StringEditor;
    }

    export class SpecialNeedsForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.SpecialNeeds';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SpecialNeedsForm.init)  {
                SpecialNeedsForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SpecialNeedsForm, [
                    'Name', w0
                ]);
            }
        }
    }
}

