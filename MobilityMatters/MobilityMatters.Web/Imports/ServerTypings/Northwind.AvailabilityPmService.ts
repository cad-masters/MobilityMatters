namespace MobilityMatters.Northwind {
    export namespace AvailabilityPmService {
        export const baseUrl = 'Northwind/AvailabilityPm';

        export declare function Create(request: Serenity.SaveRequest<AvailabilityPmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AvailabilityPmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityPmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityPmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/AvailabilityPm/Create",
            Update = "Northwind/AvailabilityPm/Update",
            Delete = "Northwind/AvailabilityPm/Delete",
            Retrieve = "Northwind/AvailabilityPm/Retrieve",
            List = "Northwind/AvailabilityPm/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AvailabilityPmService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

