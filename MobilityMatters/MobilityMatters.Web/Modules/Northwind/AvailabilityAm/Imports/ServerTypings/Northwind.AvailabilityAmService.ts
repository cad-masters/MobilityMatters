namespace MobilityMatters.Northwind {
    export namespace AvailabilityAmService {
        export const baseUrl = 'Northwind/AvailabilityAm';

        export declare function Create(request: Serenity.SaveRequest<AvailabilityAmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AvailabilityAmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityAmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityAmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/AvailabilityAm/Create",
            Update = "Northwind/AvailabilityAm/Update",
            Delete = "Northwind/AvailabilityAm/Delete",
            Retrieve = "Northwind/AvailabilityAm/Retrieve",
            List = "Northwind/AvailabilityAm/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AvailabilityAmService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

