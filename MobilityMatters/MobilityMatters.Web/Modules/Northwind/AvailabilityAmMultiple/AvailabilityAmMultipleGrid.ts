
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityAmMultipleGrid extends Serenity.EntityGrid<AvailabilityAmMultipleRow, any> {
        protected getColumnsKey() { return 'Northwind.AvailabilityAmMultiple'; }
        protected getDialogType() { return AvailabilityAmMultipleDialog; }
        protected getIdProperty() { return AvailabilityAmMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityAmMultipleRow.localTextPrefix; }
        protected getService() { return AvailabilityAmMultipleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}