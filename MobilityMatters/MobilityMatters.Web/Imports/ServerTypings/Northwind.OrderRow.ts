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
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        DestinationAddress?: string;
        DestinationCity?: string;
        DestinationZip?: string;
        ShipCountry?: string;
        DistanceText?: string;
        DistanceValue?: number;
        DurationText?: string;
        DurationValue?: number;
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
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            DestinationAddress = "DestinationAddress",
            DestinationCity = "DestinationCity",
            DestinationZip = "DestinationZip",
            ShipCountry = "ShipCountry",
            DistanceText = "DistanceText",
            DistanceValue = "DistanceValue",
            DurationText = "DurationText",
            DurationValue = "DurationValue",
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

