
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityPmDialog extends Serenity.EntityDialog<AvailabilityPmRow, any> {
        protected getFormKey() { return AvailabilityPmForm.formKey; }
        protected getIdProperty() { return AvailabilityPmRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityPmRow.localTextPrefix; }
        protected getNameProperty() { return AvailabilityPmRow.nameProperty; }
        protected getService() { return AvailabilityPmService.baseUrl; }

        protected form = new AvailabilityPmForm(this.idPrefix);

    }
}