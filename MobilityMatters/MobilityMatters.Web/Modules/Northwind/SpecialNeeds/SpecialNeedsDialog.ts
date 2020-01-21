
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class SpecialNeedsDialog extends Serenity.EntityDialog<SpecialNeedsRow, any> {
        protected getFormKey() { return SpecialNeedsForm.formKey; }
        protected getIdProperty() { return SpecialNeedsRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNeedsRow.localTextPrefix; }
        protected getNameProperty() { return SpecialNeedsRow.nameProperty; }
        protected getService() { return SpecialNeedsService.baseUrl; }

        protected form = new SpecialNeedsForm(this.idPrefix);

    }
}