namespace MobilityMatters.Northwind {
    export interface OrderForm {
        OrderID: Serenity.IntegerEditor;
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.StringEditor;
        EmployeeID: Serenity.LookupEditor;
        RideCompleted: Serenity.BooleanEditor;
        HowMany: Helpers.HardcodedValuesEditor;
        Cancelled: Serenity.BooleanEditor;
        CancelReason: Serenity.StringEditor;
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
        ApptType: Serenity.StringEditor;
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
                var w5 = s.BooleanEditor;
                var w6 = Helpers.HardcodedValuesEditor;
                var w7 = s.TextAreaEditor;

                Q.initFormType(OrderForm, [
                    'OrderID', w0,
                    'CustomerID', w1,
                    'OrderDate', w2,
                    'RequiredDate', w3,
                    'EmployeeID', w4,
                    'RideCompleted', w5,
                    'HowMany', w6,
                    'Cancelled', w5,
                    'CancelReason', w3,
                    'CustomerSpecialNeedsPlainText', w7,
                    'CustomerSpecialConditionsDirections', w7,
                    'AppointmentTime', w3,
                    'ShipAddress', w3,
                    'ShipCity', w3,
                    'ShipPostalCode', w3,
                    'DestinationAddress', w3,
                    'DestinationApartment', w3,
                    'DestinationCity', w3,
                    'DestinationZip', w3,
                    'ApptTime', w3,
                    'ApptType', w3,
                    'DistanceText', w3,
                    'DurationText', w3,
                    'AppointmentTime2', w3,
                    'DestinationAddress2', w3,
                    'DestinationApartment2', w3,
                    'DestinationCity2', w3,
                    'DestinationZip2', w3,
                    'ApptTime2', w3,
                    'ApptType2', w3,
                    'DistanceText2', w3,
                    'DurationText2', w3,
                    'AppointmentTime3', w3,
                    'DestinationAddress3', w3,
                    'DestinationApartment3', w3,
                    'DestinationCity3', w3,
                    'DestinationZip3', w3,
                    'ApptTime3', w3,
                    'ApptType3', w3,
                    'DistanceText3', w3,
                    'DurationText3', w3,
                    'ActualTotalHours', w3,
                    'ActualTotalMileage', w3
                ]);
            }
        }
    }
}

