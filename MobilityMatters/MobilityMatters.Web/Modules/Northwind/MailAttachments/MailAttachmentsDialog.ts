
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class MailAttachmentsDialog extends Serenity.EntityDialog<MailAttachmentsRow, any> {
        protected getFormKey() { return MailAttachmentsForm.formKey; }
        protected getIdProperty() { return MailAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return MailAttachmentsRow.localTextPrefix; }
        protected getNameProperty() { return MailAttachmentsRow.nameProperty; }
        protected getService() { return MailAttachmentsService.baseUrl; }

        protected form = new MailAttachmentsForm(this.idPrefix);

    }
}