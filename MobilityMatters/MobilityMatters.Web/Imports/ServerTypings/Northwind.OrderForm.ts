namespace MobilityMatters.Northwind {
    export interface OrderForm {
        OrderID: Serenity.IntegerEditor;
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.StringEditor;
        AppointmentTime: Serenity.StringEditor;
        EmployeeID: Serenity.LookupEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        DestinationAddress: Serenity.StringEditor;
        DestinationCity: Serenity.StringEditor;
        DestinationZip: Serenity.StringEditor;
        ApptTime: Serenity.StringEditor;
        ApptType: Serenity.StringEditor;
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

                Q.initFormType(OrderForm, [
                    'OrderID', w0,
                    'CustomerID', w1,
                    'OrderDate', w2,
                    'RequiredDate', w3,
                    'AppointmentTime', w3,
                    'EmployeeID', w4,
                    'ShipAddress', w3,
                    'ShipCity', w3,
                    'ShipPostalCode', w3,
                    'DestinationAddress', w3,
                    'DestinationCity', w3,
                    'DestinationZip', w3,
                    'ApptTime', w3,
                    'ApptType', w3,
                    'DistanceText', w3,
                    'DurationText', w3
                ]);
            }
        }
    }
}

