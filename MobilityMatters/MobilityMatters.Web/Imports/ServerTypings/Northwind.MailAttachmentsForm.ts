namespace MobilityMatters.Northwind {
    export interface MailAttachmentsForm {
        MailId: Serenity.IntegerEditor;
        MimeType: Serenity.StringEditor;
        Size: Serenity.IntegerEditor;
        FilePath: Serenity.StringEditor;
        OriginalFileName: Serenity.StringEditor;
        CreatedBy: Serenity.IntegerEditor;
        CreatedOn: Serenity.DateEditor;
        ModifiedBy: Serenity.IntegerEditor;
        ModifiedOn: Serenity.DateEditor;
    }

    export class MailAttachmentsForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.MailAttachments';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MailAttachmentsForm.init)  {
                MailAttachmentsForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateEditor;

                Q.initFormType(MailAttachmentsForm, [
                    'MailId', w0,
                    'MimeType', w1,
                    'Size', w0,
                    'FilePath', w1,
                    'OriginalFileName', w1,
                    'CreatedBy', w0,
                    'CreatedOn', w2,
                    'ModifiedBy', w0,
                    'ModifiedOn', w2
                ]);
            }
        }
    }
}

