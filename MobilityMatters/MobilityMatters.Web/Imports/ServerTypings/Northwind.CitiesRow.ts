namespace MobilityMatters.Northwind {
    export interface CitiesRow {
        CityId?: number;
        Name?: string;
    }

    export namespace CitiesRow {
        export const idProperty = 'CityId';
        export const nameProperty = 'Name';
        export const localTextPrefix = 'Northwind.Cities';

        export declare const enum Fields {
            CityId = "CityId",
            Name = "Name"
        }
    }
}

