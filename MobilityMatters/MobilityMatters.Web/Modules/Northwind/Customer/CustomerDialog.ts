namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey() { return CustomerForm.formKey; }
        protected getIdProperty() { return CustomerRow.idProperty; }
        protected getLocalTextPrefix() { return CustomerRow.localTextPrefix; }
        protected getNameProperty() { return CustomerRow.nameProperty; }
        protected getService() { return CustomerService.baseUrl; }

        protected form = new CustomerForm(this.idPrefix);

        private ordersGrid: CustomerOrdersGrid;
        private loadedState: string;

        constructor() {
            super();

            this.ordersGrid = new CustomerOrdersGrid(this.byId('OrdersGrid'));
            // force order dialog to open in Dialog mode instead of Panel mode
            // which is set as default on OrderDialog with @panelAttribute
            this.ordersGrid.openDialogsAsPanel = false;

            this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
            DialogUtils.pendingChangesConfirmation(this.element, () => this.getSaveState() != this.loadedState);

            this.form.CustomerID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.CustomerID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'C').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                MobilityMatters.Northwind.CustomerService.GetNextNumber({
                    Prefix: prefix,
                    Length: 6 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.CustomerID.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.CustomerID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

        getSaveState() {
            try {
                return $.toJSON(this.getSaveEntity());
            }
            catch (e) {
                return null;
            }
        }

        loadResponse(data) {
            super.loadResponse(data);
            this.loadedState = this.getSaveState();
        }

        loadEntity(entity: CustomerRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());

            this.ordersGrid.customerID = entity.CustomerID;
        }

        onSaveSuccess(response) {
            super.onSaveSuccess(response);

            Q.reloadLookup('Northwind.Customer');
        }
    }
}