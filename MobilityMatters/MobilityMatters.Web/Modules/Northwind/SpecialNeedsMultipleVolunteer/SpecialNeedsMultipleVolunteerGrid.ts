
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class SpecialNeedsMultipleVolunteerGrid extends Serenity.EntityGrid<SpecialNeedsMultipleVolunteerRow, any> {
        protected getColumnsKey() { return 'Northwind.SpecialNeedsMultipleVolunteer'; }
        protected getDialogType() { return SpecialNeedsMultipleVolunteerDialog; }
        protected getIdProperty() { return SpecialNeedsMultipleVolunteerRow.idProperty; }
        protected getLocalTextPrefix() { return SpecialNeedsMultipleVolunteerRow.localTextPrefix; }
        protected getService() { return SpecialNeedsMultipleVolunteerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}