namespace MobilityMatters.Northwind {
    export interface DistanceMatrixResponse extends Serenity.ServiceResponse {
        Status?: string;
        DestinationAddresses?: string[];
        OriginAddresses?: string[];
        Rows?: Row[];
    }
}

