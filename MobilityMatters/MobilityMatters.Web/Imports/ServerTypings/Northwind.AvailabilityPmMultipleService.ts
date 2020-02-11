namespace MobilityMatters.Northwind {
    export namespace AvailabilityPmMultipleService {
        export const baseUrl = 'Northwind/AvailabilityPmMultiple';

        export declare function Create(request: Serenity.SaveRequest<AvailabilityPmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<AvailabilityPmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityPmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityPmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/AvailabilityPmMultiple/Create",
            Update = "Northwind/AvailabilityPmMultiple/Update",
            Delete = "Northwind/AvailabilityPmMultiple/Delete",
            Retrieve = "Northwind/AvailabilityPmMultiple/Retrieve",
            List = "Northwind/AvailabilityPmMultiple/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>AvailabilityPmMultipleService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

