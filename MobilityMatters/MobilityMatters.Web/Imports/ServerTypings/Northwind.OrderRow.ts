namespace MobilityMatters.Northwind {
    export interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        Cost?: number;
        ReceiptReceived?: boolean;
        Paid?: boolean;
        ShipName?: string;
        RideCompleted?: boolean;
        ConfirmRide?: boolean;
        Cancelled?: boolean;
        CancelReason?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        HowMany?: number;
        HowManyInt?: number;
        ActualTotalHours?: string;
        ActualTotalMinutes?: string;
        ActualTotalMileage?: string;
        DestinationAddress?: string;
        DestinationCity?: string;
        DestinationZip?: string;
        DestinationApartment?: string;
        ApptTime?: string;
        AppointmentTime?: string;
        ApptType?: string;
        DistanceText?: string;
        DistanceValue?: number;
        DurationText?: string;
        DurationValue?: number;
        ActualDuration1?: string;
        ActualDurationMins1?: string;
        DestinationAddress2?: string;
        DestinationCity2?: string;
        DestinationZip2?: string;
        DestinationApartment2?: string;
        ApptTime2?: string;
        AppointmentTime2?: string;
        ApptType2?: string;
        DistanceText2?: string;
        DistanceValue2?: number;
        DurationText2?: string;
        DurationValue2?: number;
        ActualDuration2?: string;
        ActualDurationMins2?: string;
        DestinationAddress3?: string;
        DestinationCity3?: string;
        DestinationZip3?: string;
        DestinationApartment3?: string;
        ApptTime3?: string;
        AppointmentTime3?: string;
        ApptType3?: string;
        DistanceText3?: string;
        DistanceValue3?: number;
        DurationText3?: string;
        DurationValue3?: number;
        ActualDuration3?: string;
        ActualDurationMins3?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerProgram?: string;
        CustomerTEMP?: boolean;
        CustomerSpecialNeedsList?: number[];
        CustomerSpecialNeedsPlainText?: string;
        CustomerSpecialConditionsDirections?: string;
        EmployeeFullName?: string;
        CustomerFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }

    export namespace OrderRow {
        export const idProperty = 'OrderID';
        export const nameProperty = 'CustomerID';
        export const localTextPrefix = 'Northwind.Order';
        export const lookupKey = 'Northwind.Order';

        export function getLookup(): Q.Lookup<OrderRow> {
            return Q.getLookup<OrderRow>('Northwind.Order');
        }
        export const deletePermission = 'Northwind:Orders:Modify';
        export const insertPermission = 'Northwind:Orders:Modify';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:Orders:Modify';

        export declare const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            Cost = "Cost",
            ReceiptReceived = "ReceiptReceived",
            Paid = "Paid",
            ShipName = "ShipName",
            RideCompleted = "RideCompleted",
            ConfirmRide = "ConfirmRide",
            Cancelled = "Cancelled",
            CancelReason = "CancelReason",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            HowMany = "HowMany",
            HowManyInt = "HowManyInt",
            ActualTotalHours = "ActualTotalHours",
            ActualTotalMinutes = "ActualTotalMinutes",
            ActualTotalMileage = "ActualTotalMileage",
            DestinationAddress = "DestinationAddress",
            DestinationCity = "DestinationCity",
            DestinationZip = "DestinationZip",
            DestinationApartment = "DestinationApartment",
            ApptTime = "ApptTime",
            AppointmentTime = "AppointmentTime",
            ApptType = "ApptType",
            DistanceText = "DistanceText",
            DistanceValue = "DistanceValue",
            DurationText = "DurationText",
            DurationValue = "DurationValue",
            ActualDuration1 = "ActualDuration1",
            ActualDurationMins1 = "ActualDurationMins1",
            DestinationAddress2 = "DestinationAddress2",
            DestinationCity2 = "DestinationCity2",
            DestinationZip2 = "DestinationZip2",
            DestinationApartment2 = "DestinationApartment2",
            ApptTime2 = "ApptTime2",
            AppointmentTime2 = "AppointmentTime2",
            ApptType2 = "ApptType2",
            DistanceText2 = "DistanceText2",
            DistanceValue2 = "DistanceValue2",
            DurationText2 = "DurationText2",
            DurationValue2 = "DurationValue2",
            ActualDuration2 = "ActualDuration2",
            ActualDurationMins2 = "ActualDurationMins2",
            DestinationAddress3 = "DestinationAddress3",
            DestinationCity3 = "DestinationCity3",
            DestinationZip3 = "DestinationZip3",
            DestinationApartment3 = "DestinationApartment3",
            ApptTime3 = "ApptTime3",
            AppointmentTime3 = "AppointmentTime3",
            ApptType3 = "ApptType3",
            DistanceText3 = "DistanceText3",
            DistanceValue3 = "DistanceValue3",
            DurationText3 = "DurationText3",
            DurationValue3 = "DurationValue3",
            ActualDuration3 = "ActualDuration3",
            ActualDurationMins3 = "ActualDurationMins3",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerProgram = "CustomerProgram",
            CustomerTEMP = "CustomerTEMP",
            CustomerSpecialNeedsList = "CustomerSpecialNeedsList",
            CustomerSpecialNeedsPlainText = "CustomerSpecialNeedsPlainText",
            CustomerSpecialConditionsDirections = "CustomerSpecialConditionsDirections",
            EmployeeFullName = "EmployeeFullName",
            CustomerFullName = "CustomerFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}

