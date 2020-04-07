
namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.filterable()
    export class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey() { return 'Northwind.Employees'; }
        protected getDialogType() { return EmployeesDialog; }
        protected getIdProperty() { return EmployeesRow.idProperty; }
        protected getLocalTextPrefix() { return EmployeesRow.localTextPrefix; }
        protected getService() { return EmployeesService.baseUrl; }
        private rowSelection: Serenity.GridRowSelectionMixin;

        constructor(container: JQuery) {
            super(container);
        }

        protected createToolbarExtensions() {
            super.createToolbarExtensions();
            this.rowSelection = new Serenity.GridRowSelectionMixin(this);
        }

        getButtons() {
            var buttons = super.getButtons();

            buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit(),
                service: 'Northwind/Employees/ListExcel',
                separator: true
            }));

            buttons.push(MobilityMatters.Common.PdfExportHelper.createToolButton({
                grid: this,
                onViewSubmit: () => this.onViewSubmit()
            }));

            buttons.push({
                title: 'Send Email',
                icon: "fa-envelope text-green",
                separator: false,
                onClick: () => {

                    if (!this.onViewSubmit())
                        return;

                    var checkedIDs = this.rowSelection.getSelectedAsInt32();
                    if (checkedIDs.length == 0) {
                        Q.alert("You must select at least one Volunteer to send email!");
                        return;
                    }

                    new Northwind.MailComposeDialog({
                        toVoluntueer: checkedIDs
                    }).dialogOpen();
                }
            });

            return buttons;
        }

        protected getColumns() {
            var columns = super.getColumns();

            columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));

            return columns;
        }

        protected onViewSubmit() {
            if (!super.onViewSubmit())
                return false;

            var request = this.view.params as Serenity.ListRequest;
            request.EqualityFilter = request.EqualityFilter || {};
            request.EqualityFilter[EmployeesRow.Fields.OnVacation] = false;

            return true;
        }
    }
}