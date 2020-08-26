namespace MobilityMatters.Northwind {
    export interface OrderForm {
        OrderID: Serenity.IntegerEditor;
        CustomerID: CustomerEditor;
        CustomerProgram: Serenity.StringEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.StringEditor;
        EmployeeID: Serenity.LookupEditor;
        HowMany: Helpers.HardcodedValuesEditor;
        ConfirmRide: Serenity.BooleanEditor;
        RideCompleted: Serenity.BooleanEditor;
        Cancelled: Serenity.BooleanEditor;
        CancelReason: Serenity.TextAreaEditor;
        CustomerSpecialNeedsPlainText: Serenity.TextAreaEditor;
        CustomerSpecialConditionsDirections: Serenity.TextAreaEditor;
        AppointmentTime: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        DestinationAddress: Serenity.StringEditor;
        DestinationApartment: Serenity.StringEditor;
        DestinationCity: Serenity.StringEditor;
        DestinationZip: Serenity.StringEditor;
        ApptTime: Serenity.StringEditor;
        ApptType: Serenity.LookupEditor;
        DistanceText: Serenity.StringEditor;
        DurationText: Serenity.StringEditor;
        AppointmentTime2: Serenity.StringEditor;
        DestinationAddress2: Serenity.StringEditor;
        DestinationApartment2: Serenity.StringEditor;
        DestinationCity2: Serenity.StringEditor;
        DestinationZip2: Serenity.StringEditor;
        ApptTime2: Serenity.StringEditor;
        ApptType2: Serenity.StringEditor;
        DistanceText2: Serenity.StringEditor;
        DurationText2: Serenity.StringEditor;
        AppointmentTime3: Serenity.StringEditor;
        DestinationAddress3: Serenity.StringEditor;
        DestinationApartment3: Serenity.StringEditor;
        DestinationCity3: Serenity.StringEditor;
        DestinationZip3: Serenity.StringEditor;
        ApptTime3: Serenity.StringEditor;
        ApptType3: Serenity.StringEditor;
        DistanceText3: Serenity.StringEditor;
        DurationText3: Serenity.StringEditor;
        ActualTotalHours: Serenity.StringEditor;
        ActualTotalMileage: Serenity.StringEditor;
        Cost: Serenity.DecimalEditor;
        Paid: Serenity.BooleanEditor;
        ReceiptReceived: Serenity.BooleanEditor;
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
                var w2 = s.StringEditor;
                var w3 = s.DateEditor;
                var w4 = s.LookupEditor;
                var w5 = Helpers.HardcodedValuesEditor;
                var w6 = s.BooleanEditor;
                var w7 = s.TextAreaEditor;
                var w8 = s.DecimalEditor;

                Q.initFormType(OrderForm, [
                    'OrderID', w0,
                    'CustomerID', w1,
                    'CustomerProgram', w2,
                    'OrderDate', w3,
                    'RequiredDate', w2,
                    'EmployeeID', w4,
                    'HowMany', w5,
                    'ConfirmRide', w6,
                    'RideCompleted', w6,
                    'Cancelled', w6,
                    'CancelReason', w7,
                    'CustomerSpecialNeedsPlainText', w7,
                    'CustomerSpecialConditionsDirections', w7,
                    'AppointmentTime', w2,
                    'ShipAddress', w2,
                    'ShipCity', w2,
                    'ShipPostalCode', w2,
                    'DestinationAddress', w2,
                    'DestinationApartment', w2,
                    'DestinationCity', w2,
                    'DestinationZip', w2,
                    'ApptTime', w2,
                    'ApptType', w4,
                    'DistanceText', w2,
                    'DurationText', w2,
                    'AppointmentTime2', w2,
                    'DestinationAddress2', w2,
                    'DestinationApartment2', w2,
                    'DestinationCity2', w2,
                    'DestinationZip2', w2,
                    'ApptTime2', w2,
                    'ApptType2', w2,
                    'DistanceText2', w2,
                    'DurationText2', w2,
                    'AppointmentTime3', w2,
                    'DestinationAddress3', w2,
                    'DestinationApartment3', w2,
                    'DestinationCity3', w2,
                    'DestinationZip3', w2,
                    'ApptTime3', w2,
                    'ApptType3', w2,
                    'DistanceText3', w2,
                    'DurationText3', w2,
                    'ActualTotalHours', w2,
                    'ActualTotalMileage', w2,
                    'Cost', w8,
                    'Paid', w6,
                    'ReceiptReceived', w6
                ]);
            }
        }
    }
}

