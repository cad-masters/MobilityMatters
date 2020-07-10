/// <reference path="../Order/OrderDialog.ts" />

namespace MobilityMatters.Northwind {

    @Serenity.Decorators.registerClass()
    export class CustomerOrderDialog extends OrderDialog {

        constructor() {
            super();

            this.form.CustomerID.changeSelect2(e => {
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

                            //this.CalculateDistanceAndDuration(true);
                        }
                    });
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

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

                            //this.CalculateDistanceAndDuration(true);
                        }
                    });
            });
        }

        updateInterface() {
            super.updateInterface();

            Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
        }
    }
}