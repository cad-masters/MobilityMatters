
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class ProgramMultipleGrid extends Serenity.EntityGrid<ProgramMultipleRow, any> {
        protected getColumnsKey() { return 'Northwind.ProgramMultiple'; }
        protected getDialogType() { return ProgramMultipleDialog; }
        protected getIdProperty() { return ProgramMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramMultipleRow.localTextPrefix; }
        protected getService() { return ProgramMultipleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}