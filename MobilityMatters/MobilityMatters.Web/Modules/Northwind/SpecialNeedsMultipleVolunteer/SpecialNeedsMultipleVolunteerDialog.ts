
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class SpecialNeedsMultipleVolunteerDialog extends Serenity.EntityDialog<SpecialNeedsMultipleVolunteerRow, any> {
        protected getFormKey() { return SpecialNeedsMultipleVolunteerForm.formKey; }
        protected getIdProperty() { return SpecialNeedsMultipleVolunteerRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNeedsMultipleVolunteerRow.localTextPrefix; }
        protected getService() { return SpecialNeedsMultipleVolunteerService.baseUrl; }

        protected form = new SpecialNeedsMultipleVolunteerForm(this.idPrefix);

    }
}