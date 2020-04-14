namespace MobilityMatters.Northwind {
    export interface DistanceMatrixRequest extends Serenity.ServiceRequest {
        Source?: string;
        Destination?: string;
    }
}

