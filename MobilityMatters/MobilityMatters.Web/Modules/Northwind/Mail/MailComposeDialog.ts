
    namespace MobilityMatters.Northwind {

        export interface MailComposeDialogOptions {
            toVoluntueer?: number[];
            ccList?: number[];
            subject?: string;
            body?: string;
            attachments?: Serenity.UploadedFile[];
        }

        @Serenity.Decorators.registerClass()
        export class MailComposeDialog extends Serenity.PropertyDialog<MailComposeRequest, MailComposeDialogOptions> {

            private form: MailComposeForm = new MailComposeForm(this.idPrefix);

            constructor(opt: MailComposeDialogOptions) {
                super(opt);

                this.dialogTitle = "Compose Mail";
                this.form.To.value = opt.toVoluntueer ? opt.toVoluntueer.toString() : null;

                if (opt.ccList && opt.ccList.length) {
                    this.form.Cc.values = opt.ccList.map(x => x.toString());
                }

                this.form.Subject.value = opt.subject;
                if (opt.body)
                    this.form.BodyHtml.value = opt.body;

                if (opt.attachments)
                    this.form.Attachments.value = opt.attachments;
            }

            getDialogButtons() {
                var buttons = super['getDialogButtons']();
                buttons[0].text = "Send";
                return buttons;
            }

            getDialogOptions() {
                var opt = super.getDialogOptions();
                opt.width = 950;
                return opt;
            }

            validateBeforeSave() {
                if (!super.validateBeforeSave())
                    return false;

                if (this.options.attachments &&
                    (!this.form.Attachments.value ||
                        !this.form.Attachments.value.length)) {
                    Q.notifyError("You need to attach a file to this message!");
                    return false;
                }

                return true;
            }

            okClickValidated() {
                var request: MailComposeRequest = {};
                this.propertyGrid.save(request);
                MailService.Compose(request, response => {
                    Serenity.SubDialogHelper.triggerDataChange(this);
                    this.dialogClose();
                });
            }
        }
    }