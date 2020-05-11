namespace MobilityMatters.Northwind {
    export namespace SpecialNeedsMultipleVolunteerService {
        export const baseUrl = 'Northwind/SpecialNeedsMultipleVolunteer';

        export declare function Create(request: Serenity.SaveRequest<SpecialNeedsMultipleVolunteerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<SpecialNeedsMultipleVolunteerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecialNeedsMultipleVolunteerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecialNeedsMultipleVolunteerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/SpecialNeedsMultipleVolunteer/Create",
            Update = "Northwind/SpecialNeedsMultipleVolunteer/Update",
            Delete = "Northwind/SpecialNeedsMultipleVolunteer/Delete",
            Retrieve = "Northwind/SpecialNeedsMultipleVolunteer/Retrieve",
            List = "Northwind/SpecialNeedsMultipleVolunteer/List"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List'
        ].forEach(x => {
            (<any>SpecialNeedsMultipleVolunteerService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

