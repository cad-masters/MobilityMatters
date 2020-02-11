namespace MobilityMatters.Northwind {
    export namespace AvailabilityAmMultipleService {
        export const baseUrl = 'Northwind/AvailabilityAmMultiple';

        export declare function Create(request: Serenity.SaveRequest<AvailabilityAmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AvailabilityAmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityAmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityAmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/AvailabilityAmMultiple/Create",
            Update = "Northwind/AvailabilityAmMultiple/Update",
            Delete = "Northwind/AvailabilityAmMultiple/Delete",
            Retrieve = "Northwind/AvailabilityAmMultiple/Retrieve",
            List = "Northwind/AvailabilityAmMultiple/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AvailabilityAmMultipleService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

