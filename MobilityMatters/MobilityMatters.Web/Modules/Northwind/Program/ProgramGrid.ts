
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class ProgramGrid extends Serenity.EntityGrid<ProgramRow, any> {
        protected getColumnsKey() { return 'Northwind.Program'; }
        protected getDialogType() { return ProgramDialog; }
        protected getIdProperty() { return ProgramRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramRow.localTextPrefix; }
        protected getService() { return ProgramService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}