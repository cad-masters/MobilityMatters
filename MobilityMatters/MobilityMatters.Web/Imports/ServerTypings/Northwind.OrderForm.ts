namespace MobilityMatters.Northwind {
    export interface OrderForm {
        OrderID: Serenity.IntegerEditor;
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
                var w0 = s.IntegerEditor;
                var w1 = CustomerEditor;
                var w2 = s.DateEditor;
                var w3 = s.StringEditor;
                var w4 = s.LookupEditor;
                var w5 = s.DecimalEditor;

                Q.initFormType(OrderForm, [
                    'OrderID', w0,
                    'CustomerID', w1,
                    'OrderDate', w2,
                    'RequiredDate', w3,
                    'EmployeeID', w4,
                    'ShippedDate', w2,
                    'ShipVia', w4,
                    'Freight', w5,
                    'ShipAddress', w3,
                    'ShipCity', w3,
                    'ShipPostalCode', w3,
                    'DestinationAddress', w3,
                    'DestinationCity', w3,
                    'DestinationZip', w3,
                    'DistanceText', w3,
                    'DurationText', w3
                ]);
            }
        }
    }
}

