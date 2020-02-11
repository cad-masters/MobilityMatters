namespace MobilityMatters.Northwind {
    export interface MailForm {
        From: Serenity.StringEditor;
        To: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: MailBodyViewer;
        Attachments: Serenity.MultipleImageUploadEditor;
        SendDateTime: Serenity.DateEditor;
        IsSent: Serenity.BooleanEditor;
        ErrorMessage: Serenity.StringEditor;
        ReceivedDate: Serenity.DateEditor;
    }

    export class MailForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Mail';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!MailForm.init)  {
                MailForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = MailBodyViewer;
                var w2 = s.MultipleImageUploadEditor;
                var w3 = s.DateEditor;
                var w4 = s.BooleanEditor;

                Q.initFormType(MailForm, [
                    'From', w0,
                    'To', w0,
                    'Cc', w0,
                    'Subject', w0,
                    'Body', w1,
                    'Attachments', w2,
                    'SendDateTime', w3,
                    'IsSent', w4,
                    'ErrorMessage', w0,
                    'ReceivedDate', w3
                ]);
            }
        }
    }
}

