
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class MailAttachmentsGrid extends Serenity.EntityGrid<MailAttachmentsRow, any> {
        protected getColumnsKey() { return 'Northwind.MailAttachments'; }
        protected getDialogType() { return MailAttachmentsDialog; }
        protected getIdProperty() { return MailAttachmentsRow.idProperty; }
        protected getLocalTextPrefix() { return MailAttachmentsRow.localTextPrefix; }
        protected getService() { return MailAttachmentsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}