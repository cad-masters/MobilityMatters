
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey() { return CitiesForm.formKey; }
        protected getIdProperty() { return CitiesRow.idProperty; }
        protected getLocalTextPrefix() { return CitiesRow.localTextPrefix; }
        protected getNameProperty() { return CitiesRow.nameProperty; }
        protected getService() { return CitiesService.baseUrl; }

        protected form = new CitiesForm(this.idPrefix);

    }
}