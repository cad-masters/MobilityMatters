var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageForm = /** @class */ (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LanguageForm.init) {
                    LanguageForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(LanguageForm, [
                        'LanguageId', w0,
                        'LanguageName', w0
                    ]);
                }
                return _this;
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
            function RoleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RoleForm.init) {
                    RoleForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(RoleForm, [
                        'RoleName', w0
                    ]);
                }
                return _this;
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
            function UserForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!UserForm.init) {
                    UserForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.ImageUploadEditor;
                    var w3 = s.PasswordEditor;
                    Q.initFormType(UserForm, [
                        'Username', w0,
                        'DisplayName', w0,
                        'Email', w1,
                        'UserImage', w2,
                        'Password', w3,
                        'PasswordConfirm', w3,
                        'Source', w0
                    ]);
                }
                return _this;
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
    var Helpers;
    (function (Helpers) {
        var HardcodedValuesForm = /** @class */ (function (_super) {
            __extends(HardcodedValuesForm, _super);
            function HardcodedValuesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!HardcodedValuesForm.init) {
                    HardcodedValuesForm.init = true;
                    var s = Serenity;
                    var w0 = Helpers.HardcodedValuesEditor;
                    Q.initFormType(HardcodedValuesForm, [
                        'SomeValue', w0
                    ]);
                }
                return _this;
            }
            HardcodedValuesForm.formKey = 'Helpers.HarcodedValues';
            return HardcodedValuesForm;
        }(Serenity.PrefixedContext));
        Helpers.HardcodedValuesForm = HardcodedValuesForm;
    })(Helpers = MobilityMatters.Helpers || (MobilityMatters.Helpers = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = /** @class */ (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ChangePasswordForm.init) {
                    ChangePasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ChangePasswordForm, [
                        'OldPassword', w0,
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
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
            function ForgotPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ForgotPasswordForm.init) {
                    ForgotPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.EmailEditor;
                    Q.initFormType(ForgotPasswordForm, [
                        'Email', w0
                    ]);
                }
                return _this;
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
            function LoginForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!LoginForm.init) {
                    LoginForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.PasswordEditor;
                    Q.initFormType(LoginForm, [
                        'Username', w0,
                        'Password', w1
                    ]);
                }
                return _this;
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
            function ResetPasswordForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ResetPasswordForm.init) {
                    ResetPasswordForm.init = true;
                    var s = Serenity;
                    var w0 = s.PasswordEditor;
                    Q.initFormType(ResetPasswordForm, [
                        'NewPassword', w0,
                        'ConfirmPassword', w0
                    ]);
                }
                return _this;
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
            function SignUpForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SignUpForm.init) {
                    SignUpForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.EmailEditor;
                    var w2 = s.PasswordEditor;
                    Q.initFormType(SignUpForm, [
                        'DisplayName', w0,
                        'Email', w1,
                        'ConfirmEmail', w1,
                        'Password', w2,
                        'ConfirmPassword', w2
                    ]);
                }
                return _this;
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
            function AvailabilityAmForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvailabilityAmForm.init) {
                    AvailabilityAmForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AvailabilityAmForm, [
                        'Day', w0
                    ]);
                }
                return _this;
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
            function AvailabilityAmMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvailabilityAmMultipleForm.init) {
                    AvailabilityAmMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(AvailabilityAmMultipleForm, [
                        'AvailabilityAmid', w0,
                        'EmployeeId', w0
                    ]);
                }
                return _this;
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
            function AvailabilityPmForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvailabilityPmForm.init) {
                    AvailabilityPmForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(AvailabilityPmForm, [
                        'Day', w0
                    ]);
                }
                return _this;
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
            function AvailabilityPmMultipleForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!AvailabilityPmMultipleForm.init) {
                    AvailabilityPmMultipleForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(AvailabilityPmMultipleForm, [
                        'AvailabilityPmid', w0,
                        'EmployeeId', w0
                    ]);
                }
                return _this;
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
            function CategoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CategoryForm.init) {
                    CategoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CategoryForm, [
                        'CategoryName', w0,
                        'Description', w0
                    ]);
                }
                return _this;
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
            function CitiesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CitiesForm.init) {
                    CitiesForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(CitiesForm, [
                        'Name', w0
                    ]);
                }
                return _this;
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
            function CitiesMultiForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CitiesMultiForm.init) {
                    CitiesMultiForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(CitiesMultiForm, [
                        'CityId', w0,
                        'EmployeeId', w0
                    ]);
                }
                return _this;
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
            function CustomerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!CustomerForm.init) {
                    CustomerForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EmailEditor;
                    var w4 = Northwind.NotesEditor;
                    var w5 = MobilityMatters.Helpers.HardcodedValuesGenderEditor;
                    var w6 = s.DateEditor;
                    var w7 = s.IntegerEditor;
                    var w8 = s.TextAreaEditor;
                    Q.initFormType(CustomerForm, [
                        'CustomerID', w0,
                        'CompanyName', w0,
                        'ContactName', w0,
                        'Program', w1,
                        'ProgramOption', w1,
                        'ReferralSource', w0,
                        'TEMP', w2,
                        'Active', w2,
                        'Phone', w0,
                        'Email', w3,
                        'EmergencyName', w0,
                        'EmergencyPhone', w0,
                        'EmergencyRelation', w0,
                        'EmergencyName2', w0,
                        'EmergencyPhone2', w0,
                        'EmergencyRelation2', w0,
                        'Address', w0,
                        'Country', w1,
                        'City', w1,
                        'Region', w0,
                        'PostalCode', w0,
                        'Residence', w1,
                        'LivingWith', w0,
                        'NoteList', w4,
                        'Gender', w5,
                        'BirthDate', w6,
                        'AgeCalc', w7,
                        'Race', w0,
                        'Income', w0,
                        'PLanguage', w0,
                        'SpecialNeedsList', w1,
                        'SpecialNeedsPlainText', w8,
                        'DNR', w1,
                        'Radio', w2,
                        'EIO', w2,
                        'PreferredHospital', w0,
                        'Smoker', w2,
                        'Medical', w0,
                        'Dental', w0,
                        'Groceries', w0,
                        'OtherTransport', w0
                    ]);
                }
                return _this;
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
            function EmployeesForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!EmployeesForm.init) {
                    EmployeesForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.EmailEditor;
                    var w4 = s.DateEditor;
                    var w5 = MobilityMatters.Helpers.HardcodedValuesGenderEditor;
                    var w6 = s.TextAreaEditor;
                    Q.initFormType(EmployeesForm, [
                        'Title', w0,
                        'TitleOfCourtesy', w1,
                        'OnVacation', w2,
                        'Inactive', w2,
                        'LastName', w1,
                        'FirstName', w1,
                        'HomePhone', w1,
                        'Email', w3,
                        'COVIDResults', w1,
                        'COVIDTestDate', w4,
                        'Address', w1,
                        'City', w1,
                        'Region', w1,
                        'PostalCode', w1,
                        'BirthDate', w4,
                        'Gender', w5,
                        'Smoker', w2,
                        'Language', w1,
                        'DriversLicense', w1,
                        'DriversLicenseExp', w4,
                        'LicensePlate', w1,
                        'LicensePlateExp', w4,
                        'Insurance', w1,
                        'InsuranceExp', w4,
                        'VehicleMake', w1,
                        'VehicleModel', w1,
                        'VehicleMake2', w1,
                        'VehicleModel2', w1,
                        'DMVClearance', w2,
                        'PoliceClearance', w2,
                        'ReferralSource', w1,
                        'TrainingDate', w4,
                        'HireDate', w4,
                        'EndDate', w4,
                        'WhyEnding', w1,
                        'CitiesList', w0,
                        'AvailabilityAMList', w0,
                        'AvailabilityPMList', w0,
                        'NotesPlainText', w6
                    ]);
                }
                return _this;
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
            EmployeesRow.lookupKey = 'Northwind.Employees';
            function getLookup() {
                return Q.getLookup('Northwind.Employees');
            }
            EmployeesRow.getLookup = getLookup;
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
            function MailAttachmentsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailAttachmentsForm.init) {
                    MailAttachmentsForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    var w2 = s.DateEditor;
                    Q.initFormType(MailAttachmentsForm, [
                        'MailId', w0,
                        'MimeType', w1,
                        'Size', w0,
                        'FilePath', w1,
                        'OriginalFileName', w1,
                        'CreatedBy', w0,
                        'CreatedOn', w2,
                        'ModifiedBy', w0,
                        'ModifiedOn', w2
                    ]);
                }
                return _this;
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
            function MailComposeForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailComposeForm.init) {
                    MailComposeForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.StringEditor;
                    var w2 = Northwind.MailContentEditor;
                    var w3 = s.MultipleImageUploadEditor;
                    var w4 = s.IntegerEditor;
                    Q.initFormType(MailComposeForm, [
                        'To', w0,
                        'Cc', w0,
                        'Subject', w1,
                        'BodyHtml', w2,
                        'Attachments', w3,
                        'ReplyToMailId', w4
                    ]);
                }
                return _this;
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
            function MailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!MailForm.init) {
                    MailForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.MailBodyViewer;
                    var w2 = s.MultipleImageUploadEditor;
                    var w3 = s.DateEditor;
                    var w4 = s.BooleanEditor;
                    Q.initFormType(MailForm, [
                        'From', w0,
                        'To', w0,
                        'Cc', w0,
                        'Subject', w0,
                        'Body', w1,
                        'Attachments', w2,
                        'SendDateTime', w3,
                        'IsSent', w4,
                        'ErrorMessage', w0,
                        'ReceivedDate', w3
                    ]);
                }
                return _this;
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
            function OrderDetailForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderDetailForm.init) {
                    OrderDetailForm.init = true;
                    var s = Serenity;
                    var w0 = s.LookupEditor;
                    var w1 = s.DecimalEditor;
                    var w2 = s.IntegerEditor;
                    Q.initFormType(OrderDetailForm, [
                        'ProductID', w0,
                        'UnitPrice', w1,
                        'Quantity', w2,
                        'Discount', w1
                    ]);
                }
                return _this;
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
            function OrderForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!OrderForm.init) {
                    OrderForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = Northwind.CustomerEditor;
                    var w2 = s.DateEditor;
                    var w3 = s.StringEditor;
                    var w4 = s.LookupEditor;
                    var w5 = MobilityMatters.Helpers.HardcodedValuesEditor;
                    var w6 = s.BooleanEditor;
                    var w7 = s.TextAreaEditor;
                    Q.initFormType(OrderForm, [
                        'OrderID', w0,
                        'CustomerID', w1,
                        'OrderDate', w2,
                        'RequiredDate', w3,
                        'EmployeeID', w4,
                        'HowMany', w5,
                        'ConfirmRide', w6,
                        'RideCompleted', w6,
                        'Cancelled', w6,
                        'CancelReason', w3,
                        'CustomerSpecialNeedsPlainText', w7,
                        'CustomerSpecialConditionsDirections', w7,
                        'AppointmentTime', w3,
                        'ShipAddress', w3,
                        'ShipCity', w3,
                        'ShipPostalCode', w3,
                        'DestinationAddress', w3,
                        'DestinationApartment', w3,
                        'DestinationCity', w3,
                        'DestinationZip', w3,
                        'ApptTime', w3,
                        'ApptType', w3,
                        'DistanceText', w3,
                        'DurationText', w3,
                        'AppointmentTime2', w3,
                        'DestinationAddress2', w3,
                        'DestinationApartment2', w3,
                        'DestinationCity2', w3,
                        'DestinationZip2', w3,
                        'ApptTime2', w3,
                        'ApptType2', w3,
                        'DistanceText2', w3,
                        'DurationText2', w3,
                        'AppointmentTime3', w3,
                        'DestinationAddress3', w3,
                        'DestinationApartment3', w3,
                        'DestinationCity3', w3,
                        'DestinationZip3', w3,
                        'ApptTime3', w3,
                        'ApptType3', w3,
                        'DistanceText3', w3,
                        'DurationText3', w3,
                        'ActualTotalHours', w3,
                        'ActualTotalMileage', w3
                    ]);
                }
                return _this;
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
                'DistanceMatrix',
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
            function ProductForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ProductForm.init) {
                    ProductForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.ImageUploadEditor;
                    var w2 = s.BooleanEditor;
                    var w3 = s.LookupEditor;
                    var w4 = s.DecimalEditor;
                    var w5 = s.IntegerEditor;
                    Q.initFormType(ProductForm, [
                        'ProductName', w0,
                        'ProductImage', w1,
                        'Discontinued', w2,
                        'SupplierID', w3,
                        'CategoryID', w3,
                        'QuantityPerUnit', w0,
                        'UnitPrice', w4,
                        'UnitsInStock', w5,
                        'UnitsOnOrder', w5,
                        'ReorderLevel', w5
                    ]);
                }
                return _this;
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
            function RegionForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!RegionForm.init) {
                    RegionForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    var w1 = s.StringEditor;
                    Q.initFormType(RegionForm, [
                        'RegionID', w0,
                        'RegionDescription', w1
                    ]);
                }
                return _this;
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
            function ShipperForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!ShipperForm.init) {
                    ShipperForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = Northwind.PhoneEditor;
                    Q.initFormType(ShipperForm, [
                        'CompanyName', w0,
                        'Phone', w1
                    ]);
                }
                return _this;
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
            function SpecialNeedsForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SpecialNeedsForm.init) {
                    SpecialNeedsForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SpecialNeedsForm, [
                        'Name', w0
                    ]);
                }
                return _this;
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
            function SpecialNeedsMultipleVolunteerForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SpecialNeedsMultipleVolunteerForm.init) {
                    SpecialNeedsMultipleVolunteerForm.init = true;
                    var s = Serenity;
                    var w0 = s.IntegerEditor;
                    Q.initFormType(SpecialNeedsMultipleVolunteerForm, [
                        'SpecialNeedsId', w0,
                        'EmployeeId', w0
                    ]);
                }
                return _this;
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
            function SupplierForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!SupplierForm.init) {
                    SupplierForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    Q.initFormType(SupplierForm, [
                        'CompanyName', w0,
                        'ContactName', w0,
                        'ContactTitle', w0,
                        'Address', w0,
                        'Region', w0,
                        'PostalCode', w0,
                        'Country', w0,
                        'City', w0,
                        'Phone', w0,
                        'Fax', w0,
                        'HomePage', w0
                    ]);
                }
                return _this;
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
            function TerritoryForm(prefix) {
                var _this = _super.call(this, prefix) || this;
                if (!TerritoryForm.init) {
                    TerritoryForm.init = true;
                    var s = Serenity;
                    var w0 = s.StringEditor;
                    var w1 = s.LookupEditor;
                    Q.initFormType(TerritoryForm, [
                        'TerritoryID', w0,
                        'TerritoryDescription', w0,
                        'RegionID', w1
                    ]);
                }
                return _this;
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
        MobilityMatters['Texts'] = Q.proxyTexts(Texts, '', { Db: { Administration: { Language: { Id: 1, LanguageId: 1, LanguageName: 1 }, Role: { RoleId: 1, RoleName: 1 }, RolePermission: { PermissionKey: 1, RoleId: 1, RolePermissionId: 1, RoleRoleName: 1 }, Translation: { CustomText: 1, EntityPlural: 1, Key: 1, OverrideConfirmation: 1, SaveChangesButton: 1, SourceLanguage: 1, SourceText: 1, TargetLanguage: 1, TargetText: 1 }, User: { DisplayName: 1, Email: 1, InsertDate: 1, InsertUserId: 1, IsActive: 1, LastDirectoryUpdate: 1, Password: 1, PasswordConfirm: 1, PasswordHash: 1, PasswordSalt: 1, Source: 1, UpdateDate: 1, UpdateUserId: 1, UserId: 1, UserImage: 1, Username: 1 }, UserPermission: { Granted: 1, PermissionKey: 1, User: 1, UserId: 1, UserPermissionId: 1, Username: 1 }, UserRole: { RoleId: 1, User: 1, UserId: 1, UserRoleId: 1, Username: 1 } }, Common: { UserPreference: { Name: 1, PreferenceType: 1, UserId: 1, UserPreferenceId: 1, Value: 1 } }, Northwind: { AvailabilityAm: { AvailabilityAmid: 1, Day: 1 }, AvailabilityAmMultiple: { AvailabilityAmMultipleId: 1, AvailabilityAmid: 1, EmployeeId: 1 }, AvailabilityPm: { AvailabilityPmid: 1, Day: 1 }, AvailabilityPmMultiple: { AvailabilityPmMultipleId: 1, AvailabilityPmid: 1, EmployeeId: 1 }, Category: { CategoryID: 1, CategoryName: 1, Description: 1, Picture: 1 }, CategoryLang: { CategoryId: 1, CategoryName: 1, Description: 1, Id: 1, LanguageId: 1 }, Cities: { CityId: 1, Name: 1 }, CitiesMulti: { CitiesMultiId: 1, CityId: 1, CityName: 1, EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeDriversLicense: 1, EmployeeDriversLicenseExp: 1, EmployeeEmail: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeGender: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeId: 1, EmployeeInsurance: 1, EmployeeInsuranceExp: 1, EmployeeLastName: 1, EmployeeLicensePlate: 1, EmployeeLicensePlateExp: 1, EmployeeNotes: 1, EmployeeOnVacation: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeSmoker: 1, EmployeeSpecialNeedsId: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, EmployeeVehicleMake: 1, EmployeeVehicleModel: 1 }, Customer: { Active: 1, Address: 1, AgeCalc: 1, AltPhone: 1, BirthDate: 1, City: 1, CompanyName: 1, ContactName: 1, Country: 1, County: 1, CustomerID: 1, DNR: 1, DateOfLastTrip: 1, Dental: 1, EIO: 1, Email: 1, EmergencyName: 1, EmergencyName2: 1, EmergencyPhone: 1, EmergencyPhone2: 1, EmergencyRelation: 1, EmergencyRelation2: 1, EndDate: 1, FullName: 1, Gender: 1, Groceries: 1, ID: 1, Income: 1, LivingWith: 1, Medical: 1, NoteList: 1, OtherTransport: 1, PLanguage: 1, Phone: 1, PostalCode: 1, PreferredHospital: 1, Program: 1, ProgramOption: 1, Race: 1, Radio: 1, ReferralSource: 1, Region: 1, Representatives: 1, Residence: 1, Smoker: 1, SpecialConditionsDirections: 1, SpecialNeedsList: 1, SpecialNeedsPlainText: 1, StartDate: 1, TEMP: 1, WhyEnding: 1 }, CustomerCustomerDemo: { CustomerAddress: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerContactTitle: 1, CustomerCountry: 1, CustomerFax: 1, CustomerID: 1, CustomerPhone: 1, CustomerPostalCode: 1, CustomerRegion: 1, CustomerTypeCustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDemographic: { CustomerDesc: 1, CustomerTypeID: 1, ID: 1 }, CustomerDetails: { Dental: 1, Email: 1, EmergencyName: 1, EmergencyName2: 1, EmergencyPhone: 1, EmergencyPhone2: 1, EmergencyRelation: 1, EmergencyRelation2: 1, Gender: 1, Groceries: 1, Id: 1, LastContactDate: 1, LastContactedBy: 1, LastContactedByAddress: 1, LastContactedByBirthDate: 1, LastContactedByCity: 1, LastContactedByCountry: 1, LastContactedByExtension: 1, LastContactedByFirstName: 1, LastContactedByHireDate: 1, LastContactedByHomePhone: 1, LastContactedByLastName: 1, LastContactedByNotes: 1, LastContactedByPhoto: 1, LastContactedByPhotoPath: 1, LastContactedByPostalCode: 1, LastContactedByRegion: 1, LastContactedByReportsTo: 1, LastContactedByTitle: 1, LastContactedByTitleOfCourtesy: 1, LivingWith: 1, Medical: 1, OtherTransport: 1, PreferredHospital: 1, ReferralSource: 1, TEMP: 1 }, CustomerGrossSales: { ContactName: 1, CustomerId: 1, GrossAmount: 1, ProductId: 1, ProductName: 1 }, CustomerRepresentatives: { CustomerId: 1, EmployeeId: 1, RepresentativeId: 1 }, Employee: { Address: 1, BirthDate: 1, City: 1, Country: 1, EmployeeID: 1, Extension: 1, FirstName: 1, FullName: 1, Gender: 1, HireDate: 1, HomePhone: 1, LastName: 1, Notes: 1, Photo: 1, PhotoPath: 1, PostalCode: 1, Region: 1, ReportsTo: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToFullName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToReportsTo: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, Title: 1, TitleOfCourtesy: 1 }, EmployeeTerritory: { EmployeeAddress: 1, EmployeeBirthDate: 1, EmployeeCity: 1, EmployeeCountry: 1, EmployeeExtension: 1, EmployeeFirstName: 1, EmployeeHireDate: 1, EmployeeHomePhone: 1, EmployeeID: 1, EmployeeLastName: 1, EmployeeNotes: 1, EmployeePhoto: 1, EmployeePhotoPath: 1, EmployeePostalCode: 1, EmployeeRegion: 1, EmployeeReportsTo: 1, EmployeeTitle: 1, EmployeeTitleOfCourtesy: 1, TerritoryID: 1, TerritoryRegionID: 1, TerritoryTerritoryDescription: 1 }, Employees: { Address: 1, AvailabilityAMList: 1, AvailabilityPMList: 1, BirthDate: 1, COVIDResults: 1, COVIDTestDate: 1, CitiesList: 1, City: 1, Country: 1, DMVClearance: 1, DateOfLastTrip: 1, DriversLicense: 1, DriversLicenseExp: 1, Email: 1, EmployeeId: 1, EndDate: 1, Extension: 1, FirstName: 1, Gender: 1, HireDate: 1, HomePhone: 1, Inactive: 1, Insurance: 1, InsuranceExp: 1, Language: 1, LastName: 1, LicensePlate: 1, LicensePlateExp: 1, Notes: 1, NotesPlainText: 1, OnVacation: 1, Photo: 1, PhotoPath: 1, PoliceClearance: 1, PostalCode: 1, ReferralSource: 1, Region: 1, ReportsTo: 1, ReportsTo1: 1, ReportsToAddress: 1, ReportsToBirthDate: 1, ReportsToCity: 1, ReportsToCountry: 1, ReportsToExtension: 1, ReportsToFirstName: 1, ReportsToHireDate: 1, ReportsToHomePhone: 1, ReportsToLastName: 1, ReportsToNotes: 1, ReportsToPhoto: 1, ReportsToPhotoPath: 1, ReportsToPostalCode: 1, ReportsToRegion: 1, ReportsToTitle: 1, ReportsToTitleOfCourtesy: 1, ReturnDate: 1, Smoker: 1, SpecialNeedsList: 1, Title: 1, TitleOfCourtesy: 1, TrainingDate: 1, VehicleMake: 1, VehicleMake2: 1, VehicleModel: 1, VehicleModel2: 1, VolunteerRegion: 1, WhyEnding: 1 }, Mail: { Attachments: 1, Body: 1, Cc: 1, CreatedBy: 1, CreatedOn: 1, Direction: 1, ErrorMessage: 1, From: 1, IsSent: 1, MailId: 1, ModifiedBy: 1, ModifiedOn: 1, ReceivedDate: 1, SendDateTime: 1, Subject: 1, To: 1, Uid: 1 }, MailAttachments: { AttachmentId: 1, CreatedBy: 1, CreatedOn: 1, FilePath: 1, MailBody: 1, MailCc: 1, MailCreatedBy: 1, MailCreatedOn: 1, MailDirection: 1, MailFrom: 1, MailId: 1, MailModifiedBy: 1, MailModifiedOn: 1, MailReceivedDate: 1, MailSendDateTime: 1, MailSubject: 1, MailTo: 1, MailUid: 1, MimeType: 1, ModifiedBy: 1, ModifiedOn: 1, OriginalFileName: 1, Size: 1 }, Note: { EntityId: 1, EntityType: 1, InsertDate: 1, InsertUserDisplayName: 1, InsertUserId: 1, NoteId: 1, Text: 1 }, Order: { ActualDuration1: 1, ActualDuration2: 1, ActualDuration3: 1, ActualDurationMins1: 1, ActualDurationMins2: 1, ActualDurationMins3: 1, ActualTotalHours: 1, ActualTotalMileage: 1, ActualTotalMinutes: 1, AppointmentTime: 1, AppointmentTime2: 1, AppointmentTime3: 1, ApptTime: 1, ApptTime2: 1, ApptTime3: 1, ApptType: 1, ApptType2: 1, ApptType3: 1, CancelReason: 1, Cancelled: 1, ConfirmRide: 1, CustomerCity: 1, CustomerCompanyName: 1, CustomerContactName: 1, CustomerCountry: 1, CustomerFullName: 1, CustomerID: 1, CustomerPhone: 1, CustomerRegion: 1, CustomerSpecialConditionsDirections: 1, CustomerSpecialNeedsList: 1, CustomerSpecialNeedsPlainText: 1, CustomerTEMP: 1, DestinationAddress: 1, DestinationAddress2: 1, DestinationAddress3: 1, DestinationApartment: 1, DestinationApartment2: 1, DestinationApartment3: 1, DestinationCity: 1, DestinationCity2: 1, DestinationCity3: 1, DestinationZip: 1, DestinationZip2: 1, DestinationZip3: 1, DetailList: 1, DistanceText: 1, DistanceText2: 1, DistanceText3: 1, DistanceValue: 1, DistanceValue2: 1, DistanceValue3: 1, DurationText: 1, DurationText2: 1, DurationText3: 1, DurationValue: 1, DurationValue2: 1, DurationValue3: 1, EmployeeFullName: 1, EmployeeGender: 1, EmployeeID: 1, EmployeeReportsToFullName: 1, Freight: 1, HowMany: 1, OrderDate: 1, OrderID: 1, RequiredDate: 1, RideCompleted: 1, ShipAddress: 1, ShipCity: 1, ShipCountry: 1, ShipName: 1, ShipPostalCode: 1, ShipRegion: 1, ShipVia: 1, ShipViaCompanyName: 1, ShipViaPhone: 1, ShippedDate: 1, ShippingState: 1 }, OrderDetail: { DetailID: 1, Discount: 1, LineTotal: 1, OrderCustomerID: 1, OrderDate: 1, OrderEmployeeID: 1, OrderID: 1, OrderShipCity: 1, OrderShipCountry: 1, OrderShipVia: 1, OrderShippedDate: 1, ProductDiscontinued: 1, ProductID: 1, ProductName: 1, ProductQuantityPerUnit: 1, ProductSupplierID: 1, ProductUnitPrice: 1, Quantity: 1, UnitPrice: 1 }, Product: { CategoryDescription: 1, CategoryID: 1, CategoryName: 1, CategoryPicture: 1, Discontinued: 1, ProductID: 1, ProductImage: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierAddress: 1, SupplierCity: 1, SupplierCompanyName: 1, SupplierContactName: 1, SupplierContactTitle: 1, SupplierCountry: 1, SupplierFax: 1, SupplierHomePage: 1, SupplierID: 1, SupplierPhone: 1, SupplierPostalCode: 1, SupplierRegion: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1 }, ProductLang: { Id: 1, LanguageId: 1, ProductId: 1, ProductName: 1 }, ProductLog: { CategoryID: 1, ChangingUserId: 1, Discontinued: 1, OperationType: 1, ProductID: 1, ProductImage: 1, ProductLogID: 1, ProductName: 1, QuantityPerUnit: 1, ReorderLevel: 1, SupplierID: 1, UnitPrice: 1, UnitsInStock: 1, UnitsOnOrder: 1, ValidFrom: 1, ValidUntil: 1 }, Region: { RegionDescription: 1, RegionID: 1 }, SalesByCategory: { CategoryId: 1, CategoryName: 1, ProductName: 1, ProductSales: 1 }, Shipper: { CompanyName: 1, Phone: 1, ShipperID: 1 }, SpecialNeeds: { Name: 1, SpecialNeedsID: 1 }, SpecialNeedsMultiple: { CustomerId: 1, SpecialNeedsId: 1, SpecialNeedsMultipleId: 1 }, SpecialNeedsMultipleVolunteer: { EmployeeId: 1, SpecialNeedsId: 1, SpecialNeedsMultipleVolunteerId: 1 }, Supplier: { Address: 1, City: 1, CompanyName: 1, ContactName: 1, ContactTitle: 1, Country: 1, Fax: 1, HomePage: 1, Phone: 1, PostalCode: 1, Region: 1, SupplierID: 1 }, Territory: { ID: 1, RegionDescription: 1, RegionID: 1, TerritoryDescription: 1, TerritoryID: 1 } } }, Forms: { Membership: { ChangePassword: { FormTitle: 1, SubmitButton: 1, Success: 1 }, ForgotPassword: { BackToLogin: 1, FormInfo: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, Login: { FacebookButton: 1, ForgotPassword: 1, FormTitle: 1, GoogleButton: 1, OR: 1, RememberMe: 1, SignInButton: 1, SignUpButton: 1 }, ResetPassword: { BackToLogin: 1, EmailSubject: 1, FormTitle: 1, SubmitButton: 1, Success: 1 }, SignUp: { AcceptTerms: 1, ActivateEmailSubject: 1, ActivationCompleteMessage: 1, BackToLogin: 1, ConfirmEmail: 1, ConfirmPassword: 1, DisplayName: 1, Email: 1, FormInfo: 1, FormTitle: 1, Password: 1, SubmitButton: 1, Success: 1 } } }, Site: { AccessDenied: { ClickToChangeUser: 1, ClickToLogin: 1, LackPermissions: 1, NotLoggedIn: 1, PageTitle: 1 }, BasicProgressDialog: { CancelTitle: 1, PleaseWait: 1 }, BulkServiceAction: { AllHadErrorsFormat: 1, AllSuccessFormat: 1, ConfirmationFormat: 1, ErrorCount: 1, NothingToProcess: 1, SomeHadErrorsFormat: 1, SuccessCount: 1 }, Dashboard: { ContentDescription: 1 }, Layout: { FooterCopyright: 1, FooterInfo: 1, FooterRights: 1, GeneralSettings: 1, Language: 1, Theme: 1, ThemeBlack: 1, ThemeBlackLight: 1, ThemeBlue: 1, ThemeBlueLight: 1, ThemeGreen: 1, ThemeGreenLight: 1, ThemePurple: 1, ThemePurpleLight: 1, ThemeRed: 1, ThemeRedLight: 1, ThemeYellow: 1, ThemeYellowLight: 1 }, RolePermissionDialog: { DialogTitle: 1, EditButton: 1, SaveSuccess: 1 }, UserDialog: { EditPermissionsButton: 1, EditRolesButton: 1 }, UserPermissionDialog: { DialogTitle: 1, Grant: 1, Permission: 1, Revoke: 1, SaveSuccess: 1 }, UserRoleDialog: { DialogTitle: 1, SaveSuccess: 1 }, ValidationError: { Title: 1 } }, Validation: { AuthenticationError: 1, CantFindUserWithEmail: 1, CurrentPasswordMismatch: 1, DeleteForeignKeyError: 1, EmailConfirm: 1, EmailInUse: 1, InvalidActivateToken: 1, InvalidResetToken: 1, MinRequiredPasswordLength: 1, NorthwindPhone: 1, NorthwindPhoneMultiple: 1, SavePrimaryKeyError: 1 } });
    })(Texts = MobilityMatters.Texts || (MobilityMatters.Texts = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = /** @class */ (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.LanguageForm(_this.idPrefix);
                return _this;
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = /** @class */ (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                return _super.call(this, container) || this;
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return ["LanguageName" /* LanguageName */];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleDialog = /** @class */ (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Administration.RoleForm(_this.idPrefix);
                return _this;
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleGrid = /** @class */ (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                return _super.call(this, container) || this;
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return ["RoleName" /* RoleName */];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = /** @class */ (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: _this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return ({ PermissionKey: x }); });
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.value.map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = /** @class */ (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.element.on('keyup.' + _this.uniqueName + ' change.' + _this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
                return _this;
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return Promise.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserDialog = /** @class */ (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Administration.UserForm(_this.idPrefix);
                _this.form.Password.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                _this.form.PasswordConfirm.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
                return _this;
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'fa-users text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'fa-lock text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserGrid = /** @class */ (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                return _super.call(this, container) || this;
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return ["Username" /* Username */];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = MobilityMatters.Authorization || (MobilityMatters.Authorization = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = /** @class */ (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                _this._rolePermissions = {};
                _this._implicitPermissions = {};
                var titleByKey = {};
                var permissionKeys = _this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return ({
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }); });
                _this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                _this.setItems(items);
                return _this;
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.roleOrImplicit = function (key) {
                if (this._rolePermissions[key])
                    return true;
                for (var _i = 0, _a = Object.keys(this._rolePermissions); _i < _a.length; _i++) {
                    var k = _a[_i];
                    var d = this._implicitPermissions[k];
                    if (d && d[key])
                        return true;
                }
                for (var _b = 0, _c = Object.keys(this._implicitPermissions); _b < _c.length; _b++) {
                    var i = _c[_b];
                    var item = this.view.getItemById(i);
                    if (item && item.GrantRevoke == true) {
                        var d = this._implicitPermissions[i];
                        if (d && d[key])
                            return true;
                    }
                }
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.roleOrImplicit(x.Key)); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.roleOrImplicit(item.Key));
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            Object.defineProperty(PermissionCheckEditor.prototype, "value", {
                get: function () {
                    var result = [];
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                            result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                        }
                    }
                    return result;
                },
                set: function (value) {
                    for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                        var item = _a[_i];
                        item.GrantRevoke = null;
                    }
                    if (value != null) {
                        for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                            var row = value_1[_b];
                            var r = this.view.getItemById(row.PermissionKey);
                            if (r) {
                                r.GrantRevoke = Q.coalesce(row.Granted, true);
                            }
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "rolePermissions", {
                get: function () {
                    return Object.keys(this._rolePermissions);
                },
                set: function (value) {
                    this._rolePermissions = {};
                    if (value) {
                        for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                            var k = value_2[_i];
                            this._rolePermissions[k] = true;
                        }
                    }
                    this.setItems(this.getItems());
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(PermissionCheckEditor.prototype, "implicitPermissions", {
                set: function (value) {
                    this._implicitPermissions = {};
                    if (value) {
                        for (var _i = 0, _a = Object.keys(value); _i < _a.length; _i++) {
                            var k = _a[_i];
                            this._implicitPermissions[k] = this._implicitPermissions[k] || {};
                            var l = value[k];
                            if (l) {
                                for (var _b = 0, l_1 = l; _b < l_1.length; _b++) {
                                    var s = l_1[_b];
                                    this._implicitPermissions[k][s] = true;
                                }
                            }
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = /** @class */ (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.PermissionCheckEditor(_this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.value = response.Entities;
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: _this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.rolePermissions = response.Entities;
                });
                _this.permissions.implicitPermissions = Q.getRemoteData('Administration.ImplicitPermissions');
                return _this;
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.value,
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = /** @class */ (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                return _super.call(this, div) || this;
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return ({
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }); });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = /** @class */ (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.permissions = new Administration.RoleCheckEditor(_this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: _this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
                return _this;
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = MobilityMatters.Administration || (MobilityMatters.Administration = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = MobilityMatters.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = MobilityMatters.LanguageList || (MobilityMatters.LanguageList = {}));
})(MobilityMatters || (MobilityMatters = {}));
/// <reference path="../Common/Helpers/LanguageList.ts" />
var MobilityMatters;
(function (MobilityMatters) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('MobilityMatters');
        Serenity.EntityDialog.defaultLanguageList = MobilityMatters.LanguageList.getValue;
        if ($.fn['colorbox']) {
            $.fn['colorbox'].settings.maxWidth = "95%";
            $.fn['colorbox'].settings.maxHeight = "95%";
        }
        window.onerror = Q.ErrorHandling.runtimeErrorHandler;
    })(ScriptInitialization = MobilityMatters.ScriptInitialization || (MobilityMatters.ScriptInitialization = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var BasicProgressDialog = /** @class */ (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = _super.call(this) || this;
            _this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
            return _this;
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    MobilityMatters.BasicProgressDialog = BasicProgressDialog;
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var BulkServiceAction = /** @class */ (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new MobilityMatters.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.on('dialogbeforeclose panelbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        if (element.hasClass('ui-dialog-content'))
                            element.dialog('close');
                        else if (element.hasClass('s-Panel'))
                            Serenity.TemplatedDialog.closePanel(element);
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = MobilityMatters.DialogUtils || (MobilityMatters.DialogUtils = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var EnumSelectFormatter = /** @class */ (function () {
            function EnumSelectFormatter() {
                this.allowClear = true;
            }
            EnumSelectFormatter.prototype.format = function (ctx) {
                var enumType = Serenity.EnumTypeRegistry.get(this.enumKey);
                var sb = "<select>";
                if (this.allowClear) {
                    sb += '<option value="">';
                    sb += Q.htmlEncode(this.emptyItemText || Q.text("Controls.SelectEditor.EmptyItemText"));
                    sb += '</option>';
                }
                for (var _i = 0, _a = Object.keys(enumType).filter(function (v) { return !isNaN(parseInt(v, 10)); }); _i < _a.length; _i++) {
                    var x = _a[_i];
                    sb += '<option value="' + Q.attrEncode(x) + '"';
                    if (x == ctx.value)
                        sb += " selected";
                    var name = enumType[x];
                    sb += ">";
                    sb += Q.htmlEncode(Q.tryGetText("Enums." + this.enumKey + "." + name) || name);
                    sb += "</option>";
                }
                sb += "</select>";
                return sb;
            };
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "enumKey", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "allowClear", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], EnumSelectFormatter.prototype, "emptyItemText", void 0);
            EnumSelectFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EnumSelectFormatter);
            return EnumSelectFormatter;
        }());
        Common.EnumSelectFormatter = EnumSelectFormatter;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.hint, 'Excel'),
                    title: Q.coalesce(options.title, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var GridEditorBase = /** @class */ (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                var _this = _super.call(this, container) || this;
                _this.nextId = 1;
                return _this;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity[this.getIdProperty()];
            };
            GridEditorBase.prototype.getNextId = function () {
                return "`" + this.nextId++;
            };
            GridEditorBase.prototype.setNewId = function (entity) {
                entity[this.getIdProperty()] = this.getNextId();
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = this.id(row);
                if (id == null) {
                    row[this.getIdProperty()] = this.getNextId();
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    var p = this.getIdProperty();
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        var id = y[p];
                        if (id && id.toString().charAt(0) == '`')
                            delete y[p];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    var p = this.getIdProperty();
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        if (y[p] == null)
                            y[p] = "`" + _this.getNextId();
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var GridEditorDialog = /** @class */ (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Helpers;
    (function (Helpers) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesCOVIDEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesCOVIDEditor, _super);
            function HardcodedValuesCOVIDEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("+", "+ Positive");
                _this.addOption("-", "- Negative");
                _this.addOption("N/A", "N/A No Test");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
                /* this.addItem({
                     id: "key3",
                     text: "Text 3"
                 });*/
                // don't let selecting this one (disabled)
                /* this.addItem({
                     id: "key4",
                     text: "Text 4",
                     disabled: true
                 });*/
            }
            HardcodedValuesCOVIDEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesCOVIDEditor);
            return HardcodedValuesCOVIDEditor;
        }(Serenity.Select2Editor));
        Helpers.HardcodedValuesCOVIDEditor = HardcodedValuesCOVIDEditor;
    })(Helpers = MobilityMatters.Helpers || (MobilityMatters.Helpers = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Helpers;
    (function (Helpers) {
        var HardcodedValuesDialog = /** @class */ (function (_super) {
            __extends(HardcodedValuesDialog, _super);
            function HardcodedValuesDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Helpers.HardcodedValuesForm(_this.idPrefix);
                _this.dialogTitle = "Please select some value";
                _this.form.SomeValue.changeSelect2(function (e) {
                    Q.notifySuccess("You selected item with key: " + _this.form.SomeValue.value);
                });
                return _this;
            }
            HardcodedValuesDialog.prototype.getFormKey = function () { return Helpers.HardcodedValuesForm.formKey; };
            HardcodedValuesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], HardcodedValuesDialog);
            return HardcodedValuesDialog;
        }(Serenity.PropertyDialog));
        Helpers.HardcodedValuesDialog = HardcodedValuesDialog;
    })(Helpers = MobilityMatters.Helpers || (MobilityMatters.Helpers = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Helpers;
    (function (Helpers) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesEditor, _super);
            function HardcodedValuesEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("1", "1");
                _this.addOption("2", "2");
                _this.addOption("3", "3");
                _this.addOption("4", "4");
                _this.addOption("5", "5");
                _this.addOption("6", "6");
                _this.addOption("7", "7");
                _this.addOption("8", "8");
                _this.addOption("9", "9");
                _this.addOption("10", "10");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
                /* this.addItem({
                     id: "key3",
                     text: "Text 3"
                 });*/
                // don't let selecting this one (disabled)
                /* this.addItem({
                     id: "key4",
                     text: "Text 4",
                     disabled: true
                 });*/
            }
            HardcodedValuesEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesEditor);
            return HardcodedValuesEditor;
        }(Serenity.Select2Editor));
        Helpers.HardcodedValuesEditor = HardcodedValuesEditor;
    })(Helpers = MobilityMatters.Helpers || (MobilityMatters.Helpers = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Helpers;
    (function (Helpers) {
        /**
         * Our select editor with hardcoded values.
         *
         * When you define a new editor type, make sure you build
         * and transform templates for it to be available
         * in server side forms, e.g. [HardCodedValuesEditor]
         */
        var HardcodedValuesGenderEditor = /** @class */ (function (_super) {
            __extends(HardcodedValuesGenderEditor, _super);
            function HardcodedValuesGenderEditor(container) {
                var _this = _super.call(this, container, null) || this;
                // add option accepts a key (id) value and display text value
                _this.addOption("M", "M");
                _this.addOption("F", "F");
                _this.addOption("Other", "Other");
                return _this;
                // you may also use addItem which accepts a Select2Item parameter
                /* this.addItem({
                     id: "key3",
                     text: "Text 3"
                 });*/
                // don't let selecting this one (disabled)
                /* this.addItem({
                     id: "key4",
                     text: "Text 4",
                     disabled: true
                 });*/
            }
            HardcodedValuesGenderEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], HardcodedValuesGenderEditor);
            return HardcodedValuesGenderEditor;
        }(Serenity.Select2Editor));
        Helpers.HardcodedValuesGenderEditor = HardcodedValuesGenderEditor;
    })(Helpers = MobilityMatters.Helpers || (MobilityMatters.Helpers = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    /**
     * This is an editor widget but it only displays a text, not edits it.
     *
     */
    var StaticTextBlock = /** @class */ (function (_super) {
        __extends(StaticTextBlock, _super);
        function StaticTextBlock(container, options) {
            var _this = _super.call(this, container, options) || this;
            // hide the caption label for this editor if in a form. ugly hack
            if (_this.options.hideLabel)
                _this.element.closest('.field').find('.caption').hide();
            _this.updateElementContent();
            return _this;
        }
        StaticTextBlock.prototype.updateElementContent = function () {
            var text = Q.coalesce(this.options.text, this.value);
            // if isLocalText is set, text is actually a local text key
            if (this.options.isLocalText)
                text = Q.text(text);
            // don't html encode if isHtml option is true
            if (this.options.isHtml)
                this.element.html(text);
            else
                this.element.text(text);
        };
        /**
         * By implementing ISetEditValue interface, we allow this editor to display its field value.
         * But only do this when our text content is not explicitly set in options
         */
        StaticTextBlock.prototype.setEditValue = function (source, property) {
            if (this.options.text == null) {
                this.value = Q.coalesce(this.options.text, source[property.name]);
                this.updateElementContent();
            }
        };
        StaticTextBlock = __decorate([
            Serenity.Decorators.element("<div/>"),
            Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
        ], StaticTextBlock);
        return StaticTextBlock;
    }(Serenity.Widget));
    MobilityMatters.StaticTextBlock = StaticTextBlock;
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var LanguageSelection = /** @class */ (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                var _this = _super.call(this, select) || this;
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                _this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
                return _this;
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var SidebarSearch = /** @class */ (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = _super.call(this, input) || this;
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                _this.menuUL = menuUL;
                return _this;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var ThemeSelection = /** @class */ (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = _super.call(this, select) || this;
                _this.change(function (e) {
                    var path = Q.Config.applicationPath;
                    if (path && path != '/' && Q.endsWith(path, '/'))
                        path = path.substr(0, path.length - 1);
                    $.cookie('ThemePreference', select.val(), {
                        path: path,
                        expires: 365
                    });
                    var theme = select.val() || '';
                    var darkSidebar = theme.indexOf('light') < 0;
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + theme)
                        .toggleClass('dark-sidebar', darkSidebar)
                        .toggleClass('light-sidebar', !darkSidebar);
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(_this.getCurrentTheme());
                return _this;
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        // Print header of page
                        if (options.printDateTimeHeader == null || options.printDateTimeHeader) {
                            var beforePage = function (data) {
                                doc.setFontStyle('normal');
                                doc.setFontSize(8);
                                // Date and time of the report
                                doc.autoTableText(Q.formatDate(new Date(), "dd-MM-yyyy HH:mm"), doc.internal.pageSize.width - autoOptions.margin.right, 13, {
                                    halign: 'right'
                                });
                            };
                            autoOptions.beforePageContent = beforePage;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.fileName || options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        if (output == 'datauri')
                            doc.output(output);
                        else {
                            var tmpOut = doc.output('datauristring');
                            if (output == 'dataurlnewwindow') {
                                var fileTmpName = options.reportTitle || g.getTitle();
                                var url_with_name = tmpOut.replace("data:application/pdf;", "data:application/pdf;name=" + fileTmpName + ".pdf;");
                                var html = '<html>' +
                                    '<style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style>' +
                                    '<body>' +
                                    '<p></p>' +
                                    '<iframe type="application/pdf" src="' + url_with_name + '"></iframe>' +
                                    '</body></html>';
                                var a = window.open("about:blank", "_blank");
                                a.document.write(html);
                                a.document.close();
                            }
                        }
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var ReportDialog = /** @class */ (function (_super) {
            __extends(ReportDialog, _super);
            function ReportDialog(options) {
                var _this = _super.call(this, options) || this;
                _this.updateInterface();
                _this.loadReport(_this.options.reportKey);
                return _this;
            }
            ReportDialog.prototype.getDialogButtons = function () {
                return null;
            };
            ReportDialog.prototype.createPropertyGrid = function () {
                this.propertyGrid && this.byId('PropertyGrid').html('').attr('class', '');
                this.propertyGrid = new Serenity.PropertyGrid(this.byId('PropertyGrid'), {
                    idPrefix: this.idPrefix,
                    useCategories: true,
                    items: this.report.Properties
                }).init(null);
            };
            ReportDialog.prototype.loadReport = function (reportKey) {
                var _this = this;
                Q.serviceCall({
                    url: Q.resolveUrl('~/Report/Retrieve'),
                    request: {
                        ReportKey: reportKey
                    },
                    onSuccess: function (response) {
                        _this.report = response;
                        _this.element.dialog().dialog('option', 'title', _this.report.Title);
                        _this.createPropertyGrid();
                        _this.propertyGrid.load(_this.report.InitialSettings || {});
                        _this.updateInterface();
                        _this.dialogOpen();
                    }
                });
            };
            ReportDialog.prototype.updateInterface = function () {
                this.toolbar.findButton('print-preview-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-pdf-button')
                    .toggle(this.report && !this.report.IsDataOnlyReport);
                this.toolbar.findButton('export-xlsx-button')
                    .toggle(this.report && this.report.IsDataOnlyReport);
            };
            ReportDialog.prototype.executeReport = function (target, ext, download) {
                if (!this.validateForm()) {
                    return;
                }
                var opt = {};
                this.propertyGrid.save(opt);
                Common.ReportHelper.execute({
                    download: download,
                    reportKey: this.report.ReportKey,
                    extension: ext,
                    target: target,
                    params: opt
                });
            };
            ReportDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                return [
                    {
                        title: 'Preview',
                        cssClass: 'print-preview-button',
                        onClick: function () { return _this.executeReport('_blank', null, false); }
                    },
                    {
                        title: 'PDF',
                        cssClass: 'export-pdf-button',
                        onClick: function () { return _this.executeReport('_blank', 'pdf', true); }
                    },
                    {
                        title: 'Excel',
                        cssClass: 'export-xlsx-button',
                        onClick: function () { return _this.executeReport('_blank', 'xlsx', true); }
                    }
                ];
            };
            return ReportDialog;
        }(Serenity.TemplatedDialog));
        Common.ReportDialog = ReportDialog;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        ReportHelper.execute(options);
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
            function execute(options) {
                var opt = options.getParams ? options.getParams() : options.params;
                Q.postToUrl({
                    url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                    params: {
                        key: options.reportKey,
                        ext: Q.coalesce(options.extension, 'pdf'),
                        opt: opt ? $.toJSON(opt) : ''
                    },
                    target: Q.coalesce(options.target, '_blank')
                });
            }
            ReportHelper.execute = execute;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var ReportPage = /** @class */ (function (_super) {
            __extends(ReportPage, _super);
            function ReportPage(element) {
                var _this = _super.call(this, element) || this;
                $('.report-link', element).click(function (e) { return _this.reportLinkClick(e); });
                $('div.line', element).click(function (e) { return _this.categoryClick(e); });
                new Serenity.QuickSearchInput($('.s-QuickSearchBar input', element), {
                    onSearch: function (field, text, done) {
                        _this.updateMatchFlags(text);
                        done(true);
                    }
                });
                return _this;
            }
            ReportPage.prototype.updateMatchFlags = function (text) {
                var liList = $('.report-list', this.element).find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (!text) {
                    liList.children('ul').hide();
                    liList.show().removeClass('expanded');
                    return;
                }
                text = Select2.util.stripDiacritics(text).toUpperCase();
                var reportItems = liList.filter('.report-item');
                reportItems.each(function (ix, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    if (title.indexOf(text) < 0) {
                        x.addClass('non-match');
                    }
                });
                var matchingItems = reportItems.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                if (visibles.length <= 100) {
                    liList.children('ul').show();
                    liList.addClass('expanded');
                }
            };
            ReportPage.prototype.categoryClick = function (e) {
                var li = $(e.target).closest('li');
                if (li.hasClass('expanded')) {
                    li.find('ul').hide('fast');
                    li.removeClass('expanded');
                    li.find('li').removeClass('expanded');
                }
                else {
                    li.addClass('expanded');
                    li.children('ul').show('fast');
                    if (li.children('ul').children('li').length === 1 && !li.children('ul').children('li').hasClass('expanded')) {
                        li.children('ul').children('li').children('.line').click();
                    }
                }
            };
            ReportPage.prototype.reportLinkClick = function (e) {
                e.preventDefault();
                new Common.ReportDialog({
                    reportKey: $(e.target).data('key')
                }).dialogOpen();
            };
            return ReportPage;
        }(Serenity.Widget));
        Common.ReportPage = ReportPage;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = /** @class */ (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = MobilityMatters.Common || (MobilityMatters.Common = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = /** @class */ (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ChangePasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = /** @class */ (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ForgotPasswordForm(_this.idPrefix);
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = /** @class */ (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.ResetPasswordForm(_this.idPrefix);
                _this.form.NewPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
                return _this;
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = /** @class */ (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = _super.call(this, container) || this;
                _this.form = new Membership.SignUpForm(_this.idPrefix);
                _this.form.ConfirmEmail.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                _this.form.ConfirmPassword.addValidationRule(_this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                _this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
                return _this;
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = MobilityMatters.Membership || (MobilityMatters.Membership = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmDialog = /** @class */ (function (_super) {
            __extends(AvailabilityAmDialog, _super);
            function AvailabilityAmDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.AvailabilityAmForm(_this.idPrefix);
                return _this;
            }
            AvailabilityAmDialog.prototype.getFormKey = function () { return Northwind.AvailabilityAmForm.formKey; };
            AvailabilityAmDialog.prototype.getIdProperty = function () { return Northwind.AvailabilityAmRow.idProperty; };
            AvailabilityAmDialog.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityAmRow.localTextPrefix; };
            AvailabilityAmDialog.prototype.getNameProperty = function () { return Northwind.AvailabilityAmRow.nameProperty; };
            AvailabilityAmDialog.prototype.getService = function () { return Northwind.AvailabilityAmService.baseUrl; };
            AvailabilityAmDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityAmDialog);
            return AvailabilityAmDialog;
        }(Serenity.EntityDialog));
        Northwind.AvailabilityAmDialog = AvailabilityAmDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmGrid = /** @class */ (function (_super) {
            __extends(AvailabilityAmGrid, _super);
            function AvailabilityAmGrid(container) {
                return _super.call(this, container) || this;
            }
            AvailabilityAmGrid.prototype.getColumnsKey = function () { return 'Northwind.AvailabilityAm'; };
            AvailabilityAmGrid.prototype.getDialogType = function () { return Northwind.AvailabilityAmDialog; };
            AvailabilityAmGrid.prototype.getIdProperty = function () { return Northwind.AvailabilityAmRow.idProperty; };
            AvailabilityAmGrid.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityAmRow.localTextPrefix; };
            AvailabilityAmGrid.prototype.getService = function () { return Northwind.AvailabilityAmService.baseUrl; };
            AvailabilityAmGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityAmGrid);
            return AvailabilityAmGrid;
        }(Serenity.EntityGrid));
        Northwind.AvailabilityAmGrid = AvailabilityAmGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmMultipleDialog = /** @class */ (function (_super) {
            __extends(AvailabilityAmMultipleDialog, _super);
            function AvailabilityAmMultipleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.AvailabilityAmMultipleForm(_this.idPrefix);
                return _this;
            }
            AvailabilityAmMultipleDialog.prototype.getFormKey = function () { return Northwind.AvailabilityAmMultipleForm.formKey; };
            AvailabilityAmMultipleDialog.prototype.getIdProperty = function () { return Northwind.AvailabilityAmMultipleRow.idProperty; };
            AvailabilityAmMultipleDialog.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityAmMultipleRow.localTextPrefix; };
            AvailabilityAmMultipleDialog.prototype.getService = function () { return Northwind.AvailabilityAmMultipleService.baseUrl; };
            AvailabilityAmMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityAmMultipleDialog);
            return AvailabilityAmMultipleDialog;
        }(Serenity.EntityDialog));
        Northwind.AvailabilityAmMultipleDialog = AvailabilityAmMultipleDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityAmMultipleGrid = /** @class */ (function (_super) {
            __extends(AvailabilityAmMultipleGrid, _super);
            function AvailabilityAmMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            AvailabilityAmMultipleGrid.prototype.getColumnsKey = function () { return 'Northwind.AvailabilityAmMultiple'; };
            AvailabilityAmMultipleGrid.prototype.getDialogType = function () { return Northwind.AvailabilityAmMultipleDialog; };
            AvailabilityAmMultipleGrid.prototype.getIdProperty = function () { return Northwind.AvailabilityAmMultipleRow.idProperty; };
            AvailabilityAmMultipleGrid.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityAmMultipleRow.localTextPrefix; };
            AvailabilityAmMultipleGrid.prototype.getService = function () { return Northwind.AvailabilityAmMultipleService.baseUrl; };
            AvailabilityAmMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityAmMultipleGrid);
            return AvailabilityAmMultipleGrid;
        }(Serenity.EntityGrid));
        Northwind.AvailabilityAmMultipleGrid = AvailabilityAmMultipleGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmDialog = /** @class */ (function (_super) {
            __extends(AvailabilityPmDialog, _super);
            function AvailabilityPmDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.AvailabilityPmForm(_this.idPrefix);
                return _this;
            }
            AvailabilityPmDialog.prototype.getFormKey = function () { return Northwind.AvailabilityPmForm.formKey; };
            AvailabilityPmDialog.prototype.getIdProperty = function () { return Northwind.AvailabilityPmRow.idProperty; };
            AvailabilityPmDialog.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityPmRow.localTextPrefix; };
            AvailabilityPmDialog.prototype.getNameProperty = function () { return Northwind.AvailabilityPmRow.nameProperty; };
            AvailabilityPmDialog.prototype.getService = function () { return Northwind.AvailabilityPmService.baseUrl; };
            AvailabilityPmDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityPmDialog);
            return AvailabilityPmDialog;
        }(Serenity.EntityDialog));
        Northwind.AvailabilityPmDialog = AvailabilityPmDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmGrid = /** @class */ (function (_super) {
            __extends(AvailabilityPmGrid, _super);
            function AvailabilityPmGrid(container) {
                return _super.call(this, container) || this;
            }
            AvailabilityPmGrid.prototype.getColumnsKey = function () { return 'Northwind.AvailabilityPm'; };
            AvailabilityPmGrid.prototype.getDialogType = function () { return Northwind.AvailabilityPmDialog; };
            AvailabilityPmGrid.prototype.getIdProperty = function () { return Northwind.AvailabilityPmRow.idProperty; };
            AvailabilityPmGrid.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityPmRow.localTextPrefix; };
            AvailabilityPmGrid.prototype.getService = function () { return Northwind.AvailabilityPmService.baseUrl; };
            AvailabilityPmGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityPmGrid);
            return AvailabilityPmGrid;
        }(Serenity.EntityGrid));
        Northwind.AvailabilityPmGrid = AvailabilityPmGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmMultipleDialog = /** @class */ (function (_super) {
            __extends(AvailabilityPmMultipleDialog, _super);
            function AvailabilityPmMultipleDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.AvailabilityPmMultipleForm(_this.idPrefix);
                return _this;
            }
            AvailabilityPmMultipleDialog.prototype.getFormKey = function () { return Northwind.AvailabilityPmMultipleForm.formKey; };
            AvailabilityPmMultipleDialog.prototype.getIdProperty = function () { return Northwind.AvailabilityPmMultipleRow.idProperty; };
            AvailabilityPmMultipleDialog.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityPmMultipleRow.localTextPrefix; };
            AvailabilityPmMultipleDialog.prototype.getService = function () { return Northwind.AvailabilityPmMultipleService.baseUrl; };
            AvailabilityPmMultipleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityPmMultipleDialog);
            return AvailabilityPmMultipleDialog;
        }(Serenity.EntityDialog));
        Northwind.AvailabilityPmMultipleDialog = AvailabilityPmMultipleDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var AvailabilityPmMultipleGrid = /** @class */ (function (_super) {
            __extends(AvailabilityPmMultipleGrid, _super);
            function AvailabilityPmMultipleGrid(container) {
                return _super.call(this, container) || this;
            }
            AvailabilityPmMultipleGrid.prototype.getColumnsKey = function () { return 'Northwind.AvailabilityPmMultiple'; };
            AvailabilityPmMultipleGrid.prototype.getDialogType = function () { return Northwind.AvailabilityPmMultipleDialog; };
            AvailabilityPmMultipleGrid.prototype.getIdProperty = function () { return Northwind.AvailabilityPmMultipleRow.idProperty; };
            AvailabilityPmMultipleGrid.prototype.getLocalTextPrefix = function () { return Northwind.AvailabilityPmMultipleRow.localTextPrefix; };
            AvailabilityPmMultipleGrid.prototype.getService = function () { return Northwind.AvailabilityPmMultipleService.baseUrl; };
            AvailabilityPmMultipleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], AvailabilityPmMultipleGrid);
            return AvailabilityPmMultipleGrid;
        }(Serenity.EntityGrid));
        Northwind.AvailabilityPmMultipleGrid = AvailabilityPmMultipleGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryDialog = /** @class */ (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CategoryForm(_this.idPrefix);
                return _this;
            }
            CategoryDialog.prototype.getFormKey = function () { return Northwind.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Northwind.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Northwind.CategoryDialog = CategoryDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CategoryGrid = /** @class */ (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                return _super.call(this, container) || this;
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Northwind.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Northwind.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Northwind.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Northwind.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Northwind.CategoryGrid = CategoryGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesDialog = /** @class */ (function (_super) {
            __extends(CitiesDialog, _super);
            function CitiesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CitiesForm(_this.idPrefix);
                return _this;
            }
            CitiesDialog.prototype.getFormKey = function () { return Northwind.CitiesForm.formKey; };
            CitiesDialog.prototype.getIdProperty = function () { return Northwind.CitiesRow.idProperty; };
            CitiesDialog.prototype.getLocalTextPrefix = function () { return Northwind.CitiesRow.localTextPrefix; };
            CitiesDialog.prototype.getNameProperty = function () { return Northwind.CitiesRow.nameProperty; };
            CitiesDialog.prototype.getService = function () { return Northwind.CitiesService.baseUrl; };
            CitiesDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesDialog);
            return CitiesDialog;
        }(Serenity.EntityDialog));
        Northwind.CitiesDialog = CitiesDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesGrid = /** @class */ (function (_super) {
            __extends(CitiesGrid, _super);
            function CitiesGrid(container) {
                return _super.call(this, container) || this;
            }
            CitiesGrid.prototype.getColumnsKey = function () { return 'Northwind.Cities'; };
            CitiesGrid.prototype.getDialogType = function () { return Northwind.CitiesDialog; };
            CitiesGrid.prototype.getIdProperty = function () { return Northwind.CitiesRow.idProperty; };
            CitiesGrid.prototype.getLocalTextPrefix = function () { return Northwind.CitiesRow.localTextPrefix; };
            CitiesGrid.prototype.getService = function () { return Northwind.CitiesService.baseUrl; };
            CitiesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesGrid);
            return CitiesGrid;
        }(Serenity.EntityGrid));
        Northwind.CitiesGrid = CitiesGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesMultiDialog = /** @class */ (function (_super) {
            __extends(CitiesMultiDialog, _super);
            function CitiesMultiDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.CitiesMultiForm(_this.idPrefix);
                return _this;
            }
            CitiesMultiDialog.prototype.getFormKey = function () { return Northwind.CitiesMultiForm.formKey; };
            CitiesMultiDialog.prototype.getIdProperty = function () { return Northwind.CitiesMultiRow.idProperty; };
            CitiesMultiDialog.prototype.getLocalTextPrefix = function () { return Northwind.CitiesMultiRow.localTextPrefix; };
            CitiesMultiDialog.prototype.getService = function () { return Northwind.CitiesMultiService.baseUrl; };
            CitiesMultiDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesMultiDialog);
            return CitiesMultiDialog;
        }(Serenity.EntityDialog));
        Northwind.CitiesMultiDialog = CitiesMultiDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CitiesMultiGrid = /** @class */ (function (_super) {
            __extends(CitiesMultiGrid, _super);
            function CitiesMultiGrid(container) {
                return _super.call(this, container) || this;
            }
            CitiesMultiGrid.prototype.getColumnsKey = function () { return 'Northwind.CitiesMulti'; };
            CitiesMultiGrid.prototype.getDialogType = function () { return Northwind.CitiesMultiDialog; };
            CitiesMultiGrid.prototype.getIdProperty = function () { return Northwind.CitiesMultiRow.idProperty; };
            CitiesMultiGrid.prototype.getLocalTextPrefix = function () { return Northwind.CitiesMultiRow.localTextPrefix; };
            CitiesMultiGrid.prototype.getService = function () { return Northwind.CitiesMultiService.baseUrl; };
            CitiesMultiGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CitiesMultiGrid);
            return CitiesMultiGrid;
        }(Serenity.EntityGrid));
        Northwind.CitiesMultiGrid = CitiesMultiGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerDialog = /** @class */ (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.CustomerForm(_this.idPrefix);
                _this.ordersGrid = new Northwind.CustomerOrdersGrid(_this.byId('OrdersGrid'));
                // force order dialog to open in Dialog mode instead of Panel mode
                // which is set as default on OrderDialog with @panelAttribute
                _this.ordersGrid.openDialogsAsPanel = false;
                _this.byId('NoteList').closest('.field').hide().end().appendTo(_this.byId('TabNotes'));
                MobilityMatters.DialogUtils.pendingChangesConfirmation(_this.element, function () { return _this.getSaveState() != _this.loadedState; });
                _this.form.CustomerID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                return _this;
            }
            CustomerDialog.prototype.getFormKey = function () { return Northwind.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Northwind.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            CustomerDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.CustomerID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'C').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    MobilityMatters.Northwind.CustomerService.GetNextNumber({
                        Prefix: prefix,
                        Length: 6 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.CustomerID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.CustomerID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Northwind.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Northwind.CustomerDialog = CustomerDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerEditor = /** @class */ (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                return _super.call(this, hidden) || this;
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return Northwind.CustomerRow.lookupKey;
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Northwind.CustomerEditor = CustomerEditor;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerGrid = /** @class */ (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Customer/ListExcel',
                    separator: true
                }));
                /*buttons.push(MobilityMatters.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: () => this.onViewSubmit()
                }));*/
                return buttons;
            };
            CustomerGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter["Active" /* Active */] = false;
                return true;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Northwind.CustomerGrid = CustomerGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDialog = /** @class */ (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderForm(_this.idPrefix);
                Q.reloadLookup(Northwind.CustomerRow.lookupKey);
                Q.reloadLookup('Northwind.Employees');
                _this.customerPropertyGrid = new Serenity.PropertyGrid(_this.byId("CustomerPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Customer_",
                    items: Q.getForm(Northwind.CustomerForm.formKey).filter(function (x) { return x.name != 'CustomerID'; }),
                    useCategories: true
                });
                _this.employeesPropertyGrid = new Serenity.PropertyGrid(_this.byId("EmployeesPropertyGrid"), {
                    idPrefix: _this.idPrefix + "_Employees_",
                    items: Q.getForm(Northwind.EmployeesForm.formKey).filter(function (x) { return x.name != 'EmployeeID'; }),
                    useCategories: true
                });
                // this is just a helper to access editors if needed
                _this.customerForm = new Northwind.CustomerForm(_this.customerPropertyGrid.idPrefix);
                _this.employeesForm = new Northwind.EmployeesForm(_this.employeesPropertyGrid.idPrefix);
                // initialize validator for customer form
                _this.customerValidator = _this.byId("CustomerForm").validate(Q.validateOptions({}));
                _this.employeesValidator = _this.byId("EmployeesForm").validate(Q.validateOptions({}));
                var selfChange = 0;
                // creating another toolbar for customer tab that will only save Customer
                new Serenity.Toolbar(_this.byId("CustomerToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getCustomerID();
                                if (!id)
                                    return;
                                if (!_this.customerValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.customerPropertyGrid.save(c);
                                Northwind.CustomerService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(Northwind.CustomerRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.CustomerID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved customer details");
                                });
                            }
                        }]
                });
                new Serenity.Toolbar(_this.byId("EmployeesToolbar"), {
                    buttons: [{
                            cssClass: "apply-changes-button",
                            title: Q.text("Controls.EntityDialog.SaveButton"),
                            onClick: function () {
                                var id = _this.getEmployeeID();
                                if (!id)
                                    return;
                                if (!_this.employeesValidator.form())
                                    return;
                                // prepare an empty entity to serialize customer details into
                                var c = {};
                                _this.employeesPropertyGrid.save(c);
                                Northwind.EmployeesService.Update({
                                    EntityId: id,
                                    Entity: c
                                }, function (response) {
                                    // reload customer list just in case
                                    Q.reloadLookup(Northwind.EmployeesRow.lookupKey);
                                    // set flag that we are triggering customer select change event
                                    // otherwise active tab will change to first one
                                    selfChange++;
                                    try {
                                        // trigger change so that customer select updates its text
                                        // in case if Company Name is changed
                                        _this.form.EmployeeID.element.change();
                                    }
                                    finally {
                                        selfChange--;
                                    }
                                    Q.notifySuccess("Saved Volunteer details");
                                });
                            }
                        }]
                });
                _this.form.CustomerID.change(function (e) {
                    //CustomerService.List({
                    //    EqualityFilter: <CustomerRow>{
                    //        CustomerID: this.form.CustomerID.value
                    //    }
                    //},
                    //    response => {
                    //        if (response.Entities.length) {
                    //            this.form.ShipAddress.value = response.Entities[0].Address;
                    //            this.form.ShipCity.value = response.Entities[0].City;
                    //            this.form.ShipPostalCode.value = response.Entities[0].PostalCode;
                    //            //this.CalculateDistanceAndDuration(true);
                    //        }
                    //    });
                    if (selfChange)
                        return;
                    var customerID = _this.getCustomerID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Customer', !customerID);
                    if (!customerID) {
                        // no customer is selected, just load an empty entity
                        _this.customerPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Northwind.CustomerService.Retrieve({
                        EntityId: customerID
                    }, function (response) {
                        _this.customerPropertyGrid.load(response.Entity);
                    });
                });
                _this.form.EmployeeID.change(function (e) {
                    if (selfChange)
                        return;
                    var employeeID = _this.getEmployeeID();
                    Serenity.TabsExtensions.setDisabled(_this.tabs, 'Employees', !employeeID);
                    if (!employeeID) {
                        // no customer is selected, just load an empty entity
                        _this.employeesPropertyGrid.load({});
                        return;
                    }
                    // load selected customer into customer form by calling CustomerService
                    Northwind.EmployeesService.Retrieve({
                        EntityId: employeeID
                    }, function (response) {
                        _this.employeesPropertyGrid.load(response.Entity);
                    });
                });
                return _this;
            }
            OrderDialog.prototype.getFormKey = function () { return Northwind.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Northwind.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                /*buttons.push(MobilityMatters.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Northwind.OrderDetail',
                    getParams: () => ({
                        OrderID: this.get_entityId()
                    })
                }));*/
                buttons.push({
                    title: 'Distance and Duration by Google Maps',
                    icon: 'fa fa-map-o text-green',
                    onClick: function () {
                        Q.confirm("Do you really want to calculate distance and duration by Google Maps?", function () {
                            _this.CalculateDistanceAndDuration(false);
                        });
                    }
                });
                buttons.push({
                    title: 'Send Email',
                    icon: "fa-envelope text-green",
                    separator: false,
                    onClick: function () {
                        var volunteers = [];
                        if (_this.form.EmployeeID.value) {
                            volunteers.push(Q.toId(_this.form.EmployeeID.value));
                        }
                        var client = Q.tryFirst(Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == _this.form.CustomerID.value; });
                        var apptDate = _this.form.OrderDate.valueAsDate.toString().substring(0, 15);
                        var subject = "Ride Scheduled for " + apptDate + " at " + _this.form.RequiredDate.value + " with " + (client ? client.FullName : "");
                        new Northwind.MailComposeDialog({
                            mailFromTrip: true,
                            toVoluntueer: volunteers,
                            subject: subject,
                            appointmentDate: _this.form.OrderDate.valueAsDate,
                            clientName: (client ? client.FullName : ""),
                            rideNumber: _this.form.OrderID.value,
                            telephoneNumber: client.Phone,
                            pickupTime: _this.form.RequiredDate.value,
                            pickupAddress: _this.form.ShipAddress.value + " " + _this.form.ShipCity.value + " " + _this.form.ShipPostalCode.value,
                            deliveryAddress: _this.form.DestinationAddress.value + " " + _this.form.DestinationCity.value + " " + _this.form.DestinationZip.value,
                            deliveryAddress2: _this.form.DestinationAddress2.value + " " + _this.form.DestinationCity2.value + " " + _this.form.DestinationZip2.value,
                            apptLength: _this.form.ApptTime.value,
                            apptType: _this.form.ApptType.value,
                            appointmentTime: _this.form.AppointmentTime.value,
                            apptLength2: _this.form.ApptTime2.value,
                            apptType2: _this.form.ApptType2.value,
                            appointmentTime2: _this.form.AppointmentTime2.value,
                            altPhone: client.AltPhone,
                            specialNeedsTemp: _this.form.CustomerSpecialNeedsPlainText.value,
                            specialConditionsDirections: _this.form.CustomerSpecialConditionsDirections.value
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            OrderDialog.prototype.getCustomerID = function () {
                var customerID = this.form.CustomerID.value;
                if (Q.isEmptyOrNull(customerID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                return Q.first(Northwind.CustomerRow.getLookup().items, function (x) { return x.CustomerID == customerID; }).ID;
            };
            OrderDialog.prototype.getEmployeeID = function () {
                var employeeID = this.form.EmployeeID.value;
                //alert(employeeID);
                if (Q.isEmptyOrNull(employeeID))
                    return null;
                // unfortunately, CustomerID (a string) used in this form and 
                // the ID (auto increment ID) are different, so we need to 
                // find numeric ID from customer lookups. 
                // you'll probably won't need this step.
                //return Q.first(Northwind.EmployeesRow.getLookup().items,
                // x => x.EmployeeID == employeeID).ID;
                return employeeID;
            };
            OrderDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                /*Serenity.TabsExtensions.setDisabled(this.tabs, 'Customer',
                    !this.getCustomerID());*/
                /*Serenity.TabsExtensions.setDisabled(this.tabs, 'Employees',
                    !this.getEmployeeID());*/
            };
            OrderDialog.prototype.CalculateDistanceAndDuration = function (isRiderChanged) {
                var _this = this;
                var source = (Q.isEmptyOrNull(this.form.ShipAddress.value) ? "" : this.form.ShipAddress.value + ",") +
                    (Q.isEmptyOrNull(this.form.ShipCity.value) ? "" : this.form.ShipCity.value + ",") +
                    (Q.isEmptyOrNull(this.form.ShipPostalCode.value) ? "" : this.form.ShipPostalCode.value);
                var destination = (Q.isEmptyOrNull(this.form.DestinationAddress.value) ? "" : this.form.DestinationAddress.value + ",") +
                    (Q.isEmptyOrNull(this.form.DestinationCity.value) ? "" : this.form.DestinationCity.value + ",") +
                    (Q.isEmptyOrNull(this.form.DestinationZip.value) ? "" : this.form.DestinationZip.value);
                if (!Q.isEmptyOrNull(source) && !Q.isEmptyOrNull(destination)) {
                    Northwind.OrderService.GetDistanceMatrix({
                        Source: source,
                        Destination: destination
                    }, function (response) {
                        if (response != null && response.Status == "OK" &&
                            response.Rows.length > 0 && response.Rows[0].Elements.length > 0 &&
                            response.Rows[0].Elements[0].Status == "OK") {
                            _this.form.DistanceText.value = response.Rows[0].Elements[0].Distance.Text;
                            _this.form.DurationText.value = response.Rows[0].Elements[0].Duration.Text;
                            Q.notifySuccess("Distance: " + response.Rows[0].Elements[0].Distance.Text + " Duration: " + response.Rows[0].Elements[0].Duration.Text);
                        }
                        else {
                            Q.notifyError("No distance and duration found!");
                        }
                    });
                }
                else {
                    if (!isRiderChanged) {
                        Q.notifyWarning("Please type origin and destination!");
                    }
                }
            };
            OrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.CustomerID.changeSelect2(function (e) {
                    Northwind.CustomerService.List({
                        EqualityFilter: {
                            CustomerID: _this.form.CustomerID.value
                        }
                    }, function (response) {
                        if (response.Entities.length) {
                            _this.form.ShipAddress.value = response.Entities[0].Address;
                            _this.form.ShipCity.value = response.Entities[0].City;
                            _this.form.ShipPostalCode.value = response.Entities[0].PostalCode;
                            //this.CalculateDistanceAndDuration(true);
                        }
                    });
                });
            };
            OrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.cloneButton.toggle(this.isEditMode());
                this.toolbar.findButton('export-pdf-button').toggle(this.isEditMode());
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Northwind.OrderDialog = OrderDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
/// <reference path="../Order/OrderDialog.ts" />
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrderDialog = /** @class */ (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                var _this = _super.call(this) || this;
                _this.form.CustomerID.change(function (e) {
                    Northwind.CustomerService.List({
                        EqualityFilter: {
                            CustomerID: _this.form.CustomerID.value
                        }
                    }, function (response) {
                        if (response.Entities.length) {
                            _this.form.ShipAddress.value = response.Entities[0].Address;
                            _this.form.ShipCity.value = response.Entities[0].City;
                            _this.form.ShipPostalCode.value = response.Entities[0].PostalCode;
                            //this.CalculateDistanceAndDuration(true);
                        }
                    });
                });
                return _this;
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                //Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog.prototype.afterLoadEntity = function () {
                var _this = this;
                _super.prototype.afterLoadEntity.call(this);
                this.form.CustomerID.changeSelect2(function (e) {
                    Northwind.CustomerService.List({
                        EqualityFilter: {
                            CustomerID: _this.form.CustomerID.value
                        }
                    }, function (response) {
                        if (response.Entities.length) {
                            _this.form.ShipAddress.value = response.Entities[0].Address;
                            _this.form.ShipCity.value = response.Entities[0].City;
                            _this.form.ShipPostalCode.value = response.Entities[0].PostalCode;
                            //this.CalculateDistanceAndDuration(true);
                        }
                    });
                });
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Northwind.OrderDialog));
        Northwind.CustomerOrderDialog = CustomerOrderDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderGrid = /** @class */ (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                return _super.call(this, container) || this;
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            OrderGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            /*protected getQuickFilters() {
                var filters = super.getQuickFilters();
    
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: w => {
                        (this.view.params as OrderListRequest).ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
    
                return filters;
            }*/
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, "ShippingState" /* ShippingState */);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                /*buttons.push(Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: () => this.onViewSubmit()
                }));*/
                //buttons.push({
                //    title: 'Send Email',
                //    icon: "fa-envelope text-green",
                //    separator: false,
                //    onClick: () => {
                //        if (!this.onViewSubmit())
                //            return;
                //        var checkedIDs = this.rowSelection.getSelectedAsInt32();
                //        if (checkedIDs.length == 0) {
                //            Q.alert("You must select a trip!");
                //            return;
                //        }
                //        new Northwind.MailComposeDialog({
                //            toVoluntueer: checkedIDs
                //        }).dialogOpen();
                //    }
                //});
                return buttons;
            };
            /*protected getColumns() {
                var columns = super.getColumns();
    
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>',
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
    
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
    
                return columns;
            }*/
            OrderGrid.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented())
                    return;
                var item = this.itemAt(row);
                var target = $(e.target);
                // if user clicks "i" element, e.g. icon
                if (target.parent().hasClass('inline-action'))
                    target = target.parent();
                if (target.hasClass('inline-action')) {
                    e.preventDefault();
                    if (target.hasClass('print-invoice')) {
                        MobilityMatters.Common.ReportHelper.execute({
                            reportKey: 'Northwind.OrderDetail',
                            params: {
                                OrderID: item.OrderID
                            }
                        });
                    }
                }
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Northwind.OrderGrid = OrderGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
/// <reference path="../Order/OrderGrid.ts" />
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CustomerOrdersGrid = /** @class */ (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                return _super.call(this, container) || this;
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Northwind.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== "CustomerCompanyName" /* CustomerCompanyName */; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Northwind.OrderGrid));
        Northwind.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeeListFormatter = /** @class */ (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Northwind.EmployeeListFormatter = EmployeeListFormatter;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var InactiveCustomerGrid = /** @class */ (function (_super) {
            __extends(InactiveCustomerGrid, _super);
            function InactiveCustomerGrid(container) {
                return _super.call(this, container) || this;
            }
            InactiveCustomerGrid.prototype.getColumnsKey = function () { return "Northwind.Customer"; };
            InactiveCustomerGrid.prototype.getDialogType = function () { return Northwind.CustomerDialog; };
            InactiveCustomerGrid.prototype.getIdProperty = function () { return Northwind.CustomerRow.idProperty; };
            InactiveCustomerGrid.prototype.getLocalTextPrefix = function () { return Northwind.CustomerRow.localTextPrefix; };
            InactiveCustomerGrid.prototype.getService = function () { return Northwind.CustomerService.baseUrl; };
            InactiveCustomerGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter["Active" /* Active */] = true;
                return true;
            };
            InactiveCustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], InactiveCustomerGrid);
            return InactiveCustomerGrid;
        }(Northwind.CustomerGrid));
        Northwind.InactiveCustomerGrid = InactiveCustomerGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsListFormatter = /** @class */ (function () {
            function SpecialNeedsListFormatter() {
            }
            SpecialNeedsListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Northwind.SpecialNeedsRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            };
            SpecialNeedsListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], SpecialNeedsListFormatter);
            return SpecialNeedsListFormatter;
        }());
        Northwind.SpecialNeedsListFormatter = SpecialNeedsListFormatter;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeeFormatter = /** @class */ (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Northwind.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Northwind.EmployeeFormatter = EmployeeFormatter;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeesDialog = /** @class */ (function (_super) {
            __extends(EmployeesDialog, _super);
            function EmployeesDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.EmployeesForm(_this.idPrefix);
                return _this;
            }
            EmployeesDialog.prototype.getFormKey = function () { return Northwind.EmployeesForm.formKey; };
            EmployeesDialog.prototype.getIdProperty = function () { return Northwind.EmployeesRow.idProperty; };
            EmployeesDialog.prototype.getLocalTextPrefix = function () { return Northwind.EmployeesRow.localTextPrefix; };
            EmployeesDialog.prototype.getNameProperty = function () { return Northwind.EmployeesRow.nameProperty; };
            EmployeesDialog.prototype.getService = function () { return Northwind.EmployeesService.baseUrl; };
            EmployeesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.panel()
            ], EmployeesDialog);
            return EmployeesDialog;
        }(Serenity.EntityDialog));
        Northwind.EmployeesDialog = EmployeesDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var EmployeesGrid = /** @class */ (function (_super) {
            __extends(EmployeesGrid, _super);
            function EmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            EmployeesGrid.prototype.getColumnsKey = function () { return 'Northwind.Employees'; };
            EmployeesGrid.prototype.getDialogType = function () { return Northwind.EmployeesDialog; };
            EmployeesGrid.prototype.getIdProperty = function () { return Northwind.EmployeesRow.idProperty; };
            EmployeesGrid.prototype.getLocalTextPrefix = function () { return Northwind.EmployeesRow.localTextPrefix; };
            EmployeesGrid.prototype.getService = function () { return Northwind.EmployeesService.baseUrl; };
            EmployeesGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            EmployeesGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Northwind/Employees/ListExcel',
                    separator: true
                }));
                /*buttons.push(MobilityMatters.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: () => this.onViewSubmit()
                }));*/
                buttons.push({
                    title: 'Send Email',
                    icon: "fa-envelope text-green",
                    separator: false,
                    onClick: function () {
                        if (!_this.onViewSubmit())
                            return;
                        var checkedIDs = _this.rowSelection.getSelectedAsInt32();
                        if (checkedIDs.length == 0) {
                            Q.alert("You must select at least one Volunteer to send email!");
                            return;
                        }
                        new Northwind.MailComposeDialog({
                            toVoluntueer: checkedIDs
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            EmployeesGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(function () { return _this.rowSelection; }));
                return columns;
            };
            EmployeesGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter["Inactive" /* Inactive */] = false;
                return true;
            };
            EmployeesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], EmployeesGrid);
            return EmployeesGrid;
        }(Serenity.EntityGrid));
        Northwind.EmployeesGrid = EmployeesGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var InactiveEmployeesGrid = /** @class */ (function (_super) {
            __extends(InactiveEmployeesGrid, _super);
            function InactiveEmployeesGrid(container) {
                return _super.call(this, container) || this;
            }
            InactiveEmployeesGrid.prototype.getColumnsKey = function () { return "Northwind.Employees"; };
            InactiveEmployeesGrid.prototype.getDialogType = function () { return Northwind.EmployeesDialog; };
            InactiveEmployeesGrid.prototype.getIdProperty = function () { return Northwind.EmployeesRow.idProperty; };
            InactiveEmployeesGrid.prototype.getLocalTextPrefix = function () { return Northwind.EmployeesRow.localTextPrefix; };
            InactiveEmployeesGrid.prototype.getService = function () { return Northwind.EmployeesService.baseUrl; };
            InactiveEmployeesGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter["Inactive" /* Inactive */] = true;
                return true;
            };
            InactiveEmployeesGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], InactiveEmployeesGrid);
            return InactiveEmployeesGrid;
        }(Northwind.EmployeesGrid));
        Northwind.InactiveEmployeesGrid = InactiveEmployeesGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailBodyViewer = /** @class */ (function (_super) {
            __extends(MailBodyViewer, _super);
            function MailBodyViewer(element) {
                var _this = _super.call(this, element) || this;
                element.attr("border", "0")
                    .css("border", "1px solid #eee")
                    .css("width", "100%")
                    .css("height", "400px");
                return _this;
            }
            MailBodyViewer.prototype.setEditValue = function (source, property) {
                var value = source[property.name];
                var iframe = this.element[0];
                iframe.onload = function () {
                    var doc = iframe.contentDocument;
                    doc.open();
                    doc.write(value || '');
                    doc.close();
                    $(iframe.contentDocument.body).removeAttr('oncontextmenu');
                    iframe.style.height = (Math.max(250, iframe.contentWindow.document.body.scrollHeight + 30)) + 'px';
                };
            };
            MailBodyViewer = __decorate([
                Serenity.Decorators.element("<iframe />"),
                Serenity.Decorators.registerEditor([Serenity.ISetEditValue])
            ], MailBodyViewer);
            return MailBodyViewer;
        }(Serenity.Widget));
        Northwind.MailBodyViewer = MailBodyViewer;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailComposeDialog = /** @class */ (function (_super) {
            __extends(MailComposeDialog, _super);
            function MailComposeDialog(opt) {
                var _this = _super.call(this, opt) || this;
                _this.form = new Northwind.MailComposeForm(_this.idPrefix);
                _this.dialogTitle = "Compose Mail";
                _this.form.To.value = opt.toVoluntueer ? opt.toVoluntueer.toString() : null;
                if (opt.ccList && opt.ccList.length) {
                    _this.form.Cc.values = opt.ccList.map(function (x) { return x.toString(); });
                }
                _this.form.Subject.value = opt.subject;
                if (opt.body)
                    _this.form.BodyHtml.value = opt.body;
                if (opt.attachments)
                    _this.form.Attachments.value = opt.attachments;
                if (opt.mailFromTrip) {
                    var body = _this.form.BodyHtml.value;
                    body = body.replace('{RideNumber}', opt.rideNumber.toString()).replace('{AppointmentDate}', opt.appointmentDate.toString().substring(0, 15)).replace('{ClientName}', opt.clientName)
                        .replace('{PickupAddress}', opt.pickupAddress).replace('{AltPhone}', opt.altPhone).replace('{TelephoneNumber}', opt.telephoneNumber).replace('{PickupTime}', opt.pickupTime).replace('{DeliveryAddress}', opt.deliveryAddress).replace('{ApptTime}', opt.apptLength).replace('{ApptType}', opt.apptType).replace('{AppointmentTime}', opt.appointmentTime).replace('{DeliveryAddress2}', opt.deliveryAddress2).replace('{ApptTime2}', opt.apptLength2).replace('{ApptType2}', opt.apptType2).replace('{AppointmentTime2}', opt.appointmentTime2).replace('{SpecialNeedsTemp}', opt.specialNeedsTemp).replace('{SpecialConditionsDirections}', opt.specialConditionsDirections);
                    _this.form.BodyHtml.value = body;
                }
                return _this;
            }
            MailComposeDialog.prototype.getDialogButtons = function () {
                var buttons = _super.prototype['getDialogButtons'].call(this);
                buttons[0].text = "Send";
                return buttons;
            };
            MailComposeDialog.prototype.getDialogOptions = function () {
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.width = 950;
                return opt;
            };
            MailComposeDialog.prototype.validateBeforeSave = function () {
                if (!_super.prototype.validateBeforeSave.call(this))
                    return false;
                if (this.options.attachments &&
                    (!this.form.Attachments.value ||
                        !this.form.Attachments.value.length)) {
                    Q.notifyError("You need to attach a file to this message!");
                    return false;
                }
                return true;
            };
            MailComposeDialog.prototype.okClickValidated = function () {
                var _this = this;
                var request = {};
                this.propertyGrid.save(request);
                Northwind.MailService.Compose(request, function (response) {
                    Serenity.SubDialogHelper.triggerDataChange(_this);
                    _this.dialogClose();
                });
            };
            MailComposeDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailComposeDialog);
            return MailComposeDialog;
        }(Serenity.PropertyDialog));
        Northwind.MailComposeDialog = MailComposeDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailContentEditor = /** @class */ (function (_super) {
            __extends(MailContentEditor, _super);
            function MailContentEditor(element, opt) {
                return _super.call(this, element, opt) || this;
            }
            MailContentEditor.prototype.getConfig = function () {
                var config = _super.prototype.getConfig.call(this);
                config.extraPlugins = (config.extraPlugins ? (config.extraPlugins + ",") : "") + "uploadimage,image2";
                config.removePlugins = (config.removePlugins ? (config.removePlugins + ",") : "") + "elementspath";
                config.imageUploadUrl = Q.resolveUrl("~/File/TemporaryUploadCK");
                config.fullPage = true;
                config.allowedContent = true;
                return config;
            };
            MailContentEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], MailContentEditor);
            return MailContentEditor;
        }(Serenity.HtmlContentEditor));
        Northwind.MailContentEditor = MailContentEditor;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailDialog = /** @class */ (function (_super) {
            __extends(MailDialog, _super);
            function MailDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.MailForm(_this.idPrefix);
                return _this;
            }
            MailDialog.prototype.getFormKey = function () { return Northwind.MailForm.formKey; };
            MailDialog.prototype.getIdProperty = function () { return Northwind.MailRow.idProperty; };
            MailDialog.prototype.getLocalTextPrefix = function () { return Northwind.MailRow.localTextPrefix; };
            MailDialog.prototype.getNameProperty = function () { return Northwind.MailRow.nameProperty; };
            MailDialog.prototype.getService = function () { return Northwind.MailService.baseUrl; };
            MailDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadonly(this.element.find('.editor').not('iframe'), true);
                this.applyChangesButton.hide();
                this.saveAndCloseButton.hide();
                this.deleteButton.hide();
            };
            MailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailDialog);
            return MailDialog;
        }(Serenity.EntityDialog));
        Northwind.MailDialog = MailDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailGrid = /** @class */ (function (_super) {
            __extends(MailGrid, _super);
            function MailGrid(container, opt) {
                var _this = _super.call(this, container, opt) || this;
                if (_this.options.isSent != null)
                    _this.setEquality("IsSent" /* IsSent */, _this.options.isSent);
                return _this;
            }
            MailGrid.prototype.getColumnsKey = function () { return 'Northwind.Mail'; };
            MailGrid.prototype.getDialogType = function () { return Northwind.MailDialog; };
            MailGrid.prototype.getIdProperty = function () { return Northwind.MailRow.idProperty; };
            MailGrid.prototype.getLocalTextPrefix = function () { return Northwind.MailRow.localTextPrefix; };
            MailGrid.prototype.getService = function () { return Northwind.MailService.baseUrl; };
            MailGrid.prototype.getItemCssClass = function (item, index) {
                return (_super.prototype.getItemCssClass.call(this, item, index) || "") +
                    (item.IsSent == false ? " deleted" : "");
            };
            MailGrid.prototype.getIncludeColumns = function (include) {
                _super.prototype.getIncludeColumns.call(this, include);
                include["IsSent" /* IsSent */] = true;
            };
            MailGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.ColumnSelection = 1 /* KeyOnly */;
                return true;
            };
            MailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MailGrid);
            return MailGrid;
        }(Serenity.EntityGrid));
        Northwind.MailGrid = MailGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailAttachmentsDialog = /** @class */ (function (_super) {
            __extends(MailAttachmentsDialog, _super);
            function MailAttachmentsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.MailAttachmentsForm(_this.idPrefix);
                return _this;
            }
            MailAttachmentsDialog.prototype.getFormKey = function () { return Northwind.MailAttachmentsForm.formKey; };
            MailAttachmentsDialog.prototype.getIdProperty = function () { return Northwind.MailAttachmentsRow.idProperty; };
            MailAttachmentsDialog.prototype.getLocalTextPrefix = function () { return Northwind.MailAttachmentsRow.localTextPrefix; };
            MailAttachmentsDialog.prototype.getNameProperty = function () { return Northwind.MailAttachmentsRow.nameProperty; };
            MailAttachmentsDialog.prototype.getService = function () { return Northwind.MailAttachmentsService.baseUrl; };
            MailAttachmentsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], MailAttachmentsDialog);
            return MailAttachmentsDialog;
        }(Serenity.EntityDialog));
        Northwind.MailAttachmentsDialog = MailAttachmentsDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var MailAttachmentsGrid = /** @class */ (function (_super) {
            __extends(MailAttachmentsGrid, _super);
            function MailAttachmentsGrid(container) {
                return _super.call(this, container) || this;
            }
            MailAttachmentsGrid.prototype.getColumnsKey = function () { return 'Northwind.MailAttachments'; };
            MailAttachmentsGrid.prototype.getDialogType = function () { return Northwind.MailAttachmentsDialog; };
            MailAttachmentsGrid.prototype.getIdProperty = function () { return Northwind.MailAttachmentsRow.idProperty; };
            MailAttachmentsGrid.prototype.getLocalTextPrefix = function () { return Northwind.MailAttachmentsRow.localTextPrefix; };
            MailAttachmentsGrid.prototype.getService = function () { return Northwind.MailAttachmentsService.baseUrl; };
            MailAttachmentsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MailAttachmentsGrid);
            return MailAttachmentsGrid;
        }(Serenity.EntityGrid));
        Northwind.MailAttachmentsGrid = MailAttachmentsGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var NoteDialog = /** @class */ (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                var _this = _super.call(this) || this;
                _this.textEditor = new Serenity.HtmlNoteContentEditor(_this.byId('Text'));
                return _this;
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Northwind.NoteDialog = NoteDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var NotesEditor = /** @class */ (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = _super.call(this, div) || this;
                new Serenity.Toolbar(_this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
                return _this;
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(item.InsertDate, 'g'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: MobilityMatters.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Northwind.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Northwind.NotesEditor = NotesEditor;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var CancelledOrderGrid = /** @class */ (function (_super) {
            __extends(CancelledOrderGrid, _super);
            function CancelledOrderGrid(container) {
                return _super.call(this, container) || this;
            }
            CancelledOrderGrid.prototype.getColumnsKey = function () { return "Northwind.Order"; };
            CancelledOrderGrid.prototype.getDialogType = function () { return Northwind.OrderDialog; };
            CancelledOrderGrid.prototype.getIdProperty = function () { return Northwind.OrderRow.idProperty; };
            CancelledOrderGrid.prototype.getLocalTextPrefix = function () { return Northwind.OrderRow.localTextPrefix; };
            CancelledOrderGrid.prototype.getService = function () { return Northwind.OrderService.baseUrl; };
            CancelledOrderGrid.prototype.createToolbarExtensions = function () {
                _super.prototype.createToolbarExtensions.call(this);
                this.rowSelection = new Serenity.GridRowSelectionMixin(this);
            };
            /*protected getQuickFilters() {
                var filters = super.getQuickFilters();
    
                filters.push({
                    type: Serenity.LookupEditor,
                    options: {
                        lookupKey: ProductRow.lookupKey
                    },
                    field: 'ProductID',
                    title: 'Contains Product in Details',
                    handler: w => {
                        (this.view.params as OrderListRequest).ProductID = Q.toId(w.value);
                    },
                    cssClass: 'hidden-xs'
                });
    
                return filters;
            }*/
            //protected createQuickFilters() {
            //    super.createQuickFilters();
            //    this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            //}
            CancelledOrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                /*buttons.push(Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: () => this.onViewSubmit()
                }));*/
                //buttons.push({
                //    title: 'Send Email',
                //    icon: "fa-envelope text-green",
                //    separator: false,
                //    onClick: () => {
                //        if (!this.onViewSubmit())
                //            return;
                //        var checkedIDs = this.rowSelection.getSelectedAsInt32();
                //        if (checkedIDs.length == 0) {
                //            Q.alert("You must select a trip!");
                //            return;
                //        }
                //        new Northwind.MailComposeDialog({
                //            toVoluntueer: checkedIDs
                //        }).dialogOpen();
                //    }
                //});
                return buttons;
            };
            /*protected getColumns() {
                var columns = super.getColumns();
    
                columns.splice(1, 0, {
                    field: 'Print Invoice',
                    name: '',
                    format: ctx => '<a class="inline-action print-invoice" title="invoice">' +
                        '<i class="fa fa-file-pdf-o text-red"></i></a>',
                    width: 24,
                    minWidth: 24,
                    maxWidth: 24
                });
    
                columns.splice(0, 0, Serenity.GridRowSelectionMixin.createSelectColumn(() => this.rowSelection));
    
                return columns;
            }*/
            //protected onClick(e: JQueryEventObject, row: number, cell: number) {
            //    super.onClick(e, row, cell);
            //    if (e.isDefaultPrevented())
            //        return;
            //    var item = this.itemAt(row);
            //    var target = $(e.target);
            //    // if user clicks "i" element, e.g. icon
            //    if (target.parent().hasClass('inline-action'))
            //        target = target.parent();
            //    if (target.hasClass('inline-action')) {
            //        e.preventDefault();
            //        if (target.hasClass('print-invoice')) {
            //            MobilityMatters.Common.ReportHelper.execute({
            //                reportKey: 'Northwind.OrderDetail',
            //                params: {
            //                    OrderID: item.OrderID
            //                }
            //            });
            //        }
            //    }
            //}
            CancelledOrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            CancelledOrderGrid.prototype.addButtonClick = function () {
                var eq = this.view.params.EqualityFilter;
                this.editItem({
                    CustomerID: eq ? eq.CustomerID : null
                });
            };
            CancelledOrderGrid.prototype.onViewSubmit = function () {
                if (!_super.prototype.onViewSubmit.call(this))
                    return false;
                var request = this.view.params;
                request.EqualityFilter = request.EqualityFilter || {};
                request.EqualityFilter["Cancelled" /* Cancelled */] = true;
                return true;
            };
            CancelledOrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CancelledOrderGrid);
            return CancelledOrderGrid;
        }(Serenity.EntityGrid));
        Northwind.CancelledOrderGrid = CancelledOrderGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var FreightFormatter = /** @class */ (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Northwind.FreightFormatter = FreightFormatter;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailDialog = /** @class */ (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = _super.call(this) || this;
                _this.form = new Northwind.OrderDetailForm(_this.idPrefix);
                _this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = Northwind.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                _this.form.Discount.addValidationRule(_this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
                return _this;
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Northwind.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(MobilityMatters.Common.GridEditorDialog));
        Northwind.OrderDetailDialog = OrderDetailDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var OrderDetailsEditor = /** @class */ (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                return _super.call(this, container) || this;
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Northwind.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Northwind.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Northwind.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = Northwind.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(MobilityMatters.Common.GridEditorBase));
        Northwind.OrderDetailsEditor = OrderDetailsEditor;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductDialog = /** @class */ (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ProductForm(_this.idPrefix);
                return _this;
            }
            ProductDialog.prototype.getFormKey = function () { return Northwind.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Northwind.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Northwind.ProductDialog = ProductDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ProductGrid = /** @class */ (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = _super.call(this, container) || this;
                _this.pendingChanges = {};
                _this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
                return _this;
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Northwind.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Northwind.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Northwind.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Northwind.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Northwind.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(MobilityMatters.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Northwind.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(MobilityMatters.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: 'Save Changes',
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.attrEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + Q.attrEncode(id) + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === "CategoryName" /* CategoryName */; });
                category.referencedFields = ["CategoryID" /* CategoryID */];
                category.format = function (ctx) { return _this.selectFormatter(ctx, "CategoryID" /* CategoryID */, Northwind.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === "SupplierCompanyName" /* SupplierCompanyName */; });
                supplier.referencedFields = ["SupplierID" /* SupplierID */];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, "SupplierID" /* SupplierID */, Northwind.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === "UnitPrice" /* UnitPrice */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsInStock" /* UnitsInStock */; }).format = num;
                Q.first(columns, function (x) { return x.field === "UnitsOnOrder" /* UnitsOnOrder */; }).format = num;
                Q.first(columns, function (x) { return x.field === "ReorderLevel" /* ReorderLevel */; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Northwind/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getQuickFilters = function () {
                var flt = _super.prototype.getQuickFilters.call(this);
                var q = Q.parseQueryString();
                if (q["cat"]) {
                    var category = Q.tryFirst(flt, function (x) { return x.field == "CategoryID"; });
                    category.init = function (e) {
                        e.element.getWidget(Serenity.LookupEditor).value = q["cat"];
                    };
                }
                return flt;
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Northwind.ProductGrid = ProductGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RegionDialog = /** @class */ (function (_super) {
            __extends(RegionDialog, _super);
            function RegionDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.RegionForm(_this.idPrefix);
                return _this;
            }
            RegionDialog.prototype.getFormKey = function () { return Northwind.RegionForm.formKey; };
            RegionDialog.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionDialog.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionDialog.prototype.getNameProperty = function () { return Northwind.RegionRow.nameProperty; };
            RegionDialog.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionDialog.prototype.getLanguages = function () {
                return MobilityMatters.LanguageList.getValue();
            };
            RegionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionDialog);
            return RegionDialog;
        }(Serenity.EntityDialog));
        Northwind.RegionDialog = RegionDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var RegionGrid = /** @class */ (function (_super) {
            __extends(RegionGrid, _super);
            function RegionGrid(container) {
                return _super.call(this, container) || this;
            }
            RegionGrid.prototype.getColumnsKey = function () { return "Northwind.Region"; };
            RegionGrid.prototype.getDialogType = function () { return Northwind.RegionDialog; };
            RegionGrid.prototype.getIdProperty = function () { return Northwind.RegionRow.idProperty; };
            RegionGrid.prototype.getLocalTextPrefix = function () { return Northwind.RegionRow.localTextPrefix; };
            RegionGrid.prototype.getService = function () { return Northwind.RegionService.baseUrl; };
            RegionGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RegionGrid);
            return RegionGrid;
        }(Serenity.EntityGrid));
        Northwind.RegionGrid = RegionGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var PhoneEditor = /** @class */ (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = _super.call(this, input) || this;
                _this.addValidationRule(_this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor_1.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
                return _this;
            }
            PhoneEditor_1 = PhoneEditor;
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor_1.formatMulti(value, PhoneEditor_1.formatPhone);
                }
                return PhoneEditor_1.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor_1.isValidMulti(phone, PhoneEditor_1.isValidPhone) : PhoneEditor_1.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor_1.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            var PhoneEditor_1;
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = PhoneEditor_1 = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Northwind.PhoneEditor = PhoneEditor;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperDialog = /** @class */ (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.ShipperForm(_this.idPrefix);
                return _this;
            }
            ShipperDialog.prototype.getFormKey = function () { return Northwind.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Northwind.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return MobilityMatters.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Northwind.ShipperDialog = ShipperDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperFormatter = /** @class */ (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Northwind.ShipperFormatter = ShipperFormatter;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var ShipperGrid = /** @class */ (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                return _super.call(this, container) || this;
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Northwind.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Northwind.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Northwind.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Northwind.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Northwind.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Northwind.ShipperGrid = ShipperGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsDialog = /** @class */ (function (_super) {
            __extends(SpecialNeedsDialog, _super);
            function SpecialNeedsDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SpecialNeedsForm(_this.idPrefix);
                return _this;
            }
            SpecialNeedsDialog.prototype.getFormKey = function () { return Northwind.SpecialNeedsForm.formKey; };
            SpecialNeedsDialog.prototype.getIdProperty = function () { return Northwind.SpecialNeedsRow.idProperty; };
            SpecialNeedsDialog.prototype.getLocalTextPrefix = function () { return Northwind.SpecialNeedsRow.localTextPrefix; };
            SpecialNeedsDialog.prototype.getNameProperty = function () { return Northwind.SpecialNeedsRow.nameProperty; };
            SpecialNeedsDialog.prototype.getService = function () { return Northwind.SpecialNeedsService.baseUrl; };
            SpecialNeedsDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNeedsDialog);
            return SpecialNeedsDialog;
        }(Serenity.EntityDialog));
        Northwind.SpecialNeedsDialog = SpecialNeedsDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsGrid = /** @class */ (function (_super) {
            __extends(SpecialNeedsGrid, _super);
            function SpecialNeedsGrid(container) {
                return _super.call(this, container) || this;
            }
            SpecialNeedsGrid.prototype.getColumnsKey = function () { return 'Northwind.SpecialNeeds'; };
            SpecialNeedsGrid.prototype.getDialogType = function () { return Northwind.SpecialNeedsDialog; };
            SpecialNeedsGrid.prototype.getIdProperty = function () { return Northwind.SpecialNeedsRow.idProperty; };
            SpecialNeedsGrid.prototype.getLocalTextPrefix = function () { return Northwind.SpecialNeedsRow.localTextPrefix; };
            SpecialNeedsGrid.prototype.getService = function () { return Northwind.SpecialNeedsService.baseUrl; };
            SpecialNeedsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNeedsGrid);
            return SpecialNeedsGrid;
        }(Serenity.EntityGrid));
        Northwind.SpecialNeedsGrid = SpecialNeedsGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleVolunteerDialog = /** @class */ (function (_super) {
            __extends(SpecialNeedsMultipleVolunteerDialog, _super);
            function SpecialNeedsMultipleVolunteerDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SpecialNeedsMultipleVolunteerForm(_this.idPrefix);
                return _this;
            }
            SpecialNeedsMultipleVolunteerDialog.prototype.getFormKey = function () { return Northwind.SpecialNeedsMultipleVolunteerForm.formKey; };
            SpecialNeedsMultipleVolunteerDialog.prototype.getIdProperty = function () { return Northwind.SpecialNeedsMultipleVolunteerRow.idProperty; };
            SpecialNeedsMultipleVolunteerDialog.prototype.getLocalTextPrefix = function () { return Northwind.SpecialNeedsMultipleVolunteerRow.localTextPrefix; };
            SpecialNeedsMultipleVolunteerDialog.prototype.getService = function () { return Northwind.SpecialNeedsMultipleVolunteerService.baseUrl; };
            SpecialNeedsMultipleVolunteerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNeedsMultipleVolunteerDialog);
            return SpecialNeedsMultipleVolunteerDialog;
        }(Serenity.EntityDialog));
        Northwind.SpecialNeedsMultipleVolunteerDialog = SpecialNeedsMultipleVolunteerDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SpecialNeedsMultipleVolunteerGrid = /** @class */ (function (_super) {
            __extends(SpecialNeedsMultipleVolunteerGrid, _super);
            function SpecialNeedsMultipleVolunteerGrid(container) {
                return _super.call(this, container) || this;
            }
            SpecialNeedsMultipleVolunteerGrid.prototype.getColumnsKey = function () { return 'Northwind.SpecialNeedsMultipleVolunteer'; };
            SpecialNeedsMultipleVolunteerGrid.prototype.getDialogType = function () { return Northwind.SpecialNeedsMultipleVolunteerDialog; };
            SpecialNeedsMultipleVolunteerGrid.prototype.getIdProperty = function () { return Northwind.SpecialNeedsMultipleVolunteerRow.idProperty; };
            SpecialNeedsMultipleVolunteerGrid.prototype.getLocalTextPrefix = function () { return Northwind.SpecialNeedsMultipleVolunteerRow.localTextPrefix; };
            SpecialNeedsMultipleVolunteerGrid.prototype.getService = function () { return Northwind.SpecialNeedsMultipleVolunteerService.baseUrl; };
            SpecialNeedsMultipleVolunteerGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SpecialNeedsMultipleVolunteerGrid);
            return SpecialNeedsMultipleVolunteerGrid;
        }(Serenity.EntityGrid));
        Northwind.SpecialNeedsMultipleVolunteerGrid = SpecialNeedsMultipleVolunteerGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SupplierDialog = /** @class */ (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.SupplierForm(_this.idPrefix);
                return _this;
            }
            SupplierDialog.prototype.getFormKey = function () { return Northwind.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Northwind.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return MobilityMatters.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Northwind.SupplierDialog = SupplierDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var SupplierGrid = /** @class */ (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                return _super.call(this, container) || this;
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Northwind.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Northwind.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Northwind.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Northwind.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Northwind.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Northwind.SupplierGrid = SupplierGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var TerritoryDialog = /** @class */ (function (_super) {
            __extends(TerritoryDialog, _super);
            function TerritoryDialog() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.form = new Northwind.TerritoryForm(_this.idPrefix);
                return _this;
            }
            TerritoryDialog.prototype.getFormKey = function () { return Northwind.TerritoryForm.formKey; };
            TerritoryDialog.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryDialog.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryDialog.prototype.getNameProperty = function () { return Northwind.TerritoryRow.nameProperty; };
            TerritoryDialog.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryDialog.prototype.getLanguages = function () {
                return MobilityMatters.LanguageList.getValue();
            };
            TerritoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryDialog);
            return TerritoryDialog;
        }(Serenity.EntityDialog));
        Northwind.TerritoryDialog = TerritoryDialog;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
var MobilityMatters;
(function (MobilityMatters) {
    var Northwind;
    (function (Northwind) {
        var TerritoryGrid = /** @class */ (function (_super) {
            __extends(TerritoryGrid, _super);
            function TerritoryGrid(container) {
                return _super.call(this, container) || this;
            }
            TerritoryGrid.prototype.getColumnsKey = function () { return "Northwind.Territory"; };
            TerritoryGrid.prototype.getDialogType = function () { return Northwind.TerritoryDialog; };
            TerritoryGrid.prototype.getIdProperty = function () { return Northwind.TerritoryRow.idProperty; };
            TerritoryGrid.prototype.getLocalTextPrefix = function () { return Northwind.TerritoryRow.localTextPrefix; };
            TerritoryGrid.prototype.getService = function () { return Northwind.TerritoryService.baseUrl; };
            TerritoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TerritoryGrid);
            return TerritoryGrid;
        }(Serenity.EntityGrid));
        Northwind.TerritoryGrid = TerritoryGrid;
    })(Northwind = MobilityMatters.Northwind || (MobilityMatters.Northwind = {}));
})(MobilityMatters || (MobilityMatters = {}));
//# sourceMappingURL=MobilityMatters.Web.js.map