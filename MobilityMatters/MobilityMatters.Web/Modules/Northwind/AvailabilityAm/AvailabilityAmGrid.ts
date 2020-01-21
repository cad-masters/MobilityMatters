
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class AvailabilityAmGrid extends Serenity.EntityGrid<AvailabilityAmRow, any> {
        protected getColumnsKey() { return 'Northwind.AvailabilityAm'; }
        protected getDialogType() { return AvailabilityAmDialog; }
        protected getIdProperty() { return AvailabilityAmRow.idProperty; }
        protected getLocalTextPrefix() { return AvailabilityAmRow.localTextPrefix; }
        protected getService() { return AvailabilityAmService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}