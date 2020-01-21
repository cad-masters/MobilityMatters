
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityPmMultipleGrid extends Serenity.EntityGrid<AvailabilityPmMultipleRow, any> {
        protected getColumnsKey() { return 'Northwind.AvailabilityPmMultiple'; }
        protected getDialogType() { return AvailabilityPmMultipleDialog; }
        protected getIdProperty() { return AvailabilityPmMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityPmMultipleRow.localTextPrefix; }
        protected getService() { return AvailabilityPmMultipleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}