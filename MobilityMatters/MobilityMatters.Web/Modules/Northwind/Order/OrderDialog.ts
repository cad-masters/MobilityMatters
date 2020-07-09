namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.panel()
    export class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        [x: string]: any;
        getCloningEntity: any;
        protected getFormKey() { return OrderForm.formKey; }
        protected getIdProperty() { return OrderRow.idProperty; }
        protected getLocalTextPrefix() { return OrderRow.localTextPrefix; }
        protected getNameProperty() { return OrderRow.nameProperty; }
        protected getService() { return OrderService.baseUrl; }
        private customerPropertyGrid: Serenity.PropertyGrid;
        private customerForm: Northwind.CustomerForm;
        private customerValidator: JQueryValidation.Validator;
        private employeesPropertyGrid: Serenity.PropertyGrid;
        private employeesForm: Northwind.EmployeesForm;
        private employeesValidator: JQueryValidation.Validator;


        protected form = new OrderForm(this.idPrefix);

        constructor() {
            super();

            this.customerPropertyGrid = new Serenity.PropertyGrid(this.byId("CustomerPropertyGrid"), {
                idPrefix: this.idPrefix + "_Customer_",
                items: Q.getForm(Northwind.CustomerForm.formKey).filter(x => x.name != 'CustomerID'),
                useCategories: true
            });

            this.employeesPropertyGrid = new Serenity.PropertyGrid(this.byId("EmployeesPropertyGrid"), {
                idPrefix: this.idPrefix + "_Employee_",
                items: Q.getForm(Northwind.EmployeesForm.formKey).filter(x => x.name != 'EmployeeID'),
                useCategories: true
            });

            // this is just a helper to access editors if needed
            this.customerForm = new Northwind.CustomerForm((this.customerPropertyGrid as any).idPrefix);
            this.employeesForm = new Northwind.EmployeesForm((this.employeesPropertyGrid as any).idPrefix);

            // initialize validator for customer form
            this.customerValidator = this.byId("CustomerForm").validate(Q.validateOptions({}));
            this.employeesValidator = this.byId("EmployeesForm").validate(Q.validateOptions({}));

            var selfChange = 0;

            // creating another toolbar for customer tab that will only save Customer
            new Serenity.Toolbar(this.byId("CustomerToolbar"), {
                buttons: [{
                    cssClass: "apply-changes-button",
                    title: Q.text("Controls.EntityDialog.SaveButton"),
                    onClick: () => {
                        var id = this.getCustomerID();
                        if (!id)
                            return;

                        if (!this.customerValidator.form())
                            return;

                        // prepare an empty entity to serialize customer details into
                        var c = <Northwind.CustomerRow>{};
                        this.customerPropertyGrid.save(c);

                        Northwind.CustomerService.Update({
                            EntityId: id,
                            Entity: c
                        }, response => {
                            // reload customer list just in case
                            Q.reloadLookup(Northwind.CustomerRow.lookupKey);

                            // set flag that we are triggering customer select change event
                            // otherwise active tab will change to first one
                            selfChange++;
                            try {
                                // trigger change so that customer select updates its text
                                // in case if Company Name is changed
                                this.form.CustomerID.element.change();
                            }
                            finally {
                                selfChange--;
                            }

                            Q.notifySuccess("Saved customer details");
                        });

                    }
                }]
            });

            new Serenity.Toolbar(this.byId("EmployeesToolbar"), {
                buttons: [{
                    cssClass: "apply-changes-button",
                    title: Q.text("Controls.EntityDialog.SaveButton"),
                    onClick: () => {
                        var id = this.getEmployeeID();
                        if (!id)
                            return;

                        if (!this.employeesValidator.form())
                            return;

                        // prepare an empty entity to serialize customer details into
                        var c = <Northwind.EmployeesRow>{};
                        this.employeesPropertyGrid.save(c);

                        Northwind.EmployeesService.Update({
                            EntityId: id,
                            Entity: c
                        }, response => {
                            // reload customer list just in case
                            Q.reloadLookup(Northwind.EmployeesRow.lookupKey);

                            // set flag that we are triggering customer select change event
                            // otherwise active tab will change to first one
                            selfChange++;
                            try {
                                // trigger change so that customer select updates its text
                                // in case if Company Name is changed
                                this.form.EmployeeID.element.change();
                            }
                            finally {
                                selfChange--;
                            }

                            Q.notifySuccess("Saved Volunteer details");
                        });

                    }
                }]
            });

            this.form.CustomerID.change(e => {
                CustomerService.List({
                    EqualityFilter: <CustomerRow>{
                        CustomerID: this.form.CustomerID.value
                    }
                },
                    response => {
                        if (response.Entities.length) {
                            this.form.ShipAddress.value = response.Entities[0].Address;
                            this.form.ShipCity.value = response.Entities[0].City;
                            this.form.ShipPostalCode.value = response.Entities[0].PostalCode;

                            this.CalculateDistanceAndDuration(true);
                        }
                    });

                if (selfChange)
                    return;

                var customerID = this.getCustomerID();

                Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer', !customerID);

                if (!customerID) {
                    // no customer is selected, just load an empty entity
                    this.customerPropertyGrid.load({});
                    return;
                }

                // load selected customer into customer form by calling CustomerService
                Northwind.CustomerService.Retrieve({
                    EntityId: customerID
                }, response => {
                    this.customerPropertyGrid.load(response.Entity);
                });
            });

            this.form.EmployeeID.change(e => {
                if (selfChange)
                    return;

                var employeeID = this.getEmployeeID();

                Serenity.TabsExtensions.setDisabled(this.tabs, 'Employees', !employeeID);

                if (!employeeID) {
                    // no customer is selected, just load an empty entity
                    this.employeesPropertyGrid.load({});
                    return;
                }

                // load selected customer into customer form by calling CustomerService
                Northwind.EmployeesService.Retrieve({
                    EntityId: employeeID
                }, response => {
                    this.employeesPropertyGrid.load(response.Entity);
                });

            });
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            /*buttons.push(MobilityMatters.Common.ReportHelper.createToolButton({
                title: 'Invoice',
                cssClass: 'export-pdf-button',
                reportKey: 'Northwind.OrderDetail',
                getParams: () => ({
                    OrderID: this.get_entityId()
                })
            }));*/

            buttons.push({
                title: 'Distance and Duration by Google Maps',
                icon: 'fa fa-map-o text-green',
                onClick: () => {
                    Q.confirm("Do you really want to calculate distance and duration by Google Maps?", () => {
                        this.CalculateDistanceAndDuration(false);
                    });
                }
            });

            buttons.push({
                title: 'Send Email',
                icon: "fa-envelope text-green",
                separator: false,
                onClick: () => {
                    var volunteers: number[] = [];

                    if (this.form.EmployeeID.value) {
                        volunteers.push(Q.toId(this.form.EmployeeID.value));
                    }

                    var client = Q.tryFirst(CustomerRow.getLookup().items, x => x.CustomerID == this.form.CustomerID.value);
                    var apptDate = this.form.OrderDate.valueAsDate.toString().substring(0,15);
                    var subject = "Ride Scheduled for " + apptDate + " at " + this.form.RequiredDate.value + " with " + (client ? client.FullName : "");
                    

                    new Northwind.MailComposeDialog({
                        mailFromTrip: true,
                        toVoluntueer: volunteers,
                        subject: subject,
                        appointmentDate: this.form.OrderDate.valueAsDate,
                        clientName: (client ? client.FullName : ""),
                        rideNumber: this.form.OrderID.value,
                        telephoneNumber: client.Phone,
                        pickupTime: this.form.RequiredDate.value,
                        pickupAddress: this.form.ShipAddress.value + " " + this.form.ShipCity.value + " " + this.form.ShipPostalCode.value,
                        deliveryAddress: this.form.DestinationAddress.value + " " + this.form.DestinationCity.value + " " + this.form.DestinationZip.value,
                        deliveryAddress2: this.form.DestinationAddress2.value + " " + this.form.DestinationCity2.value + " " + this.form.DestinationZip2.value,
                        apptLength: this.form.ApptTime.value,
                        apptType: this.form.ApptType.value,
                        appointmentTime: this.form.AppointmentTime.value,
                        apptLength2: this.form.ApptTime2.value,
                        apptType2: this.form.ApptType2.value,
                        appointmentTime2: this.form.AppointmentTime2.value,
                        altPhone: client.AltPhone
                    }).dialogOpen();
                }
            });

            return buttons;
        }

        getCustomerID() {
            var customerID = this.form.CustomerID.value;

            if (Q.isEmptyOrNull(customerID))
                return null;

            // unfortunately, CustomerID (a string) used in this form and 
            // the ID (auto increment ID) are different, so we need to 
            // find numeric ID from customer lookups. 
            // you'll probably won't need this step.
            return Q.first(Northwind.CustomerRow.getLookup().items,
                x => x.CustomerID == customerID).ID;
        }

        getEmployeeID() {
            var employeeID = this.form.EmployeeID.value;
            //alert(employeeID);
            if (Q.isEmptyOrNull(employeeID))
                return null;

            // unfortunately, CustomerID (a string) used in this form and 
            // the ID (auto increment ID) are different, so we need to 
            // find numeric ID from customer lookups. 
            // you'll probably won't need this step.
            //return Q.first(Northwind.EmployeesRow.getLookup().items,
              // x => x.EmployeeID == employeeID).ID;
            return employeeID;
        }

        loadEntity(entity: Northwind.OrderRow) {
            super.loadEntity(entity);

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer',
                !this.getCustomerID());

            Serenity.TabsExtensions.setDisabled(this.tabs, 'Employees',
                !this.getEmployeeID());
        }

        protected CalculateDistanceAndDuration(isRiderChanged: boolean) {
            var source = (Q.isEmptyOrNull(this.form.ShipAddress.value) ? "" : this.form.ShipAddress.value + ",") +
                (Q.isEmptyOrNull(this.form.ShipCity.value) ? "" : this.form.ShipCity.value + ",") +
                (Q.isEmptyOrNull(this.form.ShipPostalCode.value) ? "" : this.form.ShipPostalCode.value);

            var destination = (Q.isEmptyOrNull(this.form.DestinationAddress.value) ? "" : this.form.DestinationAddress.value + ",") +
                (Q.isEmptyOrNull(this.form.DestinationCity.value) ? "" : this.form.DestinationCity.value + ",") +
                (Q.isEmptyOrNull(this.form.DestinationZip.value) ? "" : this.form.DestinationZip.value);

            if (!Q.isEmptyOrNull(source) && !Q.isEmptyOrNull(destination)) {
                
                OrderService.GetDistanceMatrix({
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
                if (!isRiderChanged) {
                    Q.notifyWarning("Please type origin and destination!");
                }
            }
        }

        protected updateInterface() {
            super.updateInterface();

            
            this.cloneButton.toggle(this.isEditMode());
            this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
        }
    }
}