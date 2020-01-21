
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityAmMultipleDialog extends Serenity.EntityDialog<AvailabilityAmMultipleRow, any> {
        protected getFormKey() { return AvailabilityAmMultipleForm.formKey; }
        protected getIdProperty() { return AvailabilityAmMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityAmMultipleRow.localTextPrefix; }
        protected getService() { return AvailabilityAmMultipleService.baseUrl; }

        protected form = new AvailabilityAmMultipleForm(this.idPrefix);

    }
}