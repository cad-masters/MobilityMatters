namespace MobilityMatters.Northwind {
    export interface OrderForm {
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.StringEditor;
        EmployeeID: Serenity.LookupEditor;
        ShippedDate: Serenity.DateEditor;
        ShipVia: Serenity.LookupEditor;
        Freight: Serenity.DecimalEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        DestinationAddress: Serenity.StringEditor;
        DestinationCity: Serenity.StringEditor;
        DestinationZip: Serenity.StringEditor;
        DistanceText: Serenity.StringEditor;
        DurationText: Serenity.StringEditor;
    }

    export class OrderForm extends Serenity.PrefixedContext {
        static formKey = 'Northwind.Order';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!OrderForm.init)  {
                OrderForm.init = true;

                var s = Serenity;
                var w0 = CustomerEditor;
                var w1 = s.DateEditor;
                var w2 = s.StringEditor;
                var w3 = s.LookupEditor;
                var w4 = s.DecimalEditor;

                Q.initFormType(OrderForm, [
                    'CustomerID', w0,
                    'OrderDate', w1,
                    'RequiredDate', w2,
                    'EmployeeID', w3,
                    'ShippedDate', w1,
                    'ShipVia', w3,
                    'Freight', w4,
                    'ShipAddress', w2,
                    'ShipCity', w2,
                    'ShipPostalCode', w2,
                    'DestinationAddress', w2,
                    'DestinationCity', w2,
                    'DestinationZip', w2,
                    'DistanceText', w2,
                    'DurationText', w2
                ]);
            }
        }
    }
}

