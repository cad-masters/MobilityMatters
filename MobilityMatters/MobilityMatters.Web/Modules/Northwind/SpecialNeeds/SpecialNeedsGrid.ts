
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class SpecialNeedsGrid extends Serenity.EntityGrid<SpecialNeedsRow, any> {
        protected getColumnsKey() { return 'Northwind.SpecialNeeds'; }
        protected getDialogType() { return SpecialNeedsDialog; }
        protected getIdProperty() { return SpecialNeedsRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNeedsRow.localTextPrefix; }
        protected getService() { return SpecialNeedsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}