namespace MobilityMatters.Northwind {
    export namespace MailService {
        export const baseUrl = 'Northwind/Mail';

        export declare function Create(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Update(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function Compose(request: MailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export declare const enum Methods {
            Create = "Northwind/Mail/Create",
            Update = "Northwind/Mail/Update",
            Delete = "Northwind/Mail/Delete",
            Retrieve = "Northwind/Mail/Retrieve",
            List = "Northwind/Mail/List",
            Compose = "Northwind/Mail/Compose"
        }

        [
            'Create', 
            'Update', 
            'Delete', 
            'Retrieve', 
            'List', 
            'Compose'
        ].forEach(x => {
            (<any>MailService)[x] = function (r, s, o) {
                return Q.serviceRequest(baseUrl + '/' + x, r, s, o);
            };
        });
    }
}

