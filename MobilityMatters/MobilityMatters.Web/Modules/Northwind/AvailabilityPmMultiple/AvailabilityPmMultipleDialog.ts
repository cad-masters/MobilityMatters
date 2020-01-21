
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityPmMultipleDialog extends Serenity.EntityDialog<AvailabilityPmMultipleRow, any> {
        protected getFormKey() { return AvailabilityPmMultipleForm.formKey; }
        protected getIdProperty() { return AvailabilityPmMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityPmMultipleRow.localTextPrefix; }
        protected getService() { return AvailabilityPmMultipleService.baseUrl; }

        protected form = new AvailabilityPmMultipleForm(this.idPrefix);

    }
}