
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class MailDialog extends Serenity.EntityDialog<MailRow, any> {
        protected getFormKey() { return MailForm.formKey; }
        protected getIdProperty() { return MailRow.idProperty; }
        protected getLocalTextPrefix() { return MailRow.localTextPrefix; }
        protected getNameProperty() { return MailRow.nameProperty; }
        protected getService() { return MailService.baseUrl; }

        protected form = new MailForm(this.idPrefix);

        updateInterface() {
            super.updateInterface();
            Serenity.EditorUtils.setReadonly(this.element.find('.editor').not('iframe'), true);
            this.applyChangesButton.hide();
            this.saveAndCloseButton.hide();
            this.deleteButton.hide();
        }

    }
}