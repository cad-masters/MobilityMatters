namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        protected getFormKey() { return OrderForm.formKey; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getNameProperty() { return OrderRow.nameProperty; }
        protected getService() { return OrderService.baseUrl; }

        protected form = new OrderForm(this.idPrefix);

        constructor() {
            super();
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push(MobilityMatters.Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Northwind.OrderDetail',
                getParams: () => ({
                    OrderID: this.get_entityId()
                })
            }));

            buttons.push({
                title: 'Distance and Duration by Google Maps',
                icon: 'fa fa-map-o text-green',
                onClick: () => {
                    Q.confirm("Do you really want to calculate distance and duration by Google Maps?", () => {
                        var source = (this.form.ShipAddress == null ? "" : this.form.ShipAddress.value + ",") +
                            (this.form.ShipCity == null ? "" : this.form.ShipCity.value + ",") +
                            (this.form.ShipPostalCode == null ? "" : this.form.ShipPostalCode.value);

                        var destination = (this.form.DestinationAddress == null ? "" : this.form.DestinationAddress.value + ",") +
                            (this.form.DestinationCity == null ? "" : this.form.DestinationCity.value + ",") +
                            (this.form.DestinationZip == null ? "" : this.form.DestinationZip.value);

                        if (!Q.isEmptyOrNull(source) && !Q.isEmptyOrNull(destination)) {
                            OrderService.DistanceMatrix({
                                Source: source,
                                Destination: destination
                            },
                                response => {
                                    if (response != null && response.Status == "OK" &&
                                        response.Rows.length > 0 && response.Rows[0].Elements.length > 0 &&
                                        response.Rows[0].Elements[0].Status == "OK") {
                                        this.form.DistanceText.value = response.Rows[0].Elements[0].Distance.Text;
                                        this.form.DurationText.value = response.Rows[0].Elements[0].Duration.Text;
                                        Q.notifySuccess("Distance: " + response.Rows[0].Elements[0].Distance.Text + " Duration: " + response.Rows[0].Elements[0].Duration.Text);
                                    }
                                    else {
                                        Q.notifyError("No distance and duration found!");
                                    }
                                })
                        }
                        else {
                            Q.notifyWarning("Please type origin and destination!");
                        }
                    });
                }
            });

            return buttons;
        }

        protected updateInterface() {
            super.updateInterface();

            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}