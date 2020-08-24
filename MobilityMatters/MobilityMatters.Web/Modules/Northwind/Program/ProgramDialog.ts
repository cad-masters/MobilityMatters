
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class ProgramDialog extends Serenity.EntityDialog<ProgramRow, any> {
        protected getFormKey() { return ProgramForm.formKey; }
        protected getIdProperty() { return ProgramRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramRow.localTextPrefix; }
        protected getNameProperty() { return ProgramRow.nameProperty; }
        protected getService() { return ProgramService.baseUrl; }

        protected form = new ProgramForm(this.idPrefix);

    }
}