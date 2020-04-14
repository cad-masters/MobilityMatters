﻿namespace MobilityMatters.Northwind {
    export namespace OrderService {
        export const baseUrl = 'Northwind/Order';

        export declare function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function GetDistanceMatrix(request: DistanceMatrixRequest, onSuccess?: (response: DistanceMatrixResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List",
            GetDistanceMatrix = "Northwind/Order/GetDistanceMatrix"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'GetDistanceMatrix'
        ].forEach(x => {
            (<any>OrderService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

