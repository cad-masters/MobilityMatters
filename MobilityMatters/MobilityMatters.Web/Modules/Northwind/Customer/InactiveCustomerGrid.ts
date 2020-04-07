namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InactiveCustomerGrid extends CustomerGrid {
        protected getColumnsKey() { return "Northwind.Customer"; }

        protected getDialogType() { return <any>CustomerDialog; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getService() { return CustomerService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            request.EqualityFilter = request.EqualityFilter || {};
            request.EqualityFilter[CustomerRow.Fields.EIO] = false;

            return true;
        }
    }
}