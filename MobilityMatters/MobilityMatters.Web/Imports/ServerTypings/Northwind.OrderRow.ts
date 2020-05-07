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
        ShipName?: string;
        RideCompleted?: boolean;
        Cancelled?: boolean;
        CancelReason?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        DestinationAddress?: string;
        DestinationCity?: string;
        DestinationAddress2?: string;
        DestinationCity2?: string;
        ApptTime?: string;
        AppointmentTime?: string;
        ApptType?: string;
        ApptTime2?: string;
        AppointmentTime2?: string;
        ApptType2?: string;
        DestinationZip?: string;
        DestinationZip2?: string;
        ShipCountry?: string;
        DistanceText?: string;
        DistanceValue?: number;
        DurationText?: string;
        DurationValue?: number;
        DistanceText2?: string;
        DistanceValue2?: number;
        DurationText2?: string;
        DurationValue2?: number;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
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
        export const deletePermission = 'Northwind:General';
        export const insertPermission = 'Northwind:General';
        export const readPermission = 'Northwind:General';
        export const updatePermission = 'Northwind:General';

        export declare const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            ShipName = "ShipName",
            RideCompleted = "RideCompleted",
            Cancelled = "Cancelled",
            CancelReason = "CancelReason",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            DestinationAddress = "DestinationAddress",
            DestinationCity = "DestinationCity",
            DestinationAddress2 = "DestinationAddress2",
            DestinationCity2 = "DestinationCity2",
            ApptTime = "ApptTime",
            AppointmentTime = "AppointmentTime",
            ApptType = "ApptType",
            ApptTime2 = "ApptTime2",
            AppointmentTime2 = "AppointmentTime2",
            ApptType2 = "ApptType2",
            DestinationZip = "DestinationZip",
            DestinationZip2 = "DestinationZip2",
            ShipCountry = "ShipCountry",
            DistanceText = "DistanceText",
            DistanceValue = "DistanceValue",
            DurationText = "DurationText",
            DurationValue = "DurationValue",
            DistanceText2 = "DistanceText2",
            DistanceValue2 = "DistanceValue2",
            DurationText2 = "DurationText2",
            DurationValue2 = "DurationValue2",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
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

