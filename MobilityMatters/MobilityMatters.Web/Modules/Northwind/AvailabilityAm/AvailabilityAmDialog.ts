
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityAmDialog extends Serenity.EntityDialog<AvailabilityAmRow, any> {
        protected getFormKey() { return AvailabilityAmForm.formKey; }
        protected getIdProperty() { return AvailabilityAmRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityAmRow.localTextPrefix; }
        protected getNameProperty() { return AvailabilityAmRow.nameProperty; }
        protected getService() { return AvailabilityAmService.baseUrl; }

        protected form = new AvailabilityAmForm(this.idPrefix);

    }
}