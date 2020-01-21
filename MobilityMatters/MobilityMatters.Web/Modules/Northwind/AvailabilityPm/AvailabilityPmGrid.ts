
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityPmGrid extends Serenity.EntityGrid<AvailabilityPmRow, any> {
        protected getColumnsKey() { return 'Northwind.AvailabilityPm'; }
        protected getDialogType() { return AvailabilityPmDialog; }
        protected getIdProperty() { return AvailabilityPmRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityPmRow.localTextPrefix; }
        protected getService() { return AvailabilityPmService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}