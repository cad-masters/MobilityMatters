namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class InactiveEmployeesGrid extends EmployeesGrid {
        protected getColumnsKey() { return "Northwind.Employees"; }

        protected getDialogType() { return <any>EmployeesDialog; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getService() { return EmployeesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            request.EqualityFilter = request.EqualityFilter || {};
            request.EqualityFilter[EmployeesRow.Fields.OnVacation] = true;

            return true;
        }
    }
}