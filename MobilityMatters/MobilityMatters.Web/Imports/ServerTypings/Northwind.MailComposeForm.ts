namespace MobilityMatters.Northwind {
    export interface MailComposeForm {
        To: Serenity.LookupEditor;
        Cc: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        BodyHtml: MailContentEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        ReplyToMailId: Serenity.IntegerEditor;
    }

    export class MailComposeForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.MailCompose';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MailComposeForm.init)  {
                MailComposeForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = MailContentEditor;
                var w3 = s.MultipleImageUploadEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(MailComposeForm, [
                    'To', w0,
                    'Cc', w0,
                    'Subject', w1,
                    'BodyHtml', w2,
                    'Attachments', w3,
                    'ReplyToMailId', w4
                ]);
            }
        }
    }
}

