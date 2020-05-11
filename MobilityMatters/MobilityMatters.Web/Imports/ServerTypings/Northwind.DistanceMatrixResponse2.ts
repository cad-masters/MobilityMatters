namespace MobilityMatters.Northwind {
    export interface DistanceMatrixResponse2 extends Serenity.ServiceResponse {
        Status?: string;
        DestinationAddresses?: string[];
        Destination2Addresses?: string[];
        Rows?: Row[];
    }
}

