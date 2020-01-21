
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class CitiesMultiDialog extends Serenity.EntityDialog<CitiesMultiRow, any> {
        protected getFormKey() { return CitiesMultiForm.formKey; }
        protected getIdProperty() { return CitiesMultiRow.idProperty; }
        protected getLocalTextPrefix() { return CitiesMultiRow.localTextPrefix; }
        protected getService() { return CitiesMultiService.baseUrl; }

        protected form = new CitiesMultiForm(this.idPrefix);

    }
}