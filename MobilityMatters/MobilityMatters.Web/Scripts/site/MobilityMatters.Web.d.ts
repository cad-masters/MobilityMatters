/// <reference types="jquery" />
/// <reference types="jqueryui" />
declare namespace MobilityMatters.Administration {
}
declare namespace MobilityMatters.Administration {
    interface LanguageForm {
        LanguageId: Serenity.StringEditor;
        LanguageName: Serenity.StringEditor;
    }
    class LanguageForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Administration {
    interface LanguageRow {
        Id?: number;
        LanguageId?: string;
        LanguageName?: string;
    }
    namespace LanguageRow {
        const idProperty = "Id";
        const nameProperty = "LanguageName";
        const localTextPrefix = "Administration.Language";
        const lookupKey = "Administration.Language";
        function getLookup(): Q.Lookup<LanguageRow>;
        const deletePermission = "Administration:Translation";
        const insertPermission = "Administration:Translation";
        const readPermission = "Administration:Translation";
        const updatePermission = "Administration:Translation";
        const enum Fields {
            Id = "Id",
            LanguageId = "LanguageId",
            LanguageName = "LanguageName"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace LanguageService {
        const baseUrl = "Administration/Language";
        function Create(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<LanguageRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<LanguageRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Language/Create",
            Update = "Administration/Language/Update",
            Delete = "Administration/Language/Delete",
            Retrieve = "Administration/Language/Retrieve",
            List = "Administration/Language/List"
        }
    }
}
declare namespace MobilityMatters.Administration {
}
declare namespace MobilityMatters.Administration {
}
declare namespace MobilityMatters.Administration {
    interface RoleForm {
        RoleName: Serenity.StringEditor;
    }
    class RoleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Administration {
    interface RolePermissionListRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace MobilityMatters.Administration {
    interface RolePermissionListResponse extends Serenity.ListResponse<string> {
    }
}
declare namespace MobilityMatters.Administration {
    interface RolePermissionRow {
        RolePermissionId?: number;
        RoleId?: number;
        PermissionKey?: string;
        RoleRoleName?: string;
    }
    namespace RolePermissionRow {
        const idProperty = "RolePermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.RolePermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RolePermissionId = "RolePermissionId",
            RoleId = "RoleId",
            PermissionKey = "PermissionKey",
            RoleRoleName = "RoleRoleName"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace RolePermissionService {
        const baseUrl = "Administration/RolePermission";
        function Update(request: RolePermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: RolePermissionListRequest, onSuccess?: (response: RolePermissionListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/RolePermission/Update",
            List = "Administration/RolePermission/List"
        }
    }
}
declare namespace MobilityMatters.Administration {
    interface RolePermissionUpdateRequest extends Serenity.ServiceRequest {
        RoleID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: string[];
    }
}
declare namespace MobilityMatters.Administration {
    interface RoleRow {
        RoleId?: number;
        RoleName?: string;
    }
    namespace RoleRow {
        const idProperty = "RoleId";
        const nameProperty = "RoleName";
        const localTextPrefix = "Administration.Role";
        const lookupKey = "Administration.Role";
        function getLookup(): Q.Lookup<RoleRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            RoleId = "RoleId",
            RoleName = "RoleName"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace RoleService {
        const baseUrl = "Administration/Role";
        function Create(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RoleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RoleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/Role/Create",
            Update = "Administration/Role/Update",
            Delete = "Administration/Role/Delete",
            Retrieve = "Administration/Role/Retrieve",
            List = "Administration/Role/List"
        }
    }
}
declare namespace MobilityMatters.Administration {
    interface TranslationItem {
        Key?: string;
        SourceText?: string;
        TargetText?: string;
        CustomText?: string;
    }
}
declare namespace MobilityMatters.Administration {
    interface TranslationListRequest extends Serenity.ListRequest {
        SourceLanguageID?: string;
        TargetLanguageID?: string;
    }
}
declare namespace MobilityMatters.Administration {
    namespace TranslationService {
        const baseUrl = "Administration/Translation";
        function List(request: TranslationListRequest, onSuccess?: (response: Serenity.ListResponse<TranslationItem>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: TranslationUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Administration/Translation/List",
            Update = "Administration/Translation/Update"
        }
    }
}
declare namespace MobilityMatters.Administration {
    interface TranslationUpdateRequest extends Serenity.ServiceRequest {
        TargetLanguageID?: string;
        Translations?: {
            [key: string]: string;
        };
    }
}
declare namespace MobilityMatters.Administration {
}
declare namespace MobilityMatters.Administration {
    interface UserForm {
        Username: Serenity.StringEditor;
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        UserImage: Serenity.ImageUploadEditor;
        Password: Serenity.PasswordEditor;
        PasswordConfirm: Serenity.PasswordEditor;
        Source: Serenity.StringEditor;
    }
    class UserForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Administration {
    interface UserPermissionListRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
    }
}
declare namespace MobilityMatters.Administration {
    interface UserPermissionRow {
        UserPermissionId?: number;
        UserId?: number;
        PermissionKey?: string;
        Granted?: boolean;
        Username?: string;
        User?: string;
    }
    namespace UserPermissionRow {
        const idProperty = "UserPermissionId";
        const nameProperty = "PermissionKey";
        const localTextPrefix = "Administration.UserPermission";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserPermissionId = "UserPermissionId",
            UserId = "UserId",
            PermissionKey = "PermissionKey",
            Granted = "Granted",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace UserPermissionService {
        const baseUrl = "Administration/UserPermission";
        function Update(request: UserPermissionUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<UserPermissionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListRolePermissions(request: UserPermissionListRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function ListPermissionKeys(request: Serenity.ServiceRequest, onSuccess?: (response: Serenity.ListResponse<string>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserPermission/Update",
            List = "Administration/UserPermission/List",
            ListRolePermissions = "Administration/UserPermission/ListRolePermissions",
            ListPermissionKeys = "Administration/UserPermission/ListPermissionKeys"
        }
    }
}
declare namespace MobilityMatters.Administration {
    interface UserPermissionUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Module?: string;
        Submodule?: string;
        Permissions?: UserPermissionRow[];
    }
}
declare namespace MobilityMatters.Administration {
    interface UserRoleListRequest extends Serenity.ServiceRequest {
        UserID?: number;
    }
}
declare namespace MobilityMatters.Administration {
    interface UserRoleListResponse extends Serenity.ListResponse<number> {
    }
}
declare namespace MobilityMatters.Administration {
    interface UserRoleRow {
        UserRoleId?: number;
        UserId?: number;
        RoleId?: number;
        Username?: string;
        User?: string;
    }
    namespace UserRoleRow {
        const idProperty = "UserRoleId";
        const localTextPrefix = "Administration.UserRole";
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserRoleId = "UserRoleId",
            UserId = "UserId",
            RoleId = "RoleId",
            Username = "Username",
            User = "User"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace UserRoleService {
        const baseUrl = "Administration/UserRole";
        function Update(request: UserRoleUpdateRequest, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: UserRoleListRequest, onSuccess?: (response: UserRoleListResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Administration/UserRole/Update",
            List = "Administration/UserRole/List"
        }
    }
}
declare namespace MobilityMatters.Administration {
    interface UserRoleUpdateRequest extends Serenity.ServiceRequest {
        UserID?: number;
        Roles?: number[];
    }
}
declare namespace MobilityMatters.Administration {
    interface UserRow {
        UserId?: number;
        Username?: string;
        Source?: string;
        PasswordHash?: string;
        PasswordSalt?: string;
        DisplayName?: string;
        Email?: string;
        UserImage?: string;
        LastDirectoryUpdate?: string;
        IsActive?: number;
        Password?: string;
        PasswordConfirm?: string;
        InsertUserId?: number;
        InsertDate?: string;
        UpdateUserId?: number;
        UpdateDate?: string;
    }
    namespace UserRow {
        const idProperty = "UserId";
        const isActiveProperty = "IsActive";
        const nameProperty = "Username";
        const localTextPrefix = "Administration.User";
        const lookupKey = "Administration.User";
        function getLookup(): Q.Lookup<UserRow>;
        const deletePermission = "Administration:Security";
        const insertPermission = "Administration:Security";
        const readPermission = "Administration:Security";
        const updatePermission = "Administration:Security";
        const enum Fields {
            UserId = "UserId",
            Username = "Username",
            Source = "Source",
            PasswordHash = "PasswordHash",
            PasswordSalt = "PasswordSalt",
            DisplayName = "DisplayName",
            Email = "Email",
            UserImage = "UserImage",
            LastDirectoryUpdate = "LastDirectoryUpdate",
            IsActive = "IsActive",
            Password = "Password",
            PasswordConfirm = "PasswordConfirm",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            UpdateUserId = "UpdateUserId",
            UpdateDate = "UpdateDate"
        }
    }
}
declare namespace MobilityMatters.Administration {
    namespace UserService {
        const baseUrl = "Administration/User";
        function Create(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<UserRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Undelete(request: Serenity.UndeleteRequest, onSuccess?: (response: Serenity.UndeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<UserRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Administration/User/Create",
            Update = "Administration/User/Update",
            Delete = "Administration/User/Delete",
            Undelete = "Administration/User/Undelete",
            Retrieve = "Administration/User/Retrieve",
            List = "Administration/User/List"
        }
    }
}
declare namespace MobilityMatters.Common {
    interface UserPreferenceRetrieveRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
    }
}
declare namespace MobilityMatters.Common {
    interface UserPreferenceRetrieveResponse extends Serenity.ServiceResponse {
        Value?: string;
    }
}
declare namespace MobilityMatters.Common {
    interface UserPreferenceRow {
        UserPreferenceId?: number;
        UserId?: number;
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
    namespace UserPreferenceRow {
        const idProperty = "UserPreferenceId";
        const nameProperty = "Name";
        const localTextPrefix = "Common.UserPreference";
        const deletePermission = "";
        const insertPermission = "";
        const readPermission = "";
        const updatePermission = "";
        const enum Fields {
            UserPreferenceId = "UserPreferenceId",
            UserId = "UserId",
            PreferenceType = "PreferenceType",
            Name = "Name",
            Value = "Value"
        }
    }
}
declare namespace MobilityMatters.Common {
    namespace UserPreferenceService {
        const baseUrl = "Common/UserPreference";
        function Update(request: UserPreferenceUpdateRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: UserPreferenceRetrieveRequest, onSuccess?: (response: UserPreferenceRetrieveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Update = "Common/UserPreference/Update",
            Retrieve = "Common/UserPreference/Retrieve"
        }
    }
}
declare namespace MobilityMatters.Common {
    interface UserPreferenceUpdateRequest extends Serenity.ServiceRequest {
        PreferenceType?: string;
        Name?: string;
        Value?: string;
    }
}
declare namespace MobilityMatters {
    interface ExcelImportRequest extends Serenity.ServiceRequest {
        FileName?: string;
    }
}
declare namespace MobilityMatters {
    interface ExcelImportResponse extends Serenity.ServiceResponse {
        Inserted?: number;
        Updated?: number;
        ErrorList?: string[];
    }
}
declare namespace MobilityMatters {
    interface GetNextNumberRequest extends Serenity.ServiceRequest {
        Prefix?: string;
        Length?: number;
    }
}
declare namespace MobilityMatters {
    interface GetNextNumberResponse extends Serenity.ServiceResponse {
        Number?: number;
        Serial?: string;
    }
}
declare namespace MobilityMatters.Helpers {
    interface HardcodedValuesForm {
        SomeValue: HardcodedValuesEditor;
    }
    class HardcodedValuesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface ChangePasswordForm {
        OldPassword: Serenity.PasswordEditor;
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ChangePasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface ChangePasswordRequest extends Serenity.ServiceRequest {
        OldPassword?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace MobilityMatters.Membership {
    interface ForgotPasswordForm {
        Email: Serenity.EmailEditor;
    }
    class ForgotPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface ForgotPasswordRequest extends Serenity.ServiceRequest {
        Email?: string;
    }
}
declare namespace MobilityMatters.Membership {
    interface LoginForm {
        Username: Serenity.StringEditor;
        Password: Serenity.PasswordEditor;
    }
    class LoginForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface LoginRequest extends Serenity.ServiceRequest {
        Username?: string;
        Password?: string;
    }
}
declare namespace MobilityMatters.Membership {
    interface ResetPasswordForm {
        NewPassword: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class ResetPasswordForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface ResetPasswordRequest extends Serenity.ServiceRequest {
        Token?: string;
        NewPassword?: string;
        ConfirmPassword?: string;
    }
}
declare namespace MobilityMatters.Membership {
    interface SignUpForm {
        DisplayName: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        ConfirmEmail: Serenity.EmailEditor;
        Password: Serenity.PasswordEditor;
        ConfirmPassword: Serenity.PasswordEditor;
    }
    class SignUpForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Membership {
    interface SignUpRequest extends Serenity.ServiceRequest {
        DisplayName?: string;
        Email?: string;
        Password?: string;
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityAmForm {
        Day: Serenity.StringEditor;
    }
    class AvailabilityAmForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityAmMultipleForm {
        AvailabilityAmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }
    class AvailabilityAmMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityAmMultipleRow {
        AvailabilityAmMultipleId?: number;
        AvailabilityAmid?: number;
        EmployeeId?: number;
    }
    namespace AvailabilityAmMultipleRow {
        const idProperty = "AvailabilityAmMultipleId";
        const localTextPrefix = "Northwind.AvailabilityAmMultiple";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AvailabilityAmMultipleId = "AvailabilityAmMultipleId",
            AvailabilityAmid = "AvailabilityAmid",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace AvailabilityAmMultipleService {
        const baseUrl = "Northwind/AvailabilityAmMultiple";
        function Create(request: Serenity.SaveRequest<AvailabilityAmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvailabilityAmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityAmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityAmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/AvailabilityAmMultiple/Create",
            Update = "Northwind/AvailabilityAmMultiple/Update",
            Delete = "Northwind/AvailabilityAmMultiple/Delete",
            Retrieve = "Northwind/AvailabilityAmMultiple/Retrieve",
            List = "Northwind/AvailabilityAmMultiple/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityAmRow {
        AvailabilityAmid?: number;
        Day?: string;
    }
    namespace AvailabilityAmRow {
        const idProperty = "AvailabilityAmid";
        const nameProperty = "Day";
        const localTextPrefix = "Northwind.AvailabilityAm";
        const lookupKey = "Northwind.AvailabilityAM";
        function getLookup(): Q.Lookup<AvailabilityAmRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AvailabilityAmid = "AvailabilityAmid",
            Day = "Day"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace AvailabilityAmService {
        const baseUrl = "Northwind/AvailabilityAm";
        function Create(request: Serenity.SaveRequest<AvailabilityAmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvailabilityAmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityAmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityAmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/AvailabilityAm/Create",
            Update = "Northwind/AvailabilityAm/Update",
            Delete = "Northwind/AvailabilityAm/Delete",
            Retrieve = "Northwind/AvailabilityAm/Retrieve",
            List = "Northwind/AvailabilityAm/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityPmForm {
        Day: Serenity.StringEditor;
    }
    class AvailabilityPmForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityPmMultipleForm {
        AvailabilityPmid: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }
    class AvailabilityPmMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityPmMultipleRow {
        AvailabilityPmMultipleId?: number;
        AvailabilityPmid?: number;
        EmployeeId?: number;
    }
    namespace AvailabilityPmMultipleRow {
        const idProperty = "AvailabilityPmMultipleId";
        const localTextPrefix = "Northwind.AvailabilityPmMultiple";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AvailabilityPmMultipleId = "AvailabilityPmMultipleId",
            AvailabilityPmid = "AvailabilityPmid",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace AvailabilityPmMultipleService {
        const baseUrl = "Northwind/AvailabilityPmMultiple";
        function Create(request: Serenity.SaveRequest<AvailabilityPmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvailabilityPmMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityPmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityPmMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/AvailabilityPmMultiple/Create",
            Update = "Northwind/AvailabilityPmMultiple/Update",
            Delete = "Northwind/AvailabilityPmMultiple/Delete",
            Retrieve = "Northwind/AvailabilityPmMultiple/Retrieve",
            List = "Northwind/AvailabilityPmMultiple/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface AvailabilityPmRow {
        AvailabilityPmid?: number;
        Day?: string;
    }
    namespace AvailabilityPmRow {
        const idProperty = "AvailabilityPmid";
        const nameProperty = "Day";
        const localTextPrefix = "Northwind.AvailabilityPm";
        const lookupKey = "Northwind.AvailabilityPM";
        function getLookup(): Q.Lookup<AvailabilityPmRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AvailabilityPmid = "AvailabilityPmid",
            Day = "Day"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace AvailabilityPmService {
        const baseUrl = "Northwind/AvailabilityPm";
        function Create(request: Serenity.SaveRequest<AvailabilityPmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<AvailabilityPmRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<AvailabilityPmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<AvailabilityPmRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/AvailabilityPm/Create",
            Update = "Northwind/AvailabilityPm/Update",
            Delete = "Northwind/AvailabilityPm/Delete",
            Retrieve = "Northwind/AvailabilityPm/Retrieve",
            List = "Northwind/AvailabilityPm/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface CategoryForm {
        CategoryName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }
    class CategoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface CategoryLangRow {
        Id?: number;
        CategoryId?: number;
        LanguageId?: number;
        CategoryName?: string;
        Description?: string;
    }
    namespace CategoryLangRow {
        const idProperty = "Id";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.CategoryLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            CategoryId = "CategoryId",
            LanguageId = "LanguageId",
            CategoryName = "CategoryName",
            Description = "Description"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace CategoryLangService {
        const baseUrl = "Northwind/CategoryLang";
        function Create(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CategoryLang/Create",
            Update = "Northwind/CategoryLang/Update",
            Delete = "Northwind/CategoryLang/Delete",
            Retrieve = "Northwind/CategoryLang/Retrieve",
            List = "Northwind/CategoryLang/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CategoryRow {
        CategoryID?: number;
        CategoryName?: string;
        Description?: string;
        Picture?: number[];
    }
    namespace CategoryRow {
        const idProperty = "CategoryID";
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.Category";
        const lookupKey = "Northwind.Category";
        function getLookup(): Q.Lookup<CategoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryID = "CategoryID",
            CategoryName = "CategoryName",
            Description = "Description",
            Picture = "Picture"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace CategoryService {
        const baseUrl = "Northwind/Category";
        function Create(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CategoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Category/Create",
            Update = "Northwind/Category/Update",
            Delete = "Northwind/Category/Delete",
            Retrieve = "Northwind/Category/Retrieve",
            List = "Northwind/Category/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface CitiesForm {
        Name: Serenity.StringEditor;
    }
    class CitiesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface CitiesMultiForm {
        CityId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }
    class CitiesMultiForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface CitiesMultiRow {
        CitiesMultiId?: number;
        CityId?: number;
        EmployeeId?: number;
        CityName?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        EmployeeOnVacation?: boolean;
        EmployeeEmail?: string;
        EmployeeDriversLicense?: string;
        EmployeeDriversLicenseExp?: string;
        EmployeeInsurance?: string;
        EmployeeInsuranceExp?: string;
        EmployeeLicensePlate?: string;
        EmployeeLicensePlateExp?: string;
        EmployeeVehicleMake?: string;
        EmployeeVehicleModel?: string;
        EmployeeSpecialNeedsId?: number;
        EmployeeGender?: string;
        EmployeeSmoker?: boolean;
    }
    namespace CitiesMultiRow {
        const idProperty = "CitiesMultiId";
        const localTextPrefix = "Northwind.CitiesMulti";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CitiesMultiId = "CitiesMultiId",
            CityId = "CityId",
            EmployeeId = "EmployeeId",
            CityName = "CityName",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            EmployeeOnVacation = "EmployeeOnVacation",
            EmployeeEmail = "EmployeeEmail",
            EmployeeDriversLicense = "EmployeeDriversLicense",
            EmployeeDriversLicenseExp = "EmployeeDriversLicenseExp",
            EmployeeInsurance = "EmployeeInsurance",
            EmployeeInsuranceExp = "EmployeeInsuranceExp",
            EmployeeLicensePlate = "EmployeeLicensePlate",
            EmployeeLicensePlateExp = "EmployeeLicensePlateExp",
            EmployeeVehicleMake = "EmployeeVehicleMake",
            EmployeeVehicleModel = "EmployeeVehicleModel",
            EmployeeSpecialNeedsId = "EmployeeSpecialNeedsId",
            EmployeeGender = "EmployeeGender",
            EmployeeSmoker = "EmployeeSmoker"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace CitiesMultiService {
        const baseUrl = "Northwind/CitiesMulti";
        function Create(request: Serenity.SaveRequest<CitiesMultiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesMultiRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesMultiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesMultiRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/CitiesMulti/Create",
            Update = "Northwind/CitiesMulti/Update",
            Delete = "Northwind/CitiesMulti/Delete",
            Retrieve = "Northwind/CitiesMulti/Retrieve",
            List = "Northwind/CitiesMulti/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CitiesRow {
        CityId?: number;
        Name?: string;
    }
    namespace CitiesRow {
        const idProperty = "CityId";
        const nameProperty = "Name";
        const localTextPrefix = "Northwind.Cities";
        const lookupKey = "Northwind.Cities";
        function getLookup(): Q.Lookup<CitiesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            CityId = "CityId",
            Name = "Name"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace CitiesService {
        const baseUrl = "Northwind/Cities";
        function Create(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CitiesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CitiesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Cities/Create",
            Update = "Northwind/Cities/Update",
            Delete = "Northwind/Cities/Delete",
            Retrieve = "Northwind/Cities/Retrieve",
            List = "Northwind/Cities/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface CustomerCustomerDemoRow {
        ID?: number;
        CustomerID?: string;
        CustomerTypeID?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerTypeCustomerDesc?: string;
    }
    namespace CustomerCustomerDemoRow {
        const idProperty = "ID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.CustomerCustomerDemo";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CustomerTypeID = "CustomerTypeID",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerContactTitle = "CustomerContactTitle",
            CustomerAddress = "CustomerAddress",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerPostalCode = "CustomerPostalCode",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerFax = "CustomerFax",
            CustomerTypeCustomerDesc = "CustomerTypeCustomerDesc"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerDemographicRow {
        ID?: number;
        CustomerTypeID?: string;
        CustomerDesc?: string;
    }
    namespace CustomerDemographicRow {
        const idProperty = "ID";
        const nameProperty = "CustomerTypeID";
        const localTextPrefix = "Northwind.CustomerDemographic";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            CustomerTypeID = "CustomerTypeID",
            CustomerDesc = "CustomerDesc"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerDetailsRow {
        Id?: number;
        LastContactDate?: string;
        LastContactedBy?: number;
        Email?: string;
        EmergencyName?: string;
        EmergencyPhone?: string;
        EmergencyName2?: string;
        EmergencyPhone2?: string;
        EmergencyRelation?: string;
        EmergencyRelation2?: string;
        ReferralSource?: string;
        Gender?: string;
        LivingWith?: string;
        TEMP?: string;
        PreferredHospital?: string;
        Medical?: string;
        Dental?: string;
        Groceries?: string;
        OtherTransport?: string;
        LastContactedByLastName?: string;
        LastContactedByFirstName?: string;
        LastContactedByTitle?: string;
        LastContactedByTitleOfCourtesy?: string;
        LastContactedByBirthDate?: string;
        LastContactedByHireDate?: string;
        LastContactedByAddress?: string;
        LastContactedByCity?: string;
        LastContactedByRegion?: string;
        LastContactedByPostalCode?: string;
        LastContactedByCountry?: string;
        LastContactedByHomePhone?: string;
        LastContactedByExtension?: string;
        LastContactedByPhoto?: number[];
        LastContactedByNotes?: string;
        LastContactedByReportsTo?: number;
        LastContactedByPhotoPath?: string;
    }
    namespace CustomerDetailsRow {
        const idProperty = "Id";
        const nameProperty = "Email";
        const localTextPrefix = "Northwind.CustomerDetails";
        const lookupKey = "Northwind.CustomerDetails";
        function getLookup(): Q.Lookup<CustomerDetailsRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            LastContactDate = "LastContactDate",
            LastContactedBy = "LastContactedBy",
            Email = "Email",
            EmergencyName = "EmergencyName",
            EmergencyPhone = "EmergencyPhone",
            EmergencyName2 = "EmergencyName2",
            EmergencyPhone2 = "EmergencyPhone2",
            EmergencyRelation = "EmergencyRelation",
            EmergencyRelation2 = "EmergencyRelation2",
            ReferralSource = "ReferralSource",
            Gender = "Gender",
            LivingWith = "LivingWith",
            TEMP = "TEMP",
            PreferredHospital = "PreferredHospital",
            Medical = "Medical",
            Dental = "Dental",
            Groceries = "Groceries",
            OtherTransport = "OtherTransport",
            LastContactedByLastName = "LastContactedByLastName",
            LastContactedByFirstName = "LastContactedByFirstName",
            LastContactedByTitle = "LastContactedByTitle",
            LastContactedByTitleOfCourtesy = "LastContactedByTitleOfCourtesy",
            LastContactedByBirthDate = "LastContactedByBirthDate",
            LastContactedByHireDate = "LastContactedByHireDate",
            LastContactedByAddress = "LastContactedByAddress",
            LastContactedByCity = "LastContactedByCity",
            LastContactedByRegion = "LastContactedByRegion",
            LastContactedByPostalCode = "LastContactedByPostalCode",
            LastContactedByCountry = "LastContactedByCountry",
            LastContactedByHomePhone = "LastContactedByHomePhone",
            LastContactedByExtension = "LastContactedByExtension",
            LastContactedByPhoto = "LastContactedByPhoto",
            LastContactedByNotes = "LastContactedByNotes",
            LastContactedByReportsTo = "LastContactedByReportsTo",
            LastContactedByPhotoPath = "LastContactedByPhotoPath"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerForm {
        CustomerID: Serenity.StringEditor;
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ProgramList: Serenity.LookupEditor;
        Program: Serenity.LookupEditor;
        ProgramOption: Serenity.LookupEditor;
        ReferralSource: Serenity.StringEditor;
        TEMP: Serenity.BooleanEditor;
        Active: Serenity.BooleanEditor;
        Phone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        EmergencyName: Serenity.StringEditor;
        EmergencyPhone: Serenity.StringEditor;
        EmergencyRelation: Serenity.StringEditor;
        EmergencyName2: Serenity.StringEditor;
        EmergencyPhone2: Serenity.StringEditor;
        EmergencyRelation2: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Country: Serenity.LookupEditor;
        City: Serenity.LookupEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Residence: Serenity.LookupEditor;
        LivingWith: Serenity.StringEditor;
        NoteList: NotesEditor;
        Gender: Helpers.HardcodedValuesGenderEditor;
        BirthDate: Serenity.DateEditor;
        AgeCalc: Serenity.IntegerEditor;
        Race: Serenity.StringEditor;
        Income: Serenity.StringEditor;
        PLanguage: Serenity.StringEditor;
        SpecialNeedsList: Serenity.LookupEditor;
        SpecialNeedsPlainText: Serenity.TextAreaEditor;
        DNR: Serenity.LookupEditor;
        Radio: Serenity.BooleanEditor;
        EIO: Serenity.BooleanEditor;
        PreferredHospital: Serenity.StringEditor;
        Smoker: Serenity.BooleanEditor;
        Medical: Serenity.StringEditor;
        Dental: Serenity.StringEditor;
        Groceries: Serenity.StringEditor;
        OtherTransport: Serenity.StringEditor;
    }
    class CustomerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerGrossSalesRow {
        CustomerId?: string;
        ContactName?: string;
        ProductId?: number;
        ProductName?: string;
        GrossAmount?: number;
    }
    namespace CustomerGrossSalesRow {
        const nameProperty = "ContactName";
        const localTextPrefix = "Northwind.CustomerGrossSales";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CustomerId = "CustomerId",
            ContactName = "ContactName",
            ProductId = "ProductId",
            ProductName = "ProductName",
            GrossAmount = "GrossAmount"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerRepresentativesRow {
        RepresentativeId?: number;
        CustomerId?: number;
        EmployeeId?: number;
    }
    namespace CustomerRepresentativesRow {
        const idProperty = "RepresentativeId";
        const localTextPrefix = "Northwind.CustomerRepresentatives";
        const deletePermission = "Northwind:Customer:View";
        const insertPermission = "Northwind:Customer:View";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:View";
        const enum Fields {
            RepresentativeId = "RepresentativeId",
            CustomerId = "CustomerId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface CustomerRow {
        ID?: number;
        CustomerID?: string;
        CompanyName?: string;
        ContactName?: string;
        FullName?: string;
        PLanguage?: string;
        Address?: string;
        City?: string;
        Region?: string;
        Race?: string;
        Income?: string;
        PostalCode?: string;
        DNR?: string;
        Radio?: boolean;
        Country?: string;
        County?: RiderByCounty;
        Phone?: string;
        AltPhone?: string;
        PreferredHospital?: string;
        Medical?: string;
        Dental?: string;
        Groceries?: string;
        OtherTransport?: string;
        Program?: string;
        ProgramOption?: string;
        TEMP?: boolean;
        StartDate?: string;
        EndDate?: string;
        WhyEnding?: string;
        EIO?: boolean;
        Smoker?: boolean;
        Active?: boolean;
        LivingWith?: string;
        Residence?: string;
        ReferralSource?: string;
        BirthDate?: string;
        NoteList?: NoteRow[];
        Representatives?: number[];
        SpecialNeedsList?: number[];
        ProgramList?: number[];
        Email?: string;
        ActiveStr?: string;
        Gender?: string;
        EmergencyName?: string;
        EmergencyPhone?: string;
        EmergencyName2?: string;
        EmergencyPhone2?: string;
        EmergencyRelation2?: string;
        EmergencyRelation?: string;
        AgeCalc?: number;
        DateOfLastTrip?: string;
        SpecialNeedsPlainText?: string;
        SpecialConditionsDirections?: string;
    }
    namespace CustomerRow {
        const idProperty = "ID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Customer";
        const lookupKey = "Northwind.Customer";
        function getLookup(): Q.Lookup<CustomerRow>;
        const deletePermission = "Northwind:Customer:Delete";
        const insertPermission = "Northwind:Customer:Modify";
        const readPermission = "Northwind:Customer:View";
        const updatePermission = "Northwind:Customer:Modify";
        const enum Fields {
            ID = "ID",
            CustomerID = "CustomerID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            FullName = "FullName",
            PLanguage = "PLanguage",
            Address = "Address",
            City = "City",
            Region = "Region",
            Race = "Race",
            Income = "Income",
            PostalCode = "PostalCode",
            DNR = "DNR",
            Radio = "Radio",
            Country = "Country",
            County = "County",
            Phone = "Phone",
            AltPhone = "AltPhone",
            PreferredHospital = "PreferredHospital",
            Medical = "Medical",
            Dental = "Dental",
            Groceries = "Groceries",
            OtherTransport = "OtherTransport",
            Program = "Program",
            ProgramOption = "ProgramOption",
            TEMP = "TEMP",
            StartDate = "StartDate",
            EndDate = "EndDate",
            WhyEnding = "WhyEnding",
            EIO = "EIO",
            Smoker = "Smoker",
            Active = "Active",
            LivingWith = "LivingWith",
            Residence = "Residence",
            ReferralSource = "ReferralSource",
            BirthDate = "BirthDate",
            NoteList = "NoteList",
            Representatives = "Representatives",
            SpecialNeedsList = "SpecialNeedsList",
            ProgramList = "ProgramList",
            Email = "Email",
            ActiveStr = "ActiveStr",
            Gender = "Gender",
            EmergencyName = "EmergencyName",
            EmergencyPhone = "EmergencyPhone",
            EmergencyName2 = "EmergencyName2",
            EmergencyPhone2 = "EmergencyPhone2",
            EmergencyRelation2 = "EmergencyRelation2",
            EmergencyRelation = "EmergencyRelation",
            AgeCalc = "AgeCalc",
            DateOfLastTrip = "DateOfLastTrip",
            SpecialNeedsPlainText = "SpecialNeedsPlainText",
            SpecialConditionsDirections = "SpecialConditionsDirections"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace CustomerService {
        const baseUrl = "Northwind/Customer";
        function Create(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<CustomerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetNextNumber(request: GetNextNumberRequest, onSuccess?: (response: GetNextNumberResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<CustomerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Customer/Create",
            Update = "Northwind/Customer/Update",
            Delete = "Northwind/Customer/Delete",
            GetNextNumber = "Northwind/Customer/GetNextNumber",
            Retrieve = "Northwind/Customer/Retrieve",
            List = "Northwind/Customer/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface Data {
        Value?: number;
        Text?: string;
    }
}
declare namespace MobilityMatters.Northwind {
    interface DistanceMatrixRequest extends Serenity.ServiceRequest {
        Source?: string;
        Destination?: string;
    }
}
declare namespace MobilityMatters.Northwind {
    interface DistanceMatrixRequest2 extends Serenity.ServiceRequest {
        Source2?: string;
        Destination2?: string;
    }
}
declare namespace MobilityMatters.Northwind {
    interface DistanceMatrixResponse extends Serenity.ServiceResponse {
        Status?: string;
        DestinationAddresses?: string[];
        OriginAddresses?: string[];
        Rows?: Row[];
    }
}
declare namespace MobilityMatters.Northwind {
    interface DistanceMatrixResponse2 extends Serenity.ServiceResponse {
        Status?: string;
        DestinationAddresses?: string[];
        Destination2Addresses?: string[];
        Rows?: Row[];
    }
}
declare namespace MobilityMatters.Northwind {
    interface Element {
        Status?: string;
        Duration?: Data;
        Distance?: Data;
    }
}
declare namespace MobilityMatters.Northwind {
    interface EmployeeRow {
        EmployeeID?: number;
        LastName?: string;
        FirstName?: string;
        FullName?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        ReportsToFullName?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsToReportsTo?: number;
        ReportsToPhotoPath?: string;
        Gender?: Gender;
    }
    namespace EmployeeRow {
        const idProperty = "EmployeeID";
        const nameProperty = "FullName";
        const localTextPrefix = "Northwind.Employee";
        const lookupKey = "Northwind.Employee";
        function getLookup(): Q.Lookup<EmployeeRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            LastName = "LastName",
            FirstName = "FirstName",
            FullName = "FullName",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            ReportsToFullName = "ReportsToFullName",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsToReportsTo = "ReportsToReportsTo",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            Gender = "Gender"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface EmployeeTerritoryRow {
        EmployeeID?: number;
        TerritoryID?: string;
        EmployeeLastName?: string;
        EmployeeFirstName?: string;
        EmployeeTitle?: string;
        EmployeeTitleOfCourtesy?: string;
        EmployeeBirthDate?: string;
        EmployeeHireDate?: string;
        EmployeeAddress?: string;
        EmployeeCity?: string;
        EmployeeRegion?: string;
        EmployeePostalCode?: string;
        EmployeeCountry?: string;
        EmployeeHomePhone?: string;
        EmployeeExtension?: string;
        EmployeePhoto?: number[];
        EmployeeNotes?: string;
        EmployeeReportsTo?: number;
        EmployeePhotoPath?: string;
        TerritoryTerritoryDescription?: string;
        TerritoryRegionID?: number;
    }
    namespace EmployeeTerritoryRow {
        const idProperty = "EmployeeID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.EmployeeTerritory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            EmployeeID = "EmployeeID",
            TerritoryID = "TerritoryID",
            EmployeeLastName = "EmployeeLastName",
            EmployeeFirstName = "EmployeeFirstName",
            EmployeeTitle = "EmployeeTitle",
            EmployeeTitleOfCourtesy = "EmployeeTitleOfCourtesy",
            EmployeeBirthDate = "EmployeeBirthDate",
            EmployeeHireDate = "EmployeeHireDate",
            EmployeeAddress = "EmployeeAddress",
            EmployeeCity = "EmployeeCity",
            EmployeeRegion = "EmployeeRegion",
            EmployeePostalCode = "EmployeePostalCode",
            EmployeeCountry = "EmployeeCountry",
            EmployeeHomePhone = "EmployeeHomePhone",
            EmployeeExtension = "EmployeeExtension",
            EmployeePhoto = "EmployeePhoto",
            EmployeeNotes = "EmployeeNotes",
            EmployeeReportsTo = "EmployeeReportsTo",
            EmployeePhotoPath = "EmployeePhotoPath",
            TerritoryTerritoryDescription = "TerritoryTerritoryDescription",
            TerritoryRegionID = "TerritoryRegionID"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface EmployeesForm {
        Title: Serenity.LookupEditor;
        TitleOfCourtesy: Serenity.StringEditor;
        OnVacation: Serenity.BooleanEditor;
        Inactive: Serenity.BooleanEditor;
        LastName: Serenity.StringEditor;
        FirstName: Serenity.StringEditor;
        HomePhone: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        EmergencyName: Serenity.StringEditor;
        EmergencyPhone: Serenity.StringEditor;
        COVIDResults: Serenity.StringEditor;
        COVIDTestDate: Serenity.DateEditor;
        Address: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        BirthDate: Serenity.DateEditor;
        Gender: Helpers.HardcodedValuesGenderEditor;
        Smoker: Serenity.BooleanEditor;
        Language: Serenity.StringEditor;
        DriversLicense: Serenity.StringEditor;
        DriversLicenseExp: Serenity.DateEditor;
        LicensePlate: Serenity.StringEditor;
        LicensePlateExp: Serenity.DateEditor;
        Insurance: Serenity.StringEditor;
        InsuranceExp: Serenity.DateEditor;
        VehicleMake: Serenity.StringEditor;
        VehicleModel: Serenity.StringEditor;
        VehicleMake2: Serenity.StringEditor;
        VehicleModel2: Serenity.StringEditor;
        DMVClearance: Serenity.BooleanEditor;
        PoliceClearance: Serenity.BooleanEditor;
        ReferralSource: Serenity.StringEditor;
        TrainingDate: Serenity.DateEditor;
        HireDate: Serenity.DateEditor;
        EndDate: Serenity.DateEditor;
        WhyEnding: Serenity.StringEditor;
        CitiesList: Serenity.LookupEditor;
        AvailabilityAMList: Serenity.LookupEditor;
        AvailabilityPMList: Serenity.LookupEditor;
        NotesPlainText: Serenity.TextAreaEditor;
    }
    class EmployeesForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface EmployeesRow {
        EmployeeId?: number;
        LastName?: string;
        FirstName?: string;
        Email?: string;
        Title?: string;
        TitleOfCourtesy?: string;
        BirthDate?: string;
        HireDate?: string;
        EndDate?: string;
        WhyEnding?: string;
        TrainingDate?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        HomePhone?: string;
        Extension?: string;
        Photo?: number[];
        Notes?: string;
        VolunteerRegion?: string;
        NotesPlainText?: string;
        ReportsTo?: number;
        PhotoPath?: string;
        OnVacation?: boolean;
        Inactive?: boolean;
        InactiveStr?: string;
        DriversLicense?: string;
        DriversLicenseExp?: string;
        LicensePlate?: string;
        LicensePlateExp?: string;
        Insurance?: string;
        InsuranceExp?: string;
        COVIDTestDate?: string;
        COVIDResults?: string;
        VehicleMake?: string;
        VehicleModel?: string;
        VehicleMake2?: string;
        VehicleModel2?: string;
        SpecialNeedsList?: number[];
        CitiesList?: number[];
        AvailabilityAMList?: number[];
        AvailabilityPMList?: number[];
        Gender?: string;
        Smoker?: boolean;
        DMVClearance?: boolean;
        PoliceClearance?: boolean;
        ReferralSource?: string;
        Language?: string;
        EmergencyName?: string;
        EmergencyPhone?: string;
        ReportsToLastName?: string;
        ReportsToFirstName?: string;
        ReportsToTitle?: string;
        ReportsToTitleOfCourtesy?: string;
        ReportsToBirthDate?: string;
        ReportsToHireDate?: string;
        ReportsToAddress?: string;
        ReportsToCity?: string;
        ReportsToRegion?: string;
        ReportsToPostalCode?: string;
        ReportsToCountry?: string;
        ReportsToHomePhone?: string;
        ReportsToExtension?: string;
        ReportsToPhoto?: number[];
        ReportsToNotes?: string;
        ReportsTo1?: number;
        ReportsToPhotoPath?: string;
        DateOfLastTrip?: string;
        ReturnDate?: string;
    }
    namespace EmployeesRow {
        const idProperty = "EmployeeId";
        const nameProperty = "LastName";
        const localTextPrefix = "Northwind.Employees";
        const lookupKey = "Northwind.Employees";
        function getLookup(): Q.Lookup<EmployeesRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            EmployeeId = "EmployeeId",
            LastName = "LastName",
            FirstName = "FirstName",
            Email = "Email",
            Title = "Title",
            TitleOfCourtesy = "TitleOfCourtesy",
            BirthDate = "BirthDate",
            HireDate = "HireDate",
            EndDate = "EndDate",
            WhyEnding = "WhyEnding",
            TrainingDate = "TrainingDate",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            HomePhone = "HomePhone",
            Extension = "Extension",
            Photo = "Photo",
            Notes = "Notes",
            VolunteerRegion = "VolunteerRegion",
            NotesPlainText = "NotesPlainText",
            ReportsTo = "ReportsTo",
            PhotoPath = "PhotoPath",
            OnVacation = "OnVacation",
            Inactive = "Inactive",
            InactiveStr = "InactiveStr",
            DriversLicense = "DriversLicense",
            DriversLicenseExp = "DriversLicenseExp",
            LicensePlate = "LicensePlate",
            LicensePlateExp = "LicensePlateExp",
            Insurance = "Insurance",
            InsuranceExp = "InsuranceExp",
            COVIDTestDate = "COVIDTestDate",
            COVIDResults = "COVIDResults",
            VehicleMake = "VehicleMake",
            VehicleModel = "VehicleModel",
            VehicleMake2 = "VehicleMake2",
            VehicleModel2 = "VehicleModel2",
            SpecialNeedsList = "SpecialNeedsList",
            CitiesList = "CitiesList",
            AvailabilityAMList = "AvailabilityAMList",
            AvailabilityPMList = "AvailabilityPMList",
            Gender = "Gender",
            Smoker = "Smoker",
            DMVClearance = "DMVClearance",
            PoliceClearance = "PoliceClearance",
            ReferralSource = "ReferralSource",
            Language = "Language",
            EmergencyName = "EmergencyName",
            EmergencyPhone = "EmergencyPhone",
            ReportsToLastName = "ReportsToLastName",
            ReportsToFirstName = "ReportsToFirstName",
            ReportsToTitle = "ReportsToTitle",
            ReportsToTitleOfCourtesy = "ReportsToTitleOfCourtesy",
            ReportsToBirthDate = "ReportsToBirthDate",
            ReportsToHireDate = "ReportsToHireDate",
            ReportsToAddress = "ReportsToAddress",
            ReportsToCity = "ReportsToCity",
            ReportsToRegion = "ReportsToRegion",
            ReportsToPostalCode = "ReportsToPostalCode",
            ReportsToCountry = "ReportsToCountry",
            ReportsToHomePhone = "ReportsToHomePhone",
            ReportsToExtension = "ReportsToExtension",
            ReportsToPhoto = "ReportsToPhoto",
            ReportsToNotes = "ReportsToNotes",
            ReportsTo1 = "ReportsTo1",
            ReportsToPhotoPath = "ReportsToPhotoPath",
            DateOfLastTrip = "DateOfLastTrip",
            ReturnDate = "ReturnDate"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace EmployeesService {
        const baseUrl = "Northwind/Employees";
        function Create(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<EmployeesRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<EmployeesRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Employees/Create",
            Update = "Northwind/Employees/Update",
            Delete = "Northwind/Employees/Delete",
            Retrieve = "Northwind/Employees/Retrieve",
            List = "Northwind/Employees/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    enum Gender {
        Male = 1,
        Female = 2
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface MailAttachmentsForm {
        MailId: Serenity.IntegerEditor;
        MimeType: Serenity.StringEditor;
        Size: Serenity.IntegerEditor;
        FilePath: Serenity.StringEditor;
        OriginalFileName: Serenity.StringEditor;
        CreatedBy: Serenity.IntegerEditor;
        CreatedOn: Serenity.DateEditor;
        ModifiedBy: Serenity.IntegerEditor;
        ModifiedOn: Serenity.DateEditor;
    }
    class MailAttachmentsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailAttachmentsRow {
        AttachmentId?: number;
        MailId?: number;
        MimeType?: string;
        Size?: number;
        FilePath?: string;
        OriginalFileName?: string;
        CreatedBy?: number;
        CreatedOn?: string;
        ModifiedBy?: number;
        ModifiedOn?: string;
        MailUid?: string;
        MailSubject?: string;
        MailBody?: string;
        MailDirection?: string;
        MailTo?: string;
        MailCc?: string;
        MailFrom?: string;
        MailSendDateTime?: string;
        MailReceivedDate?: string;
        MailCreatedBy?: number;
        MailCreatedOn?: string;
        MailModifiedBy?: number;
        MailModifiedOn?: string;
    }
    namespace MailAttachmentsRow {
        const idProperty = "AttachmentId";
        const nameProperty = "MimeType";
        const localTextPrefix = "Northwind.MailAttachments";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            AttachmentId = "AttachmentId",
            MailId = "MailId",
            MimeType = "MimeType",
            Size = "Size",
            FilePath = "FilePath",
            OriginalFileName = "OriginalFileName",
            CreatedBy = "CreatedBy",
            CreatedOn = "CreatedOn",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn",
            MailUid = "MailUid",
            MailSubject = "MailSubject",
            MailBody = "MailBody",
            MailDirection = "MailDirection",
            MailTo = "MailTo",
            MailCc = "MailCc",
            MailFrom = "MailFrom",
            MailSendDateTime = "MailSendDateTime",
            MailReceivedDate = "MailReceivedDate",
            MailCreatedBy = "MailCreatedBy",
            MailCreatedOn = "MailCreatedOn",
            MailModifiedBy = "MailModifiedBy",
            MailModifiedOn = "MailModifiedOn"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace MailAttachmentsService {
        const baseUrl = "Northwind/MailAttachments";
        function Create(request: Serenity.SaveRequest<MailAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MailAttachmentsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MailAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MailAttachmentsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/MailAttachments/Create",
            Update = "Northwind/MailAttachments/Update",
            Delete = "Northwind/MailAttachments/Delete",
            Retrieve = "Northwind/MailAttachments/Retrieve",
            List = "Northwind/MailAttachments/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface MailComposeForm {
        To: Serenity.LookupEditor;
        Cc: Serenity.LookupEditor;
        Subject: Serenity.StringEditor;
        BodyHtml: MailContentEditor;
        Attachments: Serenity.MultipleImageUploadEditor;
        ReplyToMailId: Serenity.IntegerEditor;
    }
    class MailComposeForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailComposeRequest extends Serenity.ServiceRequest {
        To?: number[];
        Cc?: number[];
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToMailId?: number;
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailForm {
        From: Serenity.StringEditor;
        To: Serenity.StringEditor;
        Cc: Serenity.StringEditor;
        Subject: Serenity.StringEditor;
        Body: MailBodyViewer;
        Attachments: Serenity.MultipleImageUploadEditor;
        SendDateTime: Serenity.DateEditor;
        IsSent: Serenity.BooleanEditor;
        ErrorMessage: Serenity.StringEditor;
        ReceivedDate: Serenity.DateEditor;
    }
    class MailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailRow {
        MailId?: number;
        Uid?: string;
        Subject?: string;
        Body?: string;
        Direction?: string;
        To?: string;
        Cc?: string;
        From?: string;
        SendDateTime?: string;
        IsSent?: boolean;
        ErrorMessage?: string;
        ReceivedDate?: string;
        CreatedBy?: number;
        CreatedOn?: string;
        ModifiedBy?: number;
        ModifiedOn?: string;
        Attachments?: string;
    }
    namespace MailRow {
        const idProperty = "MailId";
        const nameProperty = "Uid";
        const localTextPrefix = "Northwind.Mail";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            MailId = "MailId",
            Uid = "Uid",
            Subject = "Subject",
            Body = "Body",
            Direction = "Direction",
            To = "To",
            Cc = "Cc",
            From = "From",
            SendDateTime = "SendDateTime",
            IsSent = "IsSent",
            ErrorMessage = "ErrorMessage",
            ReceivedDate = "ReceivedDate",
            CreatedBy = "CreatedBy",
            CreatedOn = "CreatedOn",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn",
            Attachments = "Attachments"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace MailService {
        const baseUrl = "Northwind/Mail";
        function Create(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<MailRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<MailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Compose(request: MailComposeRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Mail/Create",
            Update = "Northwind/Mail/Update",
            Delete = "Northwind/Mail/Delete",
            Retrieve = "Northwind/Mail/Retrieve",
            List = "Northwind/Mail/List",
            Compose = "Northwind/Mail/Compose"
        }
    }
}
declare namespace Northwind.MobilityMatters {
    interface CustomerListRequest extends Serenity.ListRequest {
        Programs?: number[];
    }
}
declare namespace MobilityMatters.Northwind {
    interface NoteRow {
        NoteId?: number;
        EntityType?: string;
        EntityId?: number;
        Text?: string;
        InsertUserId?: number;
        InsertDate?: string;
        InsertUserDisplayName?: string;
    }
    namespace NoteRow {
        const idProperty = "NoteId";
        const nameProperty = "EntityType";
        const localTextPrefix = "Northwind.Note";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            NoteId = "NoteId",
            EntityType = "EntityType",
            EntityId = "EntityId",
            Text = "Text",
            InsertUserId = "InsertUserId",
            InsertDate = "InsertDate",
            InsertUserDisplayName = "InsertUserDisplayName"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface OrderDetailForm {
        ProductID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Discount: Serenity.DecimalEditor;
    }
    class OrderDetailForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface OrderDetailRow {
        DetailID?: number;
        OrderID?: number;
        ProductID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Discount?: number;
        OrderCustomerID?: string;
        OrderEmployeeID?: number;
        OrderDate?: string;
        OrderShippedDate?: string;
        OrderShipVia?: number;
        OrderShipCity?: string;
        OrderShipCountry?: string;
        ProductName?: string;
        ProductDiscontinued?: boolean;
        ProductSupplierID?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        LineTotal?: number;
    }
    namespace OrderDetailRow {
        const idProperty = "DetailID";
        const localTextPrefix = "Northwind.OrderDetail";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            DetailID = "DetailID",
            OrderID = "OrderID",
            ProductID = "ProductID",
            UnitPrice = "UnitPrice",
            Quantity = "Quantity",
            Discount = "Discount",
            OrderCustomerID = "OrderCustomerID",
            OrderEmployeeID = "OrderEmployeeID",
            OrderDate = "OrderDate",
            OrderShippedDate = "OrderShippedDate",
            OrderShipVia = "OrderShipVia",
            OrderShipCity = "OrderShipCity",
            OrderShipCountry = "OrderShipCountry",
            ProductName = "ProductName",
            ProductDiscontinued = "ProductDiscontinued",
            ProductSupplierID = "ProductSupplierID",
            ProductQuantityPerUnit = "ProductQuantityPerUnit",
            ProductUnitPrice = "ProductUnitPrice",
            LineTotal = "LineTotal"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace OrderDetailService {
        const baseUrl = "Northwind/OrderDetail";
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<OrderDetailRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Retrieve = "Northwind/OrderDetail/Retrieve",
            List = "Northwind/OrderDetail/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface OrderForm {
        OrderID: Serenity.IntegerEditor;
        CustomerID: CustomerEditor;
        OrderDate: Serenity.DateEditor;
        RequiredDate: Serenity.StringEditor;
        EmployeeID: Serenity.LookupEditor;
        HowMany: Helpers.HardcodedValuesEditor;
        ConfirmRide: Serenity.BooleanEditor;
        RideCompleted: Serenity.BooleanEditor;
        Cancelled: Serenity.BooleanEditor;
        CancelReason: Serenity.StringEditor;
        CustomerSpecialNeedsPlainText: Serenity.TextAreaEditor;
        CustomerSpecialConditionsDirections: Serenity.TextAreaEditor;
        AppointmentTime: Serenity.StringEditor;
        ShipAddress: Serenity.StringEditor;
        ShipCity: Serenity.StringEditor;
        ShipPostalCode: Serenity.StringEditor;
        DestinationAddress: Serenity.StringEditor;
        DestinationApartment: Serenity.StringEditor;
        DestinationCity: Serenity.StringEditor;
        DestinationZip: Serenity.StringEditor;
        ApptTime: Serenity.StringEditor;
        ApptType: Serenity.LookupEditor;
        DistanceText: Serenity.StringEditor;
        DurationText: Serenity.StringEditor;
        AppointmentTime2: Serenity.StringEditor;
        DestinationAddress2: Serenity.StringEditor;
        DestinationApartment2: Serenity.StringEditor;
        DestinationCity2: Serenity.StringEditor;
        DestinationZip2: Serenity.StringEditor;
        ApptTime2: Serenity.StringEditor;
        ApptType2: Serenity.StringEditor;
        DistanceText2: Serenity.StringEditor;
        DurationText2: Serenity.StringEditor;
        AppointmentTime3: Serenity.StringEditor;
        DestinationAddress3: Serenity.StringEditor;
        DestinationApartment3: Serenity.StringEditor;
        DestinationCity3: Serenity.StringEditor;
        DestinationZip3: Serenity.StringEditor;
        ApptTime3: Serenity.StringEditor;
        ApptType3: Serenity.StringEditor;
        DistanceText3: Serenity.StringEditor;
        DurationText3: Serenity.StringEditor;
        ActualTotalHours: Serenity.StringEditor;
        ActualTotalMileage: Serenity.StringEditor;
        Cost: Serenity.DecimalEditor;
        Paid: Serenity.BooleanEditor;
        ReceiptReceived: Serenity.BooleanEditor;
    }
    class OrderForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface OrderListRequest extends Serenity.ListRequest {
        ProductID?: number;
    }
}
declare namespace MobilityMatters.Northwind {
    interface OrderRow {
        OrderID?: number;
        CustomerID?: string;
        EmployeeID?: number;
        OrderDate?: string;
        RequiredDate?: string;
        ShippedDate?: string;
        ShipVia?: number;
        Freight?: number;
        Cost?: number;
        ReceiptReceived?: boolean;
        Paid?: boolean;
        ShipName?: string;
        RideCompleted?: boolean;
        ConfirmRide?: boolean;
        Cancelled?: boolean;
        CancelReason?: string;
        ShipAddress?: string;
        ShipCity?: string;
        ShipRegion?: string;
        ShipPostalCode?: string;
        ShipCountry?: string;
        HowMany?: number;
        HowManyInt?: number;
        ActualTotalHours?: string;
        ActualTotalMinutes?: string;
        ActualTotalMileage?: string;
        DestinationAddress?: string;
        DestinationCity?: string;
        DestinationZip?: string;
        DestinationApartment?: string;
        ApptTime?: string;
        AppointmentTime?: string;
        ApptType?: string;
        DistanceText?: string;
        DistanceValue?: number;
        DurationText?: string;
        DurationValue?: number;
        ActualDuration1?: string;
        ActualDurationMins1?: string;
        DestinationAddress2?: string;
        DestinationCity2?: string;
        DestinationZip2?: string;
        DestinationApartment2?: string;
        ApptTime2?: string;
        AppointmentTime2?: string;
        ApptType2?: string;
        DistanceText2?: string;
        DistanceValue2?: number;
        DurationText2?: string;
        DurationValue2?: number;
        ActualDuration2?: string;
        ActualDurationMins2?: string;
        DestinationAddress3?: string;
        DestinationCity3?: string;
        DestinationZip3?: string;
        DestinationApartment3?: string;
        ApptTime3?: string;
        AppointmentTime3?: string;
        ApptType3?: string;
        DistanceText3?: string;
        DistanceValue3?: number;
        DurationText3?: string;
        DurationValue3?: number;
        ActualDuration3?: string;
        ActualDurationMins3?: string;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerTEMP?: boolean;
        CustomerSpecialNeedsList?: number[];
        CustomerSpecialNeedsPlainText?: string;
        CustomerSpecialConditionsDirections?: string;
        EmployeeFullName?: string;
        CustomerFullName?: string;
        EmployeeGender?: Gender;
        EmployeeReportsToFullName?: string;
        ShipViaCompanyName?: string;
        ShipViaPhone?: string;
        ShippingState?: OrderShippingState;
        DetailList?: OrderDetailRow[];
    }
    namespace OrderRow {
        const idProperty = "OrderID";
        const nameProperty = "CustomerID";
        const localTextPrefix = "Northwind.Order";
        const lookupKey = "Northwind.Order";
        function getLookup(): Q.Lookup<OrderRow>;
        const deletePermission = "Northwind:Orders:Modify";
        const insertPermission = "Northwind:Orders:Modify";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:Orders:Modify";
        const enum Fields {
            OrderID = "OrderID",
            CustomerID = "CustomerID",
            EmployeeID = "EmployeeID",
            OrderDate = "OrderDate",
            RequiredDate = "RequiredDate",
            ShippedDate = "ShippedDate",
            ShipVia = "ShipVia",
            Freight = "Freight",
            Cost = "Cost",
            ReceiptReceived = "ReceiptReceived",
            Paid = "Paid",
            ShipName = "ShipName",
            RideCompleted = "RideCompleted",
            ConfirmRide = "ConfirmRide",
            Cancelled = "Cancelled",
            CancelReason = "CancelReason",
            ShipAddress = "ShipAddress",
            ShipCity = "ShipCity",
            ShipRegion = "ShipRegion",
            ShipPostalCode = "ShipPostalCode",
            ShipCountry = "ShipCountry",
            HowMany = "HowMany",
            HowManyInt = "HowManyInt",
            ActualTotalHours = "ActualTotalHours",
            ActualTotalMinutes = "ActualTotalMinutes",
            ActualTotalMileage = "ActualTotalMileage",
            DestinationAddress = "DestinationAddress",
            DestinationCity = "DestinationCity",
            DestinationZip = "DestinationZip",
            DestinationApartment = "DestinationApartment",
            ApptTime = "ApptTime",
            AppointmentTime = "AppointmentTime",
            ApptType = "ApptType",
            DistanceText = "DistanceText",
            DistanceValue = "DistanceValue",
            DurationText = "DurationText",
            DurationValue = "DurationValue",
            ActualDuration1 = "ActualDuration1",
            ActualDurationMins1 = "ActualDurationMins1",
            DestinationAddress2 = "DestinationAddress2",
            DestinationCity2 = "DestinationCity2",
            DestinationZip2 = "DestinationZip2",
            DestinationApartment2 = "DestinationApartment2",
            ApptTime2 = "ApptTime2",
            AppointmentTime2 = "AppointmentTime2",
            ApptType2 = "ApptType2",
            DistanceText2 = "DistanceText2",
            DistanceValue2 = "DistanceValue2",
            DurationText2 = "DurationText2",
            DurationValue2 = "DurationValue2",
            ActualDuration2 = "ActualDuration2",
            ActualDurationMins2 = "ActualDurationMins2",
            DestinationAddress3 = "DestinationAddress3",
            DestinationCity3 = "DestinationCity3",
            DestinationZip3 = "DestinationZip3",
            DestinationApartment3 = "DestinationApartment3",
            ApptTime3 = "ApptTime3",
            AppointmentTime3 = "AppointmentTime3",
            ApptType3 = "ApptType3",
            DistanceText3 = "DistanceText3",
            DistanceValue3 = "DistanceValue3",
            DurationText3 = "DurationText3",
            DurationValue3 = "DurationValue3",
            ActualDuration3 = "ActualDuration3",
            ActualDurationMins3 = "ActualDurationMins3",
            CustomerCompanyName = "CustomerCompanyName",
            CustomerContactName = "CustomerContactName",
            CustomerCity = "CustomerCity",
            CustomerRegion = "CustomerRegion",
            CustomerCountry = "CustomerCountry",
            CustomerPhone = "CustomerPhone",
            CustomerTEMP = "CustomerTEMP",
            CustomerSpecialNeedsList = "CustomerSpecialNeedsList",
            CustomerSpecialNeedsPlainText = "CustomerSpecialNeedsPlainText",
            CustomerSpecialConditionsDirections = "CustomerSpecialConditionsDirections",
            EmployeeFullName = "EmployeeFullName",
            CustomerFullName = "CustomerFullName",
            EmployeeGender = "EmployeeGender",
            EmployeeReportsToFullName = "EmployeeReportsToFullName",
            ShipViaCompanyName = "ShipViaCompanyName",
            ShipViaPhone = "ShipViaPhone",
            ShippingState = "ShippingState",
            DetailList = "DetailList"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace OrderService {
        const baseUrl = "Northwind/Order";
        function Create(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<OrderRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: OrderListRequest, onSuccess?: (response: Serenity.ListResponse<OrderRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function DistanceMatrix(request: DistanceMatrixRequest, onSuccess?: (response: DistanceMatrixResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetDistanceMatrix(request: DistanceMatrixRequest, onSuccess?: (response: DistanceMatrixResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function GetConfirmUrl(request: TripConfirmUrlRequest, onSuccess?: (response: TripConfirmUrlResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Order/Create",
            Update = "Northwind/Order/Update",
            Delete = "Northwind/Order/Delete",
            Retrieve = "Northwind/Order/Retrieve",
            List = "Northwind/Order/List",
            DistanceMatrix = "Northwind/Order/DistanceMatrix",
            GetDistanceMatrix = "Northwind/Order/GetDistanceMatrix",
            GetConfirmUrl = "Northwind/Order/GetConfirmUrl"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
    }
    class ProductForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface ProductLangRow {
        Id?: number;
        ProductId?: number;
        LanguageId?: number;
        ProductName?: string;
    }
    namespace ProductLangRow {
        const idProperty = "Id";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.ProductLang";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            Id = "Id",
            ProductId = "ProductId",
            LanguageId = "LanguageId",
            ProductName = "ProductName"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace ProductLangService {
        const baseUrl = "Northwind/ProductLang";
        function Create(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductLangRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductLangRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProductLang/Create",
            Update = "Northwind/ProductLang/Update",
            Delete = "Northwind/ProductLang/Delete",
            Retrieve = "Northwind/ProductLang/Retrieve",
            List = "Northwind/ProductLang/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface ProductLogRow {
        ProductLogID?: number;
        OperationType?: Serenity.CaptureOperationType;
        ChangingUserId?: number;
        ValidFrom?: string;
        ValidUntil?: string;
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
    }
    namespace ProductLogRow {
        const idProperty = "ProductLogID";
        const localTextPrefix = "Northwind.ProductLog";
        const deletePermission: any;
        const insertPermission: any;
        const readPermission = "";
        const updatePermission: any;
        const enum Fields {
            ProductLogID = "ProductLogID",
            OperationType = "OperationType",
            ChangingUserId = "ChangingUserId",
            ValidFrom = "ValidFrom",
            ValidUntil = "ValidUntil",
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface ProductRow {
        ProductID?: number;
        ProductName?: string;
        ProductImage?: string;
        Discontinued?: boolean;
        SupplierID?: number;
        CategoryID?: number;
        QuantityPerUnit?: string;
        UnitPrice?: number;
        UnitsInStock?: number;
        UnitsOnOrder?: number;
        ReorderLevel?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
        CategoryName?: string;
        CategoryDescription?: string;
        CategoryPicture?: number[];
    }
    namespace ProductRow {
        const idProperty = "ProductID";
        const nameProperty = "ProductName";
        const localTextPrefix = "Northwind.Product";
        const lookupKey = "Northwind.Product";
        function getLookup(): Q.Lookup<ProductRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ProductID = "ProductID",
            ProductName = "ProductName",
            ProductImage = "ProductImage",
            Discontinued = "Discontinued",
            SupplierID = "SupplierID",
            CategoryID = "CategoryID",
            QuantityPerUnit = "QuantityPerUnit",
            UnitPrice = "UnitPrice",
            UnitsInStock = "UnitsInStock",
            UnitsOnOrder = "UnitsOnOrder",
            ReorderLevel = "ReorderLevel",
            SupplierCompanyName = "SupplierCompanyName",
            SupplierContactName = "SupplierContactName",
            SupplierContactTitle = "SupplierContactTitle",
            SupplierAddress = "SupplierAddress",
            SupplierCity = "SupplierCity",
            SupplierRegion = "SupplierRegion",
            SupplierPostalCode = "SupplierPostalCode",
            SupplierCountry = "SupplierCountry",
            SupplierPhone = "SupplierPhone",
            SupplierFax = "SupplierFax",
            SupplierHomePage = "SupplierHomePage",
            CategoryName = "CategoryName",
            CategoryDescription = "CategoryDescription",
            CategoryPicture = "CategoryPicture"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace ProductService {
        const baseUrl = "Northwind/Product";
        function Create(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProductRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProductRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Product/Create",
            Update = "Northwind/Product/Update",
            Delete = "Northwind/Product/Delete",
            Retrieve = "Northwind/Product/Retrieve",
            List = "Northwind/Product/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface ProgramForm {
        Name: Serenity.StringEditor;
    }
    class ProgramForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface ProgramMultipleForm {
        ProgramId: Serenity.IntegerEditor;
        CustomerId: Serenity.IntegerEditor;
    }
    class ProgramMultipleForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface ProgramMultipleRow {
        ProgramMultipleId?: number;
        ProgramId?: number;
        CustomerId?: number;
    }
    namespace ProgramMultipleRow {
        const idProperty = "ProgramMultipleId";
        const localTextPrefix = "Northwind.ProgramMultiple";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ProgramMultipleId = "ProgramMultipleId",
            ProgramId = "ProgramId",
            CustomerId = "CustomerId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace ProgramMultipleService {
        const baseUrl = "Northwind/ProgramMultiple";
        function Create(request: Serenity.SaveRequest<ProgramMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramMultipleRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramMultipleRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/ProgramMultiple/Create",
            Update = "Northwind/ProgramMultiple/Update",
            Delete = "Northwind/ProgramMultiple/Delete",
            Retrieve = "Northwind/ProgramMultiple/Retrieve",
            List = "Northwind/ProgramMultiple/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface ProgramRow {
        ProgramId?: number;
        Name?: string;
    }
    namespace ProgramRow {
        const idProperty = "ProgramId";
        const nameProperty = "Name";
        const localTextPrefix = "Northwind.Program";
        const lookupKey = "Northwind.Program";
        function getLookup(): Q.Lookup<ProgramRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            ProgramId = "ProgramId",
            Name = "Name"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace ProgramService {
        const baseUrl = "Northwind/Program";
        function Create(request: Serenity.SaveRequest<ProgramRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ProgramRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ProgramRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ProgramRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Program/Create",
            Update = "Northwind/Program/Update",
            Delete = "Northwind/Program/Delete",
            Retrieve = "Northwind/Program/Retrieve",
            List = "Northwind/Program/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface RegionForm {
        RegionID: Serenity.IntegerEditor;
        RegionDescription: Serenity.StringEditor;
    }
    class RegionForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface RegionRow {
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace RegionRow {
        const idProperty = "RegionID";
        const nameProperty = "RegionDescription";
        const localTextPrefix = "Northwind.Region";
        const lookupKey = "Northwind.Region";
        function getLookup(): Q.Lookup<RegionRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace RegionService {
        const baseUrl = "Northwind/Region";
        function Create(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<RegionRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<RegionRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Region/Create",
            Update = "Northwind/Region/Update",
            Delete = "Northwind/Region/Delete",
            Retrieve = "Northwind/Region/Retrieve",
            List = "Northwind/Region/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    enum RiderByCounty {
        Alameda = 0,
        ContraCosta = 1
    }
}
declare namespace MobilityMatters.Northwind {
    interface Row {
        Elements?: Element[];
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface SalesByCategoryRow {
        CategoryId?: number;
        CategoryName?: string;
        ProductName?: string;
        ProductSales?: number;
    }
    namespace SalesByCategoryRow {
        const nameProperty = "CategoryName";
        const localTextPrefix = "Northwind.SalesByCategory";
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            CategoryId = "CategoryId",
            CategoryName = "CategoryName",
            ProductName = "ProductName",
            ProductSales = "ProductSales"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace SalesByCategoryService {
        const baseUrl = "Northwind/SalesByCategory";
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SalesByCategoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            List = "Northwind/SalesByCategory/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface ShipperForm {
        CompanyName: Serenity.StringEditor;
        Phone: PhoneEditor;
    }
    class ShipperForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface ShipperRow {
        ShipperID?: number;
        CompanyName?: string;
        Phone?: string;
    }
    namespace ShipperRow {
        const idProperty = "ShipperID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Shipper";
        const lookupKey = "Northwind.Shipper";
        function getLookup(): Q.Lookup<ShipperRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ShipperID = "ShipperID",
            CompanyName = "CompanyName",
            Phone = "Phone"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace ShipperService {
        const baseUrl = "Northwind/Shipper";
        function Create(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<ShipperRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<ShipperRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Shipper/Create",
            Update = "Northwind/Shipper/Update",
            Delete = "Northwind/Shipper/Delete",
            Retrieve = "Northwind/Shipper/Retrieve",
            List = "Northwind/Shipper/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface SpecialNeedsForm {
        Name: Serenity.StringEditor;
    }
    class SpecialNeedsForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface SpecialNeedsMultipleRow {
        SpecialNeedsMultipleId?: number;
        SpecialNeedsId?: number;
        CustomerId?: number;
    }
    namespace SpecialNeedsMultipleRow {
        const idProperty = "SpecialNeedsMultipleId";
        const localTextPrefix = "Northwind.SpecialNeedsMultiple";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SpecialNeedsMultipleId = "SpecialNeedsMultipleId",
            SpecialNeedsId = "SpecialNeedsId",
            CustomerId = "CustomerId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface SpecialNeedsMultipleVolunteerForm {
        SpecialNeedsId: Serenity.IntegerEditor;
        EmployeeId: Serenity.IntegerEditor;
    }
    class SpecialNeedsMultipleVolunteerForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface SpecialNeedsMultipleVolunteerRow {
        SpecialNeedsMultipleVolunteerId?: number;
        SpecialNeedsId?: number;
        EmployeeId?: number;
    }
    namespace SpecialNeedsMultipleVolunteerRow {
        const idProperty = "SpecialNeedsMultipleVolunteerId";
        const localTextPrefix = "Northwind.SpecialNeedsMultipleVolunteer";
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SpecialNeedsMultipleVolunteerId = "SpecialNeedsMultipleVolunteerId",
            SpecialNeedsId = "SpecialNeedsId",
            EmployeeId = "EmployeeId"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace SpecialNeedsMultipleVolunteerService {
        const baseUrl = "Northwind/SpecialNeedsMultipleVolunteer";
        function Create(request: Serenity.SaveRequest<SpecialNeedsMultipleVolunteerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SpecialNeedsMultipleVolunteerRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecialNeedsMultipleVolunteerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecialNeedsMultipleVolunteerRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/SpecialNeedsMultipleVolunteer/Create",
            Update = "Northwind/SpecialNeedsMultipleVolunteer/Update",
            Delete = "Northwind/SpecialNeedsMultipleVolunteer/Delete",
            Retrieve = "Northwind/SpecialNeedsMultipleVolunteer/Retrieve",
            List = "Northwind/SpecialNeedsMultipleVolunteer/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface SpecialNeedsRow {
        SpecialNeedsID?: number;
        Name?: string;
    }
    namespace SpecialNeedsRow {
        const idProperty = "SpecialNeedsID";
        const nameProperty = "Name";
        const localTextPrefix = "Northwind.SpecialNeeds";
        const lookupKey = "Northwind.SpecialNeeds";
        function getLookup(): Q.Lookup<SpecialNeedsRow>;
        const deletePermission = "Administration:General";
        const insertPermission = "Administration:General";
        const readPermission = "Administration:General";
        const updatePermission = "Administration:General";
        const enum Fields {
            SpecialNeedsID = "SpecialNeedsID",
            Name = "Name"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace SpecialNeedsService {
        const baseUrl = "Northwind/SpecialNeeds";
        function Create(request: Serenity.SaveRequest<SpecialNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SpecialNeedsRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SpecialNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SpecialNeedsRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/SpecialNeeds/Create",
            Update = "Northwind/SpecialNeeds/Update",
            Delete = "Northwind/SpecialNeeds/Delete",
            Retrieve = "Northwind/SpecialNeeds/Retrieve",
            List = "Northwind/SpecialNeeds/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface SupplierForm {
        CompanyName: Serenity.StringEditor;
        ContactName: Serenity.StringEditor;
        ContactTitle: Serenity.StringEditor;
        Address: Serenity.StringEditor;
        Region: Serenity.StringEditor;
        PostalCode: Serenity.StringEditor;
        Country: Serenity.StringEditor;
        City: Serenity.StringEditor;
        Phone: Serenity.StringEditor;
        Fax: Serenity.StringEditor;
        HomePage: Serenity.StringEditor;
    }
    class SupplierForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface SupplierRow {
        SupplierID?: number;
        CompanyName?: string;
        ContactName?: string;
        ContactTitle?: string;
        Address?: string;
        City?: string;
        Region?: string;
        PostalCode?: string;
        Country?: string;
        Phone?: string;
        Fax?: string;
        HomePage?: string;
    }
    namespace SupplierRow {
        const idProperty = "SupplierID";
        const nameProperty = "CompanyName";
        const localTextPrefix = "Northwind.Supplier";
        const lookupKey = "Northwind.Supplier";
        function getLookup(): Q.Lookup<SupplierRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            SupplierID = "SupplierID",
            CompanyName = "CompanyName",
            ContactName = "ContactName",
            ContactTitle = "ContactTitle",
            Address = "Address",
            City = "City",
            Region = "Region",
            PostalCode = "PostalCode",
            Country = "Country",
            Phone = "Phone",
            Fax = "Fax",
            HomePage = "HomePage"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace SupplierService {
        const baseUrl = "Northwind/Supplier";
        function Create(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<SupplierRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<SupplierRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Supplier/Create",
            Update = "Northwind/Supplier/Update",
            Delete = "Northwind/Supplier/Delete",
            Retrieve = "Northwind/Supplier/Retrieve",
            List = "Northwind/Supplier/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
}
declare namespace MobilityMatters.Northwind {
    interface TerritoryForm {
        TerritoryID: Serenity.StringEditor;
        TerritoryDescription: Serenity.StringEditor;
        RegionID: Serenity.LookupEditor;
    }
    class TerritoryForm extends Serenity.PrefixedContext {
        static formKey: string;
        private static init;
        constructor(prefix: string);
    }
}
declare namespace MobilityMatters.Northwind {
    interface TerritoryRow {
        ID?: number;
        TerritoryID?: string;
        TerritoryDescription?: string;
        RegionID?: number;
        RegionDescription?: string;
    }
    namespace TerritoryRow {
        const idProperty = "ID";
        const nameProperty = "TerritoryID";
        const localTextPrefix = "Northwind.Territory";
        const lookupKey = "Northwind.Territory";
        function getLookup(): Q.Lookup<TerritoryRow>;
        const deletePermission = "Northwind:General";
        const insertPermission = "Northwind:General";
        const readPermission = "Northwind:General";
        const updatePermission = "Northwind:General";
        const enum Fields {
            ID = "ID",
            TerritoryID = "TerritoryID",
            TerritoryDescription = "TerritoryDescription",
            RegionID = "RegionID",
            RegionDescription = "RegionDescription"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    namespace TerritoryService {
        const baseUrl = "Northwind/Territory";
        function Create(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Update(request: Serenity.SaveRequest<TerritoryRow>, onSuccess?: (response: Serenity.SaveResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Delete(request: Serenity.DeleteRequest, onSuccess?: (response: Serenity.DeleteResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function Retrieve(request: Serenity.RetrieveRequest, onSuccess?: (response: Serenity.RetrieveResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        function List(request: Serenity.ListRequest, onSuccess?: (response: Serenity.ListResponse<TerritoryRow>) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        const enum Methods {
            Create = "Northwind/Territory/Create",
            Update = "Northwind/Territory/Update",
            Delete = "Northwind/Territory/Delete",
            Retrieve = "Northwind/Territory/Retrieve",
            List = "Northwind/Territory/List"
        }
    }
}
declare namespace MobilityMatters.Northwind {
    interface TripConfirmRequest extends Serenity.ServiceRequest {
        Token?: string;
    }
}
declare namespace MobilityMatters.Northwind {
    interface TripConfirmUrlRequest extends Serenity.ServiceRequest {
        Id?: number;
    }
}
declare namespace MobilityMatters.Northwind {
    interface TripConfirmUrlResponse extends Serenity.ServiceResponse {
        Url?: string;
    }
}
declare namespace MobilityMatters {
    interface ScriptUserDefinition {
        Username?: string;
        DisplayName?: string;
        IsAdmin?: boolean;
        Permissions?: {
            [key: string]: boolean;
        };
    }
}
declare namespace MobilityMatters.Texts {
}
declare namespace MobilityMatters.Administration {
    class LanguageDialog extends Serenity.EntityDialog<LanguageRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: LanguageForm;
    }
}
declare namespace MobilityMatters.Administration {
    class LanguageGrid extends Serenity.EntityGrid<LanguageRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof LanguageDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): LanguageRow.Fields[];
    }
}
declare namespace MobilityMatters.Administration {
    class RoleDialog extends Serenity.EntityDialog<RoleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RoleForm;
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
    }
}
declare namespace MobilityMatters.Administration {
    class RoleGrid extends Serenity.EntityGrid<RoleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof RoleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): RoleRow.Fields[];
    }
}
declare namespace MobilityMatters.Administration {
    class RolePermissionDialog extends Serenity.TemplatedDialog<RolePermissionDialogOptions> {
        private permissions;
        constructor(opt: RolePermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface RolePermissionDialogOptions {
        roleID?: number;
        title?: string;
    }
}
declare namespace MobilityMatters.Administration {
    class TranslationGrid extends Serenity.EntityGrid<TranslationItem, any> {
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private hasChanges;
        private searchText;
        private sourceLanguage;
        private targetLanguage;
        private targetLanguageKey;
        constructor(container: JQuery);
        protected onClick(e: JQueryEventObject, row: number, cell: number): any;
        protected getColumns(): Slick.Column[];
        protected createToolbarExtensions(): void;
        protected saveChanges(language: string): PromiseLike<any>;
        protected onViewSubmit(): boolean;
        protected getButtons(): Serenity.ToolButton[];
        protected createQuickSearchInput(): void;
        protected onViewFilter(item: TranslationItem): boolean;
        protected usePager(): boolean;
    }
}
declare namespace MobilityMatters.Administration {
    class UserDialog extends Serenity.EntityDialog<UserRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: UserForm;
        constructor();
        protected getToolbarButtons(): Serenity.ToolButton[];
        protected updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace MobilityMatters.Administration {
    class UserGrid extends Serenity.EntityGrid<UserRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof UserDialog;
        protected getIdProperty(): string;
        protected getIsActiveProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected getDefaultSortBy(): UserRow.Fields[];
    }
}
declare namespace MobilityMatters.Authorization {
    let userDefinition: ScriptUserDefinition;
    function hasPermission(permissionKey: string): boolean;
}
declare namespace MobilityMatters.Administration {
    class PermissionCheckEditor extends Serenity.DataGrid<PermissionCheckItem, PermissionCheckEditorOptions> {
        protected getIdProperty(): string;
        private searchText;
        private byParentKey;
        constructor(container: JQuery, opt: PermissionCheckEditorOptions);
        private getItemGrantRevokeClass;
        private roleOrImplicit;
        private getItemEffectiveClass;
        protected getColumns(): Slick.Column[];
        setItems(items: PermissionCheckItem[]): void;
        protected onViewSubmit(): boolean;
        protected onViewFilter(item: PermissionCheckItem): boolean;
        private matchContains;
        private getDescendants;
        protected onClick(e: any, row: any, cell: any): void;
        private getParentKey;
        protected getButtons(): Serenity.ToolButton[];
        protected createToolbarExtensions(): void;
        private getSortedGroupAndPermissionKeys;
        value: UserPermissionRow[];
        private _rolePermissions;
        rolePermissions: string[];
        private _implicitPermissions;
        implicitPermissions: Q.Dictionary<string[]>;
    }
    interface PermissionCheckEditorOptions {
        showRevoke?: boolean;
    }
    interface PermissionCheckItem {
        ParentKey?: string;
        Key?: string;
        Title?: string;
        IsGroup?: boolean;
        GrantRevoke?: boolean;
    }
}
declare namespace MobilityMatters.Administration {
    class UserPermissionDialog extends Serenity.TemplatedDialog<UserPermissionDialogOptions> {
        private permissions;
        constructor(opt: UserPermissionDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserPermissionDialogOptions {
        userID?: number;
        username?: string;
    }
}
declare namespace MobilityMatters.Administration {
    class RoleCheckEditor extends Serenity.CheckTreeEditor<Serenity.CheckTreeItem<any>, any> {
        private searchText;
        constructor(div: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): any[];
        protected getTreeItems(): Serenity.CheckTreeItem<any>[];
        protected onViewFilter(item: any): boolean;
    }
}
declare namespace MobilityMatters.Administration {
    class UserRoleDialog extends Serenity.TemplatedDialog<UserRoleDialogOptions> {
        private permissions;
        constructor(opt: UserRoleDialogOptions);
        protected getDialogOptions(): JQueryUI.DialogOptions;
        protected getTemplate(): string;
    }
    interface UserRoleDialogOptions {
        userID: number;
        username: string;
    }
}
declare namespace MobilityMatters.LanguageList {
    function getValue(): string[][];
}
declare namespace MobilityMatters.ScriptInitialization {
}
declare namespace MobilityMatters {
    class BasicProgressDialog extends Serenity.TemplatedDialog<any> {
        constructor();
        cancelled: boolean;
        max: number;
        value: number;
        title: string;
        cancelTitle: string;
        getDialogOptions(): JQueryUI.DialogOptions;
        initDialog(): void;
        getTemplate(): string;
    }
}
declare namespace MobilityMatters.Common {
    class BulkServiceAction {
        protected keys: string[];
        protected queue: string[];
        protected queueIndex: number;
        protected progressDialog: BasicProgressDialog;
        protected pendingRequests: number;
        protected completedRequests: number;
        protected errorByKey: Q.Dictionary<Serenity.ServiceError>;
        private successCount;
        private errorCount;
        done: () => void;
        protected createProgressDialog(): void;
        protected getConfirmationFormat(): string;
        protected getConfirmationMessage(targetCount: any): string;
        protected confirm(targetCount: any, action: any): void;
        protected getNothingToProcessMessage(): string;
        protected nothingToProcess(): void;
        protected getParallelRequests(): number;
        protected getBatchSize(): number;
        protected startParallelExecution(): void;
        protected serviceCallCleanup(): void;
        protected executeForBatch(batch: string[]): void;
        protected executeNextBatch(): void;
        protected getAllHadErrorsFormat(): string;
        protected showAllHadErrors(): void;
        protected getSomeHadErrorsFormat(): string;
        protected showSomeHadErrors(): void;
        protected getAllSuccessFormat(): string;
        protected showAllSuccess(): void;
        protected showResults(): void;
        execute(keys: string[]): void;
        get_successCount(): any;
        set_successCount(value: number): void;
        get_errorCount(): any;
        set_errorCount(value: number): void;
    }
}
declare namespace MobilityMatters.DialogUtils {
    function pendingChangesConfirmation(element: JQuery, hasPendingChanges: () => boolean): void;
}
declare namespace MobilityMatters.Common {
    class EnumSelectFormatter implements Slick.Formatter {
        constructor();
        format(ctx: Slick.FormatterContext): string;
        enumKey: string;
        allowClear: boolean;
        emptyItemText: string;
    }
}
declare namespace MobilityMatters.Common {
    interface ExcelExportOptions {
        grid: Serenity.DataGrid<any, any>;
        service: string;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
    }
    namespace ExcelExportHelper {
        function createToolButton(options: ExcelExportOptions): Serenity.ToolButton;
    }
}
declare namespace MobilityMatters.Common {
    class GridEditorBase<TEntity> extends Serenity.EntityGrid<TEntity, any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        protected getIdProperty(): string;
        protected nextId: number;
        constructor(container: JQuery);
        protected id(entity: TEntity): any;
        protected getNextId(): string;
        protected setNewId(entity: TEntity): void;
        protected save(opt: Serenity.ServiceOptions<any>, callback: (r: Serenity.ServiceResponse) => void): void;
        protected deleteEntity(id: number): boolean;
        protected validateEntity(row: TEntity, id: number): boolean;
        protected setEntities(items: TEntity[]): void;
        protected getNewEntity(): TEntity;
        protected getButtons(): Serenity.ToolButton[];
        protected editItem(entityOrId: any): void;
        getEditValue(property: any, target: any): void;
        setEditValue(source: any, property: any): void;
        value: TEntity[];
        protected getGridCanLoad(): boolean;
        protected usePager(): boolean;
        protected getInitialTitle(): any;
        protected createQuickSearchInput(): void;
    }
}
declare namespace MobilityMatters.Common {
    class GridEditorDialog<TEntity> extends Serenity.EntityDialog<TEntity, any> {
        protected getIdProperty(): string;
        onSave: (options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void) => void;
        onDelete: (options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void) => void;
        destroy(): void;
        protected updateInterface(): void;
        protected saveHandler(options: Serenity.ServiceOptions<Serenity.SaveResponse>, callback: (response: Serenity.SaveResponse) => void): void;
        protected deleteHandler(options: Serenity.ServiceOptions<Serenity.DeleteResponse>, callback: (response: Serenity.DeleteResponse) => void): void;
    }
}
declare namespace MobilityMatters.Helpers {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesCOVIDEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Helpers {
    class HardcodedValuesDialog extends Serenity.PropertyDialog<any, any> {
        protected getFormKey(): string;
        protected form: HardcodedValuesForm;
        constructor();
    }
}
declare namespace MobilityMatters.Helpers {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Helpers {
    /**
     * Our select editor with hardcoded values.
     *
     * When you define a new editor type, make sure you build
     * and transform templates for it to be available
     * in server side forms, e.g. [HardCodedValuesEditor]
     */
    class HardcodedValuesGenderEditor extends Serenity.Select2Editor<any, any> {
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    class StaticTextBlock extends Serenity.Widget<StaticTextBlockOptions> implements Serenity.ISetEditValue {
        private value;
        constructor(container: JQuery, options: StaticTextBlockOptions);
        private updateElementContent;
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace MobilityMatters.Common {
    class LanguageSelection extends Serenity.Widget<any> {
        constructor(select: JQuery, currentLanguage: string);
    }
}
declare namespace MobilityMatters.Common {
    class SidebarSearch extends Serenity.Widget<any> {
        private menuUL;
        constructor(input: JQuery, menuUL: JQuery);
        protected updateMatchFlags(text: string): void;
    }
}
declare namespace MobilityMatters.Common {
    class ThemeSelection extends Serenity.Widget<any> {
        constructor(select: JQuery);
        protected getCurrentTheme(): string;
    }
}
declare var jsPDF: any;
declare namespace MobilityMatters.Common {
    interface PdfExportOptions {
        grid: Serenity.DataGrid<any, any>;
        onViewSubmit: () => boolean;
        title?: string;
        hint?: string;
        separator?: boolean;
        reportTitle?: string;
        titleTop?: number;
        titleFontSize?: number;
        fileName?: string;
        pageNumbers?: boolean;
        columnTitles?: {
            [key: string]: string;
        };
        tableOptions?: jsPDF.AutoTableOptions;
        output?: string;
        autoPrint?: boolean;
        printDateTimeHeader?: boolean;
    }
    namespace PdfExportHelper {
        function exportToPdf(options: PdfExportOptions): void;
        function createToolButton(options: PdfExportOptions): Serenity.ToolButton;
    }
}
declare var jsPDF: any;
declare namespace MobilityMatters.Common {
    class ReportDialog extends Serenity.TemplatedDialog<ReportDialogOptions> {
        private report;
        private propertyGrid;
        constructor(options: ReportDialogOptions);
        protected getDialogButtons(): any;
        protected createPropertyGrid(): void;
        protected loadReport(reportKey: string): void;
        protected updateInterface(): void;
        executeReport(target: string, ext: string, download: boolean): void;
        getToolbarButtons(): {
            title: string;
            cssClass: string;
            onClick: () => void;
        }[];
    }
    interface ReportDialogOptions {
        reportKey: string;
    }
}
declare namespace MobilityMatters.Common {
    interface ReportExecuteOptions {
        reportKey: string;
        download?: boolean;
        extension?: 'pdf' | 'htm' | 'html' | 'xlsx' | 'docx';
        getParams?: () => any;
        params?: {
            [key: string]: any;
        };
        target?: string;
    }
    interface ReportButtonOptions extends ReportExecuteOptions {
        title?: string;
        cssClass?: string;
        icon?: string;
    }
    namespace ReportHelper {
        function createToolButton(options: ReportButtonOptions): Serenity.ToolButton;
        function execute(options: ReportExecuteOptions): void;
    }
}
declare var jsPDF: any;
declare namespace MobilityMatters.Common {
    class ReportPage extends Serenity.Widget<any> {
        private reportKey;
        private propertyItems;
        private propertyGrid;
        constructor(element: JQuery);
        protected updateMatchFlags(text: string): void;
        protected categoryClick(e: any): void;
        protected reportLinkClick(e: any): void;
    }
}
declare namespace MobilityMatters.Common {
    class UserPreferenceStorage implements Serenity.SettingStorage {
        getItem(key: string): string;
        setItem(key: string, data: string): void;
    }
}
declare namespace MobilityMatters.Membership {
    class ChangePasswordPanel extends Serenity.PropertyPanel<ChangePasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Membership {
    class ForgotPasswordPanel extends Serenity.PropertyPanel<ForgotPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Membership {
    class ResetPasswordPanel extends Serenity.PropertyPanel<ResetPasswordRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Membership {
    class SignUpPanel extends Serenity.PropertyPanel<SignUpRequest, any> {
        protected getFormKey(): string;
        private form;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityAmDialog extends Serenity.EntityDialog<AvailabilityAmRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AvailabilityAmForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityAmGrid extends Serenity.EntityGrid<AvailabilityAmRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvailabilityAmDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityAmMultipleDialog extends Serenity.EntityDialog<AvailabilityAmMultipleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AvailabilityAmMultipleForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityAmMultipleGrid extends Serenity.EntityGrid<AvailabilityAmMultipleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvailabilityAmMultipleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityPmDialog extends Serenity.EntityDialog<AvailabilityPmRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: AvailabilityPmForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityPmGrid extends Serenity.EntityGrid<AvailabilityPmRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvailabilityPmDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityPmMultipleDialog extends Serenity.EntityDialog<AvailabilityPmMultipleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: AvailabilityPmMultipleForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class AvailabilityPmMultipleGrid extends Serenity.EntityGrid<AvailabilityPmMultipleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof AvailabilityPmMultipleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class CategoryDialog extends Serenity.EntityDialog<CategoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CategoryForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class CategoryGrid extends Serenity.EntityGrid<CategoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class CitiesDialog extends Serenity.EntityDialog<CitiesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CitiesForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class CitiesGrid extends Serenity.EntityGrid<CitiesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class CitiesMultiDialog extends Serenity.EntityDialog<CitiesMultiRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: CitiesMultiForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class CitiesMultiGrid extends Serenity.EntityGrid<CitiesMultiRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof CitiesMultiDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class CustomerDialog extends Serenity.EntityDialog<CustomerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: CustomerForm;
        private ordersGrid;
        private loadedState;
        constructor();
        protected afterLoadEntity(): void;
        private getNextNumber;
        getSaveState(): string;
        loadResponse(data: any): void;
        loadEntity(entity: CustomerRow): void;
        onSaveSuccess(response: any): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class CustomerEditor extends Serenity.LookupEditorBase<Serenity.LookupEditorOptions, CustomerRow> {
        constructor(hidden: JQuery);
        protected getLookupKey(): string;
        protected getItemText(item: any, lookup: any): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class CustomerGrid extends Serenity.EntityGrid<CustomerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        getButtons(): Serenity.ToolButton[];
        protected onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class OrderDialog extends Serenity.EntityDialog<OrderRow, any> {
        [x: string]: any;
        getCloningEntity: any;
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        private customerPropertyGrid;
        private customerForm;
        private customerValidator;
        private employeesPropertyGrid;
        private employeesForm;
        private employeesValidator;
        protected form: OrderForm;
        constructor();
        getToolbarButtons(): Serenity.ToolButton[];
        getCustomerID(): number;
        getEmployeeID(): string;
        loadEntity(entity: Northwind.OrderRow): void;
        protected CalculateDistanceAndDuration(isRiderChanged: boolean): void;
        protected afterLoadEntity(): void;
        protected updateInterface(): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class CustomerOrderDialog extends OrderDialog {
        constructor();
        updateInterface(): void;
        protected afterLoadEntity(): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class OrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected createQuickFilters(): void;
        protected getButtons(): Serenity.ToolButton[];
        protected onClick(e: JQueryEventObject, row: number, cell: number): void;
        protected getColumns(): Slick.Column[];
        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        protected getItemCssClass(item: Northwind.OrderRow, index: number): string;
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class CustomerOrdersGrid extends OrderGrid {
        protected getDialogType(): typeof CustomerOrderDialog;
        constructor(container: JQuery);
        protected getColumns(): Slick.Column[];
        protected initEntityDialog(itemType: any, dialog: any): void;
        protected addButtonClick(): void;
        protected getInitialTitle(): any;
        protected getGridCanLoad(): boolean;
        private _customerID;
        customerID: string;
    }
}
declare namespace MobilityMatters.Northwind {
    class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class InactiveCustomerGrid extends CustomerGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class ProgramListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class SpecialNeedsListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class EmployeeFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
        genderProperty: string;
        initializeColumn(column: Slick.Column): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class EmployeesDialog extends Serenity.EntityDialog<EmployeesRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: EmployeesForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class EmployeesGrid extends Serenity.EntityGrid<EmployeesRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof EmployeesDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        getButtons(): Serenity.ToolButton[];
        protected getColumns(): Slick.Column[];
        protected onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class InactiveEmployeesGrid extends EmployeesGrid {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
        protected onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class MailBodyViewer extends Serenity.Widget<any> implements Serenity.ISetEditValue {
        constructor(element: JQuery);
        setEditValue(source: any, property: Serenity.PropertyItem): void;
    }
    interface StaticTextBlockOptions {
        text: string;
        isHtml: boolean;
        isLocalText: boolean;
        hideLabel: boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailComposeDialogOptions {
        toVoluntueer?: number[];
        ccList?: number[];
        subject?: string;
        body?: string;
        attachments?: Serenity.UploadedFile[];
        mailFromTrip?: boolean;
        rideNumber?: number;
        appointmentDate?: string;
        clientName?: string;
        pickupAddress?: string;
        telephoneNumber?: string;
        altPhone?: string;
        pickupTime?: string;
        deliveryAddress?: string;
        apptLength?: string;
        apptType?: string;
        appointmentTime?: string;
        deliveryAddress2?: string;
        apptLength2?: string;
        apptType2?: string;
        appointmentTime2?: string;
        specialNeedsTemp?: string;
        specialConditionsDirections?: string;
        orderId?: number;
    }
    class MailComposeDialog extends Serenity.PropertyDialog<MailComposeRequest, MailComposeDialogOptions> {
        private form;
        constructor(opt: MailComposeDialogOptions);
        getDialogButtons(): JQueryUI.DialogButtonOptions[];
        getDialogOptions(): JQueryUI.DialogOptions;
        validateBeforeSave(): boolean;
        okClickValidated(): void;
    }
}
declare namespace MobilityMatters.Northwind {
    class MailContentEditor extends Serenity.HtmlContentEditor {
        constructor(element: JQuery, opt: Serenity.HtmlContentEditorOptions);
        getConfig(): Serenity.CKEditorConfig;
    }
}
declare namespace MobilityMatters.Northwind {
    class MailDialog extends Serenity.EntityDialog<MailRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MailForm;
        updateInterface(): void;
    }
}
declare namespace MobilityMatters.Northwind {
    interface MailGridOptions {
        isSent?: boolean;
    }
    class MailGrid extends Serenity.EntityGrid<MailRow, MailGridOptions> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MailDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery, opt?: MailGridOptions);
        getItemCssClass(item: MailRow, index: number): string;
        getIncludeColumns(include: any): void;
        onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class MailAttachmentsDialog extends Serenity.EntityDialog<MailAttachmentsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: MailAttachmentsForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class MailAttachmentsGrid extends Serenity.EntityGrid<MailAttachmentsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof MailAttachmentsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class NoteDialog extends Serenity.TemplatedDialog<any> {
        private textEditor;
        constructor();
        protected getTemplate(): string;
        protected getDialogOptions(): JQueryUI.DialogOptions;
        text: string;
        okClick: () => void;
    }
}
declare namespace MobilityMatters.Northwind {
    class NotesEditor extends Serenity.TemplatedWidget<any> implements Serenity.IGetEditValue, Serenity.ISetEditValue {
        private isDirty;
        private items;
        constructor(div: JQuery);
        protected getTemplate(): string;
        protected updateContent(): void;
        protected addClick(): void;
        protected editClick(e: any): void;
        deleteClick(e: any): void;
        value: NoteRow[];
        getEditValue(prop: Serenity.PropertyItem, target: any): void;
        setEditValue(source: any, prop: Serenity.PropertyItem): void;
        get_isDirty(): boolean;
        set_isDirty(value: any): void;
        onChange: () => void;
    }
}
declare namespace MobilityMatters.Northwind {
    class CancelledOrderGrid extends Serenity.EntityGrid<OrderRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private rowSelection;
        protected shippingStateFilter: Serenity.EnumEditor;
        constructor(container: JQuery);
        protected createToolbarExtensions(): void;
        protected getButtons(): Serenity.ToolButton[];
        set_shippingState(value: number): void;
        protected addButtonClick(): void;
        protected onViewSubmit(): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class CurrencyFormatter implements Slick.Formatter {
        cultureName: string;
        currencyName: string;
        format(ctx: Slick.FormatterContext): any;
    }
}
declare namespace MobilityMatters.Northwind {
    class FreightFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class OrderDetailDialog extends Common.GridEditorDialog<OrderDetailRow> {
        protected getFormKey(): string;
        protected getLocalTextPrefix(): string;
        protected form: OrderDetailForm;
        constructor();
    }
}
declare namespace MobilityMatters.Northwind {
    class OrderDetailsEditor extends Common.GridEditorBase<OrderDetailRow> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof OrderDetailDialog;
        protected getLocalTextPrefix(): string;
        constructor(container: JQuery);
        validateEntity(row: any, id: any): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProductForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class ProductGrid extends Serenity.EntityGrid<ProductRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        private pendingChanges;
        constructor(container: JQuery);
        protected getButtons(): Serenity.ToolButton[];
        protected onViewProcessData(response: any): Serenity.ListResponse<ProductRow>;
        /**
         * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
         * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
         * no event handlers to rendered cell contents
         */
        private numericInputFormatter;
        private stringInputFormatter;
        /**
         * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
         */
        private selectFormatter;
        private getEffectiveValue;
        protected getColumns(): Slick.Column[];
        private inputsChange;
        private setSaveButtonState;
        private saveClick;
        protected getQuickFilters(): Serenity.QuickFilter<Serenity.Widget<any>, any>[];
    }
}
declare namespace MobilityMatters.Northwind {
    class ProgramDialog extends Serenity.EntityDialog<ProgramRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ProgramForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class ProgramGrid extends Serenity.EntityGrid<ProgramRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class ProgramMultipleDialog extends Serenity.EntityDialog<ProgramMultipleRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: ProgramMultipleForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class ProgramMultipleGrid extends Serenity.EntityGrid<ProgramMultipleRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof ProgramMultipleDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class RegionDialog extends Serenity.EntityDialog<RegionRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: RegionForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MobilityMatters.Northwind {
    class RegionGrid extends Serenity.EntityGrid<RegionRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class PhoneEditor extends Serenity.StringEditor {
        constructor(input: JQuery);
        protected formatValue(): void;
        protected getFormattedValue(): string;
        multiple: boolean;
        get_value(): string;
        set_value(value: string): void;
        static validate(phone: string, isMultiple: boolean): string;
        static isValidPhone(phone: string): boolean;
        static formatPhone(phone: any): any;
        static formatMulti(phone: string, format: (s: string) => string): string;
        static isValidMulti(phone: string, check: (s: string) => boolean): boolean;
    }
}
declare namespace MobilityMatters.Northwind {
    class ShipperDialog extends Serenity.EntityDialog<ShipperRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: ShipperForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MobilityMatters.Northwind {
    class ShipperFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext): string;
    }
}
declare namespace MobilityMatters.Northwind {
    class ShipperGrid extends Serenity.EntityGrid<ShipperRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class SpecialNeedsDialog extends Serenity.EntityDialog<SpecialNeedsRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SpecialNeedsForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class SpecialNeedsGrid extends Serenity.EntityGrid<SpecialNeedsRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SpecialNeedsDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class SpecialNeedsMultipleVolunteerDialog extends Serenity.EntityDialog<SpecialNeedsMultipleVolunteerRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        protected form: SpecialNeedsMultipleVolunteerForm;
    }
}
declare namespace MobilityMatters.Northwind {
    class SpecialNeedsMultipleVolunteerGrid extends Serenity.EntityGrid<SpecialNeedsMultipleVolunteerRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): typeof SpecialNeedsMultipleVolunteerDialog;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class SupplierDialog extends Serenity.EntityDialog<SupplierRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: SupplierForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MobilityMatters.Northwind {
    class SupplierGrid extends Serenity.EntityGrid<SupplierRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
declare namespace MobilityMatters.Northwind {
    class TerritoryDialog extends Serenity.EntityDialog<TerritoryRow, any> {
        protected getFormKey(): string;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getNameProperty(): string;
        protected getService(): string;
        protected form: TerritoryForm;
        protected getLanguages(): string[][];
    }
}
declare namespace MobilityMatters.Northwind {
    class TerritoryGrid extends Serenity.EntityGrid<TerritoryRow, any> {
        protected getColumnsKey(): string;
        protected getDialogType(): any;
        protected getIdProperty(): string;
        protected getLocalTextPrefix(): string;
        protected getService(): string;
        constructor(container: JQuery);
    }
}
