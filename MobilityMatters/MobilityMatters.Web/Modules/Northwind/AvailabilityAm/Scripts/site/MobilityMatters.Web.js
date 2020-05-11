var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            LanguageRow.deletePermission = 'Administration:Translation';
            LanguageRow.insertPermission = 'Administration:Translation';
            LanguageRow.readPermission = 'Administration:Translation';
            LanguageRow.updatePermission = 'Administration:Translation';
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                LanguageService[x] = function (r, s, o) {
                    return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleForm = /** @class */ (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            RolePermissionRow.deletePermission = 'Administration:Security';
            RolePermissionRow.insertPermission = 'Administration:Security';
            RolePermissionRow.readPermission = 'Administration:Security';
            RolePermissionRow.updatePermission = 'Administration:Security';
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            RoleRow.deletePermission = 'Administration:Security';
            RoleRow.insertPermission = 'Administration:Security';
            RoleRow.readPermission = 'Administration:Security';
            RoleRow.updatePermission = 'Administration:Security';
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            [
                'List',
                'Update'
            ].forEach(function (x) {
                TranslationService[x] = function (r, s, o) {
                    return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserForm = /** @class */ (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            UserPermissionRow.deletePermission = 'Administration:Security';
            UserPermissionRow.insertPermission = 'Administration:Security';
            UserPermissionRow.readPermission = 'Administration:Security';
            UserPermissionRow.updatePermission = 'Administration:Security';
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            [
                'Update',
                'List',
                'ListRolePermissions',
                'ListPermissionKeys'
            ].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            UserRoleRow.deletePermission = 'Administration:Security';
            UserRoleRow.insertPermission = 'Administration:Security';
            UserRoleRow.readPermission = 'Administration:Security';
            UserRoleRow.updatePermission = 'Administration:Security';
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            [
                'Update',
                'List'
            ].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            UserRow.lookupKey = 'Administration.User';
            function getLookup() {
                return Q.getLookup('Administration.User');
            }
            UserRow.getLookup = getLookup;
            UserRow.deletePermission = 'Administration:Security';
            UserRow.insertPermission = 'Administration:Security';
            UserRow.readPermission = 'Administration:Security';
            UserRow.updatePermission = 'Administration:Security';
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            [
                'Create',
                'Update',
                'Delete',
                'Undelete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                UserService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            UserPreferenceRow.deletePermission = '';
            UserPreferenceRow.insertPermission = '';
            UserPreferenceRow.readPermission = '';
            UserPreferenceRow.updatePermission = '';
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            [
                'Update',
                'Retrieve'
            ].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) {
                    return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = /** @class */ (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var LoginForm = /** @class */ (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = /** @class */ (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var SignUpForm = /** @class */ (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmForm = /** @class */ (function (_super) {
            __extends(AvailabilityAmForm, _super);
            function AvailabilityAmForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AvailabilityAmForm.formKey = 'Northwind.AvailabilityAm';
            return AvailabilityAmForm;
        }(Serenity.PrefixedContext));
        Northwind.AvailabilityAmForm = AvailabilityAmForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmMultipleForm = /** @class */ (function (_super) {
            __extends(AvailabilityAmMultipleForm, _super);
            function AvailabilityAmMultipleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AvailabilityAmMultipleForm.formKey = 'Northwind.AvailabilityAmMultiple';
            return AvailabilityAmMultipleForm;
        }(Serenity.PrefixedContext));
        Northwind.AvailabilityAmMultipleForm = AvailabilityAmMultipleForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmMultipleRow;
        (function (AvailabilityAmMultipleRow) {
            AvailabilityAmMultipleRow.idProperty = 'AvailabilityAmMultipleId';
            AvailabilityAmMultipleRow.localTextPrefix = 'Northwind.AvailabilityAmMultiple';
            AvailabilityAmMultipleRow.deletePermission = 'Administration:General';
            AvailabilityAmMultipleRow.insertPermission = 'Administration:General';
            AvailabilityAmMultipleRow.readPermission = 'Administration:General';
            AvailabilityAmMultipleRow.updatePermission = 'Administration:General';
        })(AvailabilityAmMultipleRow = Northwind.AvailabilityAmMultipleRow || (Northwind.AvailabilityAmMultipleRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmMultipleService;
        (function (AvailabilityAmMultipleService) {
            AvailabilityAmMultipleService.baseUrl = 'Northwind/AvailabilityAmMultiple';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvailabilityAmMultipleService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvailabilityAmMultipleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvailabilityAmMultipleService = Northwind.AvailabilityAmMultipleService || (Northwind.AvailabilityAmMultipleService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmRow;
        (function (AvailabilityAmRow) {
            AvailabilityAmRow.idProperty = 'AvailabilityAmid';
            AvailabilityAmRow.nameProperty = 'Day';
            AvailabilityAmRow.localTextPrefix = 'Northwind.AvailabilityAm';
            AvailabilityAmRow.lookupKey = 'Northwind.AvailabilityAM';
            function getLookup() {
                return Q.getLookup('Northwind.AvailabilityAM');
            }
            AvailabilityAmRow.getLookup = getLookup;
            AvailabilityAmRow.deletePermission = 'Administration:General';
            AvailabilityAmRow.insertPermission = 'Administration:General';
            AvailabilityAmRow.readPermission = 'Administration:General';
            AvailabilityAmRow.updatePermission = 'Administration:General';
        })(AvailabilityAmRow = Northwind.AvailabilityAmRow || (Northwind.AvailabilityAmRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmService;
        (function (AvailabilityAmService) {
            AvailabilityAmService.baseUrl = 'Northwind/AvailabilityAm';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvailabilityAmService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvailabilityAmService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvailabilityAmService = Northwind.AvailabilityAmService || (Northwind.AvailabilityAmService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmForm = /** @class */ (function (_super) {
            __extends(AvailabilityPmForm, _super);
            function AvailabilityPmForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AvailabilityPmForm.formKey = 'Northwind.AvailabilityPm';
            return AvailabilityPmForm;
        }(Serenity.PrefixedContext));
        Northwind.AvailabilityPmForm = AvailabilityPmForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmMultipleForm = /** @class */ (function (_super) {
            __extends(AvailabilityPmMultipleForm, _super);
            function AvailabilityPmMultipleForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            AvailabilityPmMultipleForm.formKey = 'Northwind.AvailabilityPmMultiple';
            return AvailabilityPmMultipleForm;
        }(Serenity.PrefixedContext));
        Northwind.AvailabilityPmMultipleForm = AvailabilityPmMultipleForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmMultipleRow;
        (function (AvailabilityPmMultipleRow) {
            AvailabilityPmMultipleRow.idProperty = 'AvailabilityPmMultipleId';
            AvailabilityPmMultipleRow.localTextPrefix = 'Northwind.AvailabilityPmMultiple';
            AvailabilityPmMultipleRow.deletePermission = 'Administration:General';
            AvailabilityPmMultipleRow.insertPermission = 'Administration:General';
            AvailabilityPmMultipleRow.readPermission = 'Administration:General';
            AvailabilityPmMultipleRow.updatePermission = 'Administration:General';
        })(AvailabilityPmMultipleRow = Northwind.AvailabilityPmMultipleRow || (Northwind.AvailabilityPmMultipleRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmMultipleService;
        (function (AvailabilityPmMultipleService) {
            AvailabilityPmMultipleService.baseUrl = 'Northwind/AvailabilityPmMultiple';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvailabilityPmMultipleService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvailabilityPmMultipleService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvailabilityPmMultipleService = Northwind.AvailabilityPmMultipleService || (Northwind.AvailabilityPmMultipleService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmRow;
        (function (AvailabilityPmRow) {
            AvailabilityPmRow.idProperty = 'AvailabilityPmid';
            AvailabilityPmRow.nameProperty = 'Day';
            AvailabilityPmRow.localTextPrefix = 'Northwind.AvailabilityPm';
            AvailabilityPmRow.lookupKey = 'Northwind.AvailabilityPM';
            function getLookup() {
                return Q.getLookup('Northwind.AvailabilityPM');
            }
            AvailabilityPmRow.getLookup = getLookup;
            AvailabilityPmRow.deletePermission = 'Administration:General';
            AvailabilityPmRow.insertPermission = 'Administration:General';
            AvailabilityPmRow.readPermission = 'Administration:General';
            AvailabilityPmRow.updatePermission = 'Administration:General';
        })(AvailabilityPmRow = Northwind.AvailabilityPmRow || (Northwind.AvailabilityPmRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmService;
        (function (AvailabilityPmService) {
            AvailabilityPmService.baseUrl = 'Northwind/AvailabilityPm';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                AvailabilityPmService[x] = function (r, s, o) {
                    return Q.serviceRequest(AvailabilityPmService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(AvailabilityPmService = Northwind.AvailabilityPmService || (Northwind.AvailabilityPmService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryForm = /** @class */ (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CategoryForm.formKey = 'Northwind.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Northwind.CategoryForm = CategoryForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Northwind.CategoryLang';
            CategoryLangRow.deletePermission = 'Northwind:General';
            CategoryLangRow.insertPermission = 'Northwind:General';
            CategoryLangRow.readPermission = 'Northwind:General';
            CategoryLangRow.updatePermission = 'Northwind:General';
        })(CategoryLangRow = Northwind.CategoryLangRow || (Northwind.CategoryLangRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Northwind/CategoryLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryLangService = Northwind.CategoryLangService || (Northwind.CategoryLangService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Northwind.Category';
            CategoryRow.lookupKey = 'Northwind.Category';
            function getLookup() {
                return Q.getLookup('Northwind.Category');
            }
            CategoryRow.getLookup = getLookup;
            CategoryRow.deletePermission = 'Northwind:General';
            CategoryRow.insertPermission = 'Northwind:General';
            CategoryRow.readPermission = 'Northwind:General';
            CategoryRow.updatePermission = 'Northwind:General';
        })(CategoryRow = Northwind.CategoryRow || (Northwind.CategoryRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Northwind/Category';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CategoryService = Northwind.CategoryService || (Northwind.CategoryService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesForm = /** @class */ (function (_super) {
            __extends(CitiesForm, _super);
            function CitiesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CitiesForm.formKey = 'Northwind.Cities';
            return CitiesForm;
        }(Serenity.PrefixedContext));
        Northwind.CitiesForm = CitiesForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesMultiForm = /** @class */ (function (_super) {
            __extends(CitiesMultiForm, _super);
            function CitiesMultiForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CitiesMultiForm.formKey = 'Northwind.CitiesMulti';
            return CitiesMultiForm;
        }(Serenity.PrefixedContext));
        Northwind.CitiesMultiForm = CitiesMultiForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesMultiRow;
        (function (CitiesMultiRow) {
            CitiesMultiRow.idProperty = 'CitiesMultiId';
            CitiesMultiRow.localTextPrefix = 'Northwind.CitiesMulti';
            CitiesMultiRow.deletePermission = 'Administration:General';
            CitiesMultiRow.insertPermission = 'Administration:General';
            CitiesMultiRow.readPermission = 'Administration:General';
            CitiesMultiRow.updatePermission = 'Administration:General';
        })(CitiesMultiRow = Northwind.CitiesMultiRow || (Northwind.CitiesMultiRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesMultiService;
        (function (CitiesMultiService) {
            CitiesMultiService.baseUrl = 'Northwind/CitiesMulti';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CitiesMultiService[x] = function (r, s, o) {
                    return Q.serviceRequest(CitiesMultiService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CitiesMultiService = Northwind.CitiesMultiService || (Northwind.CitiesMultiService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesRow;
        (function (CitiesRow) {
            CitiesRow.idProperty = 'CityId';
            CitiesRow.nameProperty = 'Name';
            CitiesRow.localTextPrefix = 'Northwind.Cities';
            CitiesRow.lookupKey = 'Northwind.Cities';
            function getLookup() {
                return Q.getLookup('Northwind.Cities');
            }
            CitiesRow.getLookup = getLookup;
            CitiesRow.deletePermission = 'Administration:General';
            CitiesRow.insertPermission = 'Administration:General';
            CitiesRow.readPermission = 'Administration:General';
            CitiesRow.updatePermission = 'Administration:General';
        })(CitiesRow = Northwind.CitiesRow || (Northwind.CitiesRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesService;
        (function (CitiesService) {
            CitiesService.baseUrl = 'Northwind/Cities';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CitiesService[x] = function (r, s, o) {
                    return Q.serviceRequest(CitiesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CitiesService = Northwind.CitiesService || (Northwind.CitiesService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerCustomerDemoRow;
        (function (CustomerCustomerDemoRow) {
            CustomerCustomerDemoRow.idProperty = 'ID';
            CustomerCustomerDemoRow.nameProperty = 'CustomerID';
            CustomerCustomerDemoRow.localTextPrefix = 'Northwind.CustomerCustomerDemo';
            CustomerCustomerDemoRow.deletePermission = 'Northwind:General';
            CustomerCustomerDemoRow.insertPermission = 'Northwind:General';
            CustomerCustomerDemoRow.readPermission = 'Northwind:General';
            CustomerCustomerDemoRow.updatePermission = 'Northwind:General';
        })(CustomerCustomerDemoRow = Northwind.CustomerCustomerDemoRow || (Northwind.CustomerCustomerDemoRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerDemographicRow;
        (function (CustomerDemographicRow) {
            CustomerDemographicRow.idProperty = 'ID';
            CustomerDemographicRow.nameProperty = 'CustomerTypeID';
            CustomerDemographicRow.localTextPrefix = 'Northwind.CustomerDemographic';
            CustomerDemographicRow.deletePermission = 'Northwind:General';
            CustomerDemographicRow.insertPermission = 'Northwind:General';
            CustomerDemographicRow.readPermission = 'Northwind:General';
            CustomerDemographicRow.updatePermission = 'Northwind:General';
        })(CustomerDemographicRow = Northwind.CustomerDemographicRow || (Northwind.CustomerDemographicRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Northwind.CustomerDetails';
            CustomerDetailsRow.lookupKey = 'Northwind.CustomerDetails';
            function getLookup() {
                return Q.getLookup('Northwind.CustomerDetails');
            }
            CustomerDetailsRow.getLookup = getLookup;
            CustomerDetailsRow.deletePermission = 'Northwind:General';
            CustomerDetailsRow.insertPermission = 'Northwind:General';
            CustomerDetailsRow.readPermission = 'Northwind:General';
            CustomerDetailsRow.updatePermission = 'Northwind:General';
        })(CustomerDetailsRow = Northwind.CustomerDetailsRow || (Northwind.CustomerDetailsRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerForm = /** @class */ (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            CustomerForm.formKey = 'Northwind.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Northwind.CustomerForm = CustomerForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrossSalesRow;
        (function (CustomerGrossSalesRow) {
            CustomerGrossSalesRow.nameProperty = 'ContactName';
            CustomerGrossSalesRow.localTextPrefix = 'Northwind.CustomerGrossSales';
            CustomerGrossSalesRow.deletePermission = 'Northwind:General';
            CustomerGrossSalesRow.insertPermission = 'Northwind:General';
            CustomerGrossSalesRow.readPermission = 'Northwind:General';
            CustomerGrossSalesRow.updatePermission = 'Northwind:General';
        })(CustomerGrossSalesRow = Northwind.CustomerGrossSalesRow || (Northwind.CustomerGrossSalesRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'Northwind.CustomerRepresentatives';
            CustomerRepresentativesRow.deletePermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.insertPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.readPermission = 'Northwind:Customer:View';
            CustomerRepresentativesRow.updatePermission = 'Northwind:Customer:View';
        })(CustomerRepresentativesRow = Northwind.CustomerRepresentativesRow || (Northwind.CustomerRepresentativesRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'FullName';
            CustomerRow.localTextPrefix = 'Northwind.Customer';
            CustomerRow.lookupKey = 'Northwind.Customer';
            function getLookup() {
                return Q.getLookup('Northwind.Customer');
            }
            CustomerRow.getLookup = getLookup;
            CustomerRow.deletePermission = 'Northwind:Customer:Delete';
            CustomerRow.insertPermission = 'Northwind:Customer:Modify';
            CustomerRow.readPermission = 'Northwind:Customer:View';
            CustomerRow.updatePermission = 'Northwind:Customer:Modify';
        })(CustomerRow = Northwind.CustomerRow || (Northwind.CustomerRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Northwind/Customer';
            [
                'Create',
                'Update',
                'Delete',
                'GetNextNumber',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                CustomerService[x] = function (r, s, o) {
                    return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(CustomerService = Northwind.CustomerService || (Northwind.CustomerService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Northwind.Employee';
            EmployeeRow.lookupKey = 'Northwind.Employee';
            function getLookup() {
                return Q.getLookup('Northwind.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            EmployeeRow.deletePermission = 'Northwind:General';
            EmployeeRow.insertPermission = 'Northwind:General';
            EmployeeRow.readPermission = 'Northwind:General';
            EmployeeRow.updatePermission = 'Northwind:General';
        })(EmployeeRow = Northwind.EmployeeRow || (Northwind.EmployeeRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeeTerritoryRow;
        (function (EmployeeTerritoryRow) {
            EmployeeTerritoryRow.idProperty = 'EmployeeID';
            EmployeeTerritoryRow.nameProperty = 'TerritoryID';
            EmployeeTerritoryRow.localTextPrefix = 'Northwind.EmployeeTerritory';
            EmployeeTerritoryRow.deletePermission = 'Northwind:General';
            EmployeeTerritoryRow.insertPermission = 'Northwind:General';
            EmployeeTerritoryRow.readPermission = 'Northwind:General';
            EmployeeTerritoryRow.updatePermission = 'Northwind:General';
        })(EmployeeTerritoryRow = Northwind.EmployeeTerritoryRow || (Northwind.EmployeeTerritoryRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeesForm = /** @class */ (function (_super) {
            __extends(EmployeesForm, _super);
            function EmployeesForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            EmployeesForm.formKey = 'Northwind.Employees';
            return EmployeesForm;
        }(Serenity.PrefixedContext));
        Northwind.EmployeesForm = EmployeesForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeesRow;
        (function (EmployeesRow) {
            EmployeesRow.idProperty = 'EmployeeId';
            EmployeesRow.nameProperty = 'LastName';
            EmployeesRow.localTextPrefix = 'Northwind.Employees';
            EmployeesRow.deletePermission = 'Administration:General';
            EmployeesRow.insertPermission = 'Administration:General';
            EmployeesRow.readPermission = 'Administration:General';
            EmployeesRow.updatePermission = 'Administration:General';
        })(EmployeesRow = Northwind.EmployeesRow || (Northwind.EmployeesRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeesService;
        (function (EmployeesService) {
            EmployeesService.baseUrl = 'Northwind/Employees';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                EmployeesService[x] = function (r, s, o) {
                    return Q.serviceRequest(EmployeesService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(EmployeesService = Northwind.EmployeesService || (Northwind.EmployeesService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var Gender;
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Gender = Northwind.Gender || (Northwind.Gender = {}));
        Serenity.Decorators.registerEnumType(Gender, 'MobilityMatters.Northwind.Gender', 'MobilityMatters.Northwind.Entities.Gender');
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailAttachmentsForm = /** @class */ (function (_super) {
            __extends(MailAttachmentsForm, _super);
            function MailAttachmentsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailAttachmentsForm.formKey = 'Northwind.MailAttachments';
            return MailAttachmentsForm;
        }(Serenity.PrefixedContext));
        Northwind.MailAttachmentsForm = MailAttachmentsForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailAttachmentsRow;
        (function (MailAttachmentsRow) {
            MailAttachmentsRow.idProperty = 'AttachmentId';
            MailAttachmentsRow.nameProperty = 'MimeType';
            MailAttachmentsRow.localTextPrefix = 'Northwind.MailAttachments';
            MailAttachmentsRow.deletePermission = 'Administration:General';
            MailAttachmentsRow.insertPermission = 'Administration:General';
            MailAttachmentsRow.readPermission = 'Administration:General';
            MailAttachmentsRow.updatePermission = 'Administration:General';
        })(MailAttachmentsRow = Northwind.MailAttachmentsRow || (Northwind.MailAttachmentsRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailAttachmentsService;
        (function (MailAttachmentsService) {
            MailAttachmentsService.baseUrl = 'Northwind/MailAttachments';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                MailAttachmentsService[x] = function (r, s, o) {
                    return Q.serviceRequest(MailAttachmentsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MailAttachmentsService = Northwind.MailAttachmentsService || (Northwind.MailAttachmentsService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailComposeForm = /** @class */ (function (_super) {
            __extends(MailComposeForm, _super);
            function MailComposeForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailComposeForm.formKey = 'Northwind.MailCompose';
            return MailComposeForm;
        }(Serenity.PrefixedContext));
        Northwind.MailComposeForm = MailComposeForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailForm = /** @class */ (function (_super) {
            __extends(MailForm, _super);
            function MailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            MailForm.formKey = 'Northwind.Mail';
            return MailForm;
        }(Serenity.PrefixedContext));
        Northwind.MailForm = MailForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailRow;
        (function (MailRow) {
            MailRow.idProperty = 'MailId';
            MailRow.nameProperty = 'Uid';
            MailRow.localTextPrefix = 'Northwind.Mail';
            MailRow.deletePermission = 'Administration:General';
            MailRow.insertPermission = 'Administration:General';
            MailRow.readPermission = 'Administration:General';
            MailRow.updatePermission = 'Administration:General';
        })(MailRow = Northwind.MailRow || (Northwind.MailRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailService;
        (function (MailService) {
            MailService.baseUrl = 'Northwind/Mail';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'Compose'
            ].forEach(function (x) {
                MailService[x] = function (r, s, o) {
                    return Q.serviceRequest(MailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(MailService = Northwind.MailService || (Northwind.MailService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Northwind.Note';
            NoteRow.deletePermission = 'Northwind:General';
            NoteRow.insertPermission = 'Northwind:General';
            NoteRow.readPermission = 'Northwind:General';
            NoteRow.updatePermission = 'Northwind:General';
        })(NoteRow = Northwind.NoteRow || (Northwind.NoteRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailForm = /** @class */ (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrderDetailForm.formKey = 'Northwind.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderDetailForm = OrderDetailForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Northwind.OrderDetail';
            OrderDetailRow.deletePermission = 'Northwind:General';
            OrderDetailRow.insertPermission = 'Northwind:General';
            OrderDetailRow.readPermission = 'Northwind:General';
            OrderDetailRow.updatePermission = 'Northwind:General';
        })(OrderDetailRow = Northwind.OrderDetailRow || (Northwind.OrderDetailRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Northwind/OrderDetail';
            [
                'Retrieve',
                'List'
            ].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderDetailService = Northwind.OrderDetailService || (Northwind.OrderDetailService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderForm = /** @class */ (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            OrderForm.formKey = 'Northwind.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Northwind.OrderForm = OrderForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Northwind.Order';
            OrderRow.lookupKey = 'Northwind.Order';
            function getLookup() {
                return Q.getLookup('Northwind.Order');
            }
            OrderRow.getLookup = getLookup;
            OrderRow.deletePermission = 'Northwind:General';
            OrderRow.insertPermission = 'Northwind:General';
            OrderRow.readPermission = 'Northwind:General';
            OrderRow.updatePermission = 'Northwind:General';
        })(OrderRow = Northwind.OrderRow || (Northwind.OrderRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Northwind/Order';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List',
                'GetDistanceMatrix'
            ].forEach(function (x) {
                OrderService[x] = function (r, s, o) {
                    return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(OrderService = Northwind.OrderService || (Northwind.OrderService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderShippingState;
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(OrderShippingState = Northwind.OrderShippingState || (Northwind.OrderShippingState = {}));
        Serenity.Decorators.registerEnumType(OrderShippingState, 'MobilityMatters.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductForm = /** @class */ (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ProductForm.formKey = 'Northwind.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Northwind.ProductForm = ProductForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Northwind.ProductLang';
            ProductLangRow.deletePermission = 'Northwind:General';
            ProductLangRow.insertPermission = 'Northwind:General';
            ProductLangRow.readPermission = 'Northwind:General';
            ProductLangRow.updatePermission = 'Northwind:General';
        })(ProductLangRow = Northwind.ProductLangRow || (Northwind.ProductLangRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Northwind/ProductLang';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductLangService = Northwind.ProductLangService || (Northwind.ProductLangService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Northwind.ProductLog';
            ProductLogRow.deletePermission = null;
            ProductLogRow.insertPermission = null;
            ProductLogRow.readPermission = '';
            ProductLogRow.updatePermission = null;
        })(ProductLogRow = Northwind.ProductLogRow || (Northwind.ProductLogRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Northwind.Product';
            ProductRow.lookupKey = 'Northwind.Product';
            function getLookup() {
                return Q.getLookup('Northwind.Product');
            }
            ProductRow.getLookup = getLookup;
            ProductRow.deletePermission = 'Northwind:General';
            ProductRow.insertPermission = 'Northwind:General';
            ProductRow.readPermission = 'Northwind:General';
            ProductRow.updatePermission = 'Northwind:General';
        })(ProductRow = Northwind.ProductRow || (Northwind.ProductRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Northwind/Product';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ProductService[x] = function (r, s, o) {
                    return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ProductService = Northwind.ProductService || (Northwind.ProductService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RegionForm = /** @class */ (function (_super) {
            __extends(RegionForm, _super);
            function RegionForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            RegionForm.formKey = 'Northwind.Region';
            return RegionForm;
        }(Serenity.PrefixedContext));
        Northwind.RegionForm = RegionForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RegionRow;
        (function (RegionRow) {
            RegionRow.idProperty = 'RegionID';
            RegionRow.nameProperty = 'RegionDescription';
            RegionRow.localTextPrefix = 'Northwind.Region';
            RegionRow.lookupKey = 'Northwind.Region';
            function getLookup() {
                return Q.getLookup('Northwind.Region');
            }
            RegionRow.getLookup = getLookup;
            RegionRow.deletePermission = 'Northwind:General';
            RegionRow.insertPermission = 'Northwind:General';
            RegionRow.readPermission = 'Northwind:General';
            RegionRow.updatePermission = 'Northwind:General';
        })(RegionRow = Northwind.RegionRow || (Northwind.RegionRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RegionService;
        (function (RegionService) {
            RegionService.baseUrl = 'Northwind/Region';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                RegionService[x] = function (r, s, o) {
                    return Q.serviceRequest(RegionService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(RegionService = Northwind.RegionService || (Northwind.RegionService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RiderByCounty;
        (function (RiderByCounty) {
            RiderByCounty[RiderByCounty["Alameda"] = 0] = "Alameda";
            RiderByCounty[RiderByCounty["ContraCosta"] = 1] = "ContraCosta";
        })(RiderByCounty = Northwind.RiderByCounty || (Northwind.RiderByCounty = {}));
        Serenity.Decorators.registerEnumType(RiderByCounty, 'MobilityMatters.Northwind.RiderByCounty', 'Northwind.RiderByCounty');
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryRow;
        (function (SalesByCategoryRow) {
            SalesByCategoryRow.nameProperty = 'CategoryName';
            SalesByCategoryRow.localTextPrefix = 'Northwind.SalesByCategory';
            SalesByCategoryRow.deletePermission = 'Northwind:General';
            SalesByCategoryRow.insertPermission = 'Northwind:General';
            SalesByCategoryRow.readPermission = 'Northwind:General';
            SalesByCategoryRow.updatePermission = 'Northwind:General';
        })(SalesByCategoryRow = Northwind.SalesByCategoryRow || (Northwind.SalesByCategoryRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SalesByCategoryService;
        (function (SalesByCategoryService) {
            SalesByCategoryService.baseUrl = 'Northwind/SalesByCategory';
            [
                'List'
            ].forEach(function (x) {
                SalesByCategoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(SalesByCategoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SalesByCategoryService = Northwind.SalesByCategoryService || (Northwind.SalesByCategoryService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperForm = /** @class */ (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            ShipperForm.formKey = 'Northwind.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Northwind.ShipperForm = ShipperForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Northwind.Shipper';
            ShipperRow.lookupKey = 'Northwind.Shipper';
            function getLookup() {
                return Q.getLookup('Northwind.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            ShipperRow.deletePermission = 'Northwind:General';
            ShipperRow.insertPermission = 'Northwind:General';
            ShipperRow.readPermission = 'Northwind:General';
            ShipperRow.updatePermission = 'Northwind:General';
        })(ShipperRow = Northwind.ShipperRow || (Northwind.ShipperRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Northwind/Shipper';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                ShipperService[x] = function (r, s, o) {
                    return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(ShipperService = Northwind.ShipperService || (Northwind.ShipperService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsForm = /** @class */ (function (_super) {
            __extends(SpecialNeedsForm, _super);
            function SpecialNeedsForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpecialNeedsForm.formKey = 'Northwind.SpecialNeeds';
            return SpecialNeedsForm;
        }(Serenity.PrefixedContext));
        Northwind.SpecialNeedsForm = SpecialNeedsForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleRow;
        (function (SpecialNeedsMultipleRow) {
            SpecialNeedsMultipleRow.idProperty = 'SpecialNeedsMultipleId';
            SpecialNeedsMultipleRow.localTextPrefix = 'Northwind.SpecialNeedsMultiple';
            SpecialNeedsMultipleRow.deletePermission = 'Administration:General';
            SpecialNeedsMultipleRow.insertPermission = 'Administration:General';
            SpecialNeedsMultipleRow.readPermission = 'Administration:General';
            SpecialNeedsMultipleRow.updatePermission = 'Administration:General';
        })(SpecialNeedsMultipleRow = Northwind.SpecialNeedsMultipleRow || (Northwind.SpecialNeedsMultipleRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleVolunteerForm = /** @class */ (function (_super) {
            __extends(SpecialNeedsMultipleVolunteerForm, _super);
            function SpecialNeedsMultipleVolunteerForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SpecialNeedsMultipleVolunteerForm.formKey = 'Northwind.SpecialNeedsMultipleVolunteer';
            return SpecialNeedsMultipleVolunteerForm;
        }(Serenity.PrefixedContext));
        Northwind.SpecialNeedsMultipleVolunteerForm = SpecialNeedsMultipleVolunteerForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleVolunteerRow;
        (function (SpecialNeedsMultipleVolunteerRow) {
            SpecialNeedsMultipleVolunteerRow.idProperty = 'SpecialNeedsMultipleVolunteerId';
            SpecialNeedsMultipleVolunteerRow.localTextPrefix = 'Northwind.SpecialNeedsMultipleVolunteer';
            SpecialNeedsMultipleVolunteerRow.deletePermission = 'Administration:General';
            SpecialNeedsMultipleVolunteerRow.insertPermission = 'Administration:General';
            SpecialNeedsMultipleVolunteerRow.readPermission = 'Administration:General';
            SpecialNeedsMultipleVolunteerRow.updatePermission = 'Administration:General';
        })(SpecialNeedsMultipleVolunteerRow = Northwind.SpecialNeedsMultipleVolunteerRow || (Northwind.SpecialNeedsMultipleVolunteerRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleVolunteerService;
        (function (SpecialNeedsMultipleVolunteerService) {
            SpecialNeedsMultipleVolunteerService.baseUrl = 'Northwind/SpecialNeedsMultipleVolunteer';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SpecialNeedsMultipleVolunteerService[x] = function (r, s, o) {
                    return Q.serviceRequest(SpecialNeedsMultipleVolunteerService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SpecialNeedsMultipleVolunteerService = Northwind.SpecialNeedsMultipleVolunteerService || (Northwind.SpecialNeedsMultipleVolunteerService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsRow;
        (function (SpecialNeedsRow) {
            SpecialNeedsRow.idProperty = 'SpecialNeedsID';
            SpecialNeedsRow.nameProperty = 'Name';
            SpecialNeedsRow.localTextPrefix = 'Northwind.SpecialNeeds';
            SpecialNeedsRow.lookupKey = 'Northwind.SpecialNeeds';
            function getLookup() {
                return Q.getLookup('Northwind.SpecialNeeds');
            }
            SpecialNeedsRow.getLookup = getLookup;
            SpecialNeedsRow.deletePermission = 'Administration:General';
            SpecialNeedsRow.insertPermission = 'Administration:General';
            SpecialNeedsRow.readPermission = 'Administration:General';
            SpecialNeedsRow.updatePermission = 'Administration:General';
        })(SpecialNeedsRow = Northwind.SpecialNeedsRow || (Northwind.SpecialNeedsRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsService;
        (function (SpecialNeedsService) {
            SpecialNeedsService.baseUrl = 'Northwind/SpecialNeeds';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SpecialNeedsService[x] = function (r, s, o) {
                    return Q.serviceRequest(SpecialNeedsService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SpecialNeedsService = Northwind.SpecialNeedsService || (Northwind.SpecialNeedsService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SupplierForm = /** @class */ (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            SupplierForm.formKey = 'Northwind.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Northwind.SupplierForm = SupplierForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Northwind.Supplier';
            SupplierRow.lookupKey = 'Northwind.Supplier';
            function getLookup() {
                return Q.getLookup('Northwind.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            SupplierRow.deletePermission = 'Northwind:General';
            SupplierRow.insertPermission = 'Northwind:General';
            SupplierRow.readPermission = 'Northwind:General';
            SupplierRow.updatePermission = 'Northwind:General';
        })(SupplierRow = Northwind.SupplierRow || (Northwind.SupplierRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Northwind/Supplier';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                SupplierService[x] = function (r, s, o) {
                    return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(SupplierService = Northwind.SupplierService || (Northwind.SupplierService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var TerritoryForm = /** @class */ (function (_super) {
            __extends(TerritoryForm, _super);
            function TerritoryForm() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            TerritoryForm.formKey = 'Northwind.Territory';
            return TerritoryForm;
        }(Serenity.PrefixedContext));
        Northwind.TerritoryForm = TerritoryForm;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var TerritoryRow;
        (function (TerritoryRow) {
            TerritoryRow.idProperty = 'ID';
            TerritoryRow.nameProperty = 'TerritoryID';
            TerritoryRow.localTextPrefix = 'Northwind.Territory';
            TerritoryRow.lookupKey = 'Northwind.Territory';
            function getLookup() {
                return Q.getLookup('Northwind.Territory');
            }
            TerritoryRow.getLookup = getLookup;
            TerritoryRow.deletePermission = 'Northwind:General';
            TerritoryRow.insertPermission = 'Northwind:General';
            TerritoryRow.readPermission = 'Northwind:General';
            TerritoryRow.updatePermission = 'Northwind:General';
        })(TerritoryRow = Northwind.TerritoryRow || (Northwind.TerritoryRow = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var TerritoryService;
        (function (TerritoryService) {
            TerritoryService.baseUrl = 'Northwind/Territory';
            [
                'Create',
                'Update',
                'Delete',
                'Retrieve',
                'List'
            ].forEach(function (x) {
                TerritoryService[x] = function (r, s, o) {
                    return Q.serviceRequest(TerritoryService.baseUrl + '/' + x, r, s, o);
                };
            });
        })(TerritoryService = Northwind.TerritoryService || (Northwind.TerritoryService = {}));
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Texts;
    (function (Texts) {
        MobilityMatters['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { AvailabilityAm: { AvailabilityAmid: 1, Day: 1 }, AvailabilityAmMultiple: { AvailabilityAmMultipleId: 1, AvailabilityAmid: 1, EmployeeId: 1 }, AvailabilityPm: { AvailabilityPmid: 1, Day: 1 }, AvailabilityPmMultiple: { AvailabilityPmMultipleId: 1, AvailabilityPmid: 1, EmployeeId: 1 }, Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Cities: { CityId: 1, Name: 1 }, CitiesMulti: { CitiesMultiId: 1, CityId: 1, CityName: 1, EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeDriversLicense: 1, EmployeeDriversLicenseExp: 1, EmployeeEmail: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeGender: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeId: 1, EmployeeInsurance: 1, EmployeeInsuranceExp: 1, EmployeeLastName: 1, EmployeeLicensePlate: 1, EmployeeLicensePlateExp: 1, EmployeeNotes: 1, EmployeeOnVacation: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeSmoker: 1, EmployeeSpecialNeedsId: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, EmployeeVehicleMake: 1, EmployeeVehicleModel: 1 }, Customer: { Active: 1, Address: 1, AgeCalc: 1, AltPhone: 1, BirthDate: 1, City: 1, CompanyName: 1, ContactName: 1, Country: 1, County: 1, CustomerID: 1, DNR: 1, DateOfLastTrip: 1, Dental: 1, EIO: 1, Email: 1, EmergencyName: 1, EmergencyName2: 1, EmergencyPhone: 1, EmergencyPhone2: 1, EmergencyRelation: 1, EmergencyRelation2: 1, EndDate: 1, FullName: 1, Gender: 1, Groceries: 1, ID: 1, LivingWith: 1, Medical: 1, NoteList: 1, OtherTransport: 1, PLanguage: 1, Phone: 1, PostalCode: 1, PreferredHospital: 1, Program: 1, ProgramOption: 1, Radio: 1, ReferralSource: 1, Region: 1, Representatives: 1, Residence: 1, Smoker: 1, SpecialNeedsList: 1, StartDate: 1, TEMP: 1, WhyEnding: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Dental: 1, Email: 1, EmergencyName: 1, EmergencyName2: 1, EmergencyPhone: 1, EmergencyPhone2: 1, EmergencyRelation: 1, EmergencyRelation2: 1, Gender: 1, Groceries: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, LivingWith: 1, Medical: 1, OtherTransport: 1, PreferredHospital: 1, ReferralSource: 1, TEMP: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Employees: { Address: 1, AvailabilityAMList: 1, AvailabilityPMList: 1, BirthDate: 1, CitiesList: 1, City: 1, Country: 1, DMVClearance: 1, DateOfLastTrip: 1, DriversLicense: 1, DriversLicenseExp: 1, Email: 1, EmployeeId: 1, EndDate: 1, Extension: 1, FirstName: 1, Gender: 1, HireDate: 1, HomePhone: 1, Inactive: 1, Insurance: 1, InsuranceExp: 1, Language: 1, LastName: 1, LicensePlate: 1, LicensePlateExp: 1, Notes: 1, OnVacation: 1, Photo: 1, PhotoPath: 1, PoliceClearance: 1, PostalCode: 1, ReferralSource: 1, Region: 1, ReportsTo: 1, ReportsTo1: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, ReturnDate: 1, Smoker: 1, SpecialNeedsList: 1, Title: 1, TitleOfCourtesy: 1, TrainingDate: 1, VehicleMake: 1, VehicleMake2: 1, VehicleModel: 1, VehicleModel2: 1, VolunteerRegion: 1, WhyEnding: 1 }, Mail: { Attachments: 1, Body: 1, Cc: 1, CreatedBy: 1, CreatedOn: 1, Direction: 1, ErrorMessage: 1, From: 1, IsSent: 1, MailId: 1, ModifiedBy: 1, ModifiedOn: 1, ReceivedDate: 1, SendDateTime: 1, Subject: 1, To: 1, Uid: 1 }, MailAttachments: { AttachmentId: 1, CreatedBy: 1, CreatedOn: 1, FilePath: 1, MailBody: 1, MailCc: 1, MailCreatedBy: 1, MailCreatedOn: 1, MailDirection: 1, MailFrom: 1, MailId: 1, MailModifiedBy: 1, MailModifiedOn: 1, MailReceivedDate: 1, MailSendDateTime: 1, MailSubject: 1, MailTo: 1, MailUid: 1, MimeType: 1, ModifiedBy: 1, ModifiedOn: 1, OriginalFileName: 1, Size: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { AppointmentTime: 1, AppointmentTime2: 1, ApptTime: 1, ApptTime2: 1, ApptType: 1, ApptType2: 1, CancelReason: 1, Cancelled: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerCountry: 1, CustomerFullName: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, CustomerSpecialNeedsList: 1, CustomerTEMP: 1, DestinationAddress: 1, DestinationAddress2: 1, DestinationCity: 1, DestinationCity2: 1, DestinationZip: 1, DestinationZip2: 1, DetailList: 1, DistanceText: 1, DistanceText2: 1, DistanceValue: 1, DistanceValue2: 1, DurationText: 1, DurationText2: 1, DurationValue: 1, DurationValue2: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, HowMany: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, RideCompleted: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, SpecialNeeds: { Name: 1, SpecialNeedsID: 1 }, SpecialNeedsMultiple: { CustomerId: 1, SpecialNeedsId: 1, SpecialNeedsMultipleId: 1 }, SpecialNeedsMultipleVolunteer: { EmployeeId: 1, SpecialNeedsId: 1, SpecialNeedsMultipleVolunteerId: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = MobilityMatters.Texts || (MobilityMatters.Texts = {}));
})(MobilityMatters || (MobilityMatters = {}));
//# sourceMappingURL=MobilityMatters.Web.js.map