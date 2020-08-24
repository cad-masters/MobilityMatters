
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class ProgramMultipleDialog extends Serenity.EntityDialog<ProgramMultipleRow, any> {
        protected getFormKey() { return ProgramMultipleForm.formKey; }
        protected getIdProperty() { return ProgramMultipleRow.idProperty; }
        protected getLocalTextPrefix() { return ProgramMultipleRow.localTextPrefix; }
        protected getService() { return ProgramMultipleService.baseUrl; }

        protected form = new ProgramMultipleForm(this.idPrefix);

    }
}