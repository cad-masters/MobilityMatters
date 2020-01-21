
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class CitiesMultiGrid extends Serenity.EntityGrid<CitiesMultiRow, any> {
        protected getColumnsKey() { return 'Northwind.CitiesMulti'; }
        protected getDialogType() { return CitiesMultiDialog; }
        protected getIdProperty() { return CitiesMultiRow.idProperty; }
        protected getLocalTextPrefix() { return CitiesMultiRow.localTextPrefix; }
        protected getService() { return CitiesMultiService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}