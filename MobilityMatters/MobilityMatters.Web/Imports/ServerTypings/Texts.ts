﻿namespace MobilityMatters.Texts {

    declare namespace Db {

        namespace Administration {

            namespace Language {
                export const Id: string;
                export const LanguageId: string;
                export const LanguageName: string;
            }

            namespace Role {
                export const RoleId: string;
                export const RoleName: string;
            }

            namespace RolePermission {
                export const PermissionKey: string;
                export const RoleId: string;
                export const RolePermissionId: string;
                export const RoleRoleName: string;
            }

            namespace Translation {
                export const CustomText: string;
                export const EntityPlural: string;
                export const Key: string;
                export const OverrideConfirmation: string;
                export const SaveChangesButton: string;
                export const SourceLanguage: string;
                export const SourceText: string;
                export const TargetLanguage: string;
                export const TargetText: string;
            }

            namespace User {
                export const DisplayName: string;
                export const Email: string;
                export const InsertDate: string;
                export const InsertUserId: string;
                export const IsActive: string;
                export const LastDirectoryUpdate: string;
                export const Password: string;
                export const PasswordConfirm: string;
                export const PasswordHash: string;
                export const PasswordSalt: string;
                export const Source: string;
                export const UpdateDate: string;
                export const UpdateUserId: string;
                export const UserId: string;
                export const UserImage: string;
                export const Username: string;
            }

            namespace UserPermission {
                export const Granted: string;
                export const PermissionKey: string;
                export const User: string;
                export const UserId: string;
                export const UserPermissionId: string;
                export const Username: string;
            }

            namespace UserRole {
                export const RoleId: string;
                export const User: string;
                export const UserId: string;
                export const UserRoleId: string;
                export const Username: string;
            }
        }

        namespace Common {

            namespace UserPreference {
                export const Name: string;
                export const PreferenceType: string;
                export const UserId: string;
                export const UserPreferenceId: string;
                export const Value: string;
            }
        }

        namespace Northwind {

            namespace AvailabilityAm {
                export const AvailabilityAmid: string;
                export const Day: string;
            }

            namespace AvailabilityAmMultiple {
                export const AvailabilityAmMultipleId: string;
                export const AvailabilityAmid: string;
                export const EmployeeId: string;
            }

            namespace AvailabilityPm {
                export const AvailabilityPmid: string;
                export const Day: string;
            }

            namespace AvailabilityPmMultiple {
                export const AvailabilityPmMultipleId: string;
                export const AvailabilityPmid: string;
                export const EmployeeId: string;
            }

            namespace Category {
                export const CategoryID: string;
                export const CategoryName: string;
                export const Description: string;
                export const Picture: string;
            }

            namespace CategoryLang {
                export const CategoryId: string;
                export const CategoryName: string;
                export const Description: string;
                export const Id: string;
                export const LanguageId: string;
            }

            namespace Cities {
                export const CityId: string;
                export const Name: string;
            }

            namespace CitiesMulti {
                export const CitiesMultiId: string;
                export const CityId: string;
                export const CityName: string;
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeDriversLicense: string;
                export const EmployeeDriversLicenseExp: string;
                export const EmployeeEmail: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeGender: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeId: string;
                export const EmployeeInsurance: string;
                export const EmployeeInsuranceExp: string;
                export const EmployeeLastName: string;
                export const EmployeeLicensePlate: string;
                export const EmployeeLicensePlateExp: string;
                export const EmployeeNotes: string;
                export const EmployeeOnVacation: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeSmoker: string;
                export const EmployeeSpecialNeedsId: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const EmployeeVehicleMake: string;
                export const EmployeeVehicleModel: string;
            }

            namespace Customer {
                export const Active: string;
                export const Address: string;
                export const AgeCalc: string;
                export const AltPhone: string;
                export const BirthDate: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const Country: string;
                export const County: string;
                export const CustomerID: string;
                export const DNR: string;
                export const DateOfLastTrip: string;
                export const Dental: string;
                export const EIO: string;
                export const Email: string;
                export const EmergencyName: string;
                export const EmergencyName2: string;
                export const EmergencyPhone: string;
                export const EmergencyPhone2: string;
                export const EmergencyRelation: string;
                export const EmergencyRelation2: string;
                export const EndDate: string;
                export const FullName: string;
                export const Gender: string;
                export const Groceries: string;
                export const ID: string;
                export const LivingWith: string;
                export const Medical: string;
                export const NoteList: string;
                export const OtherTransport: string;
                export const PLanguage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const PreferredHospital: string;
                export const Program: string;
                export const ProgramOption: string;
                export const Radio: string;
                export const ReferralSource: string;
                export const Region: string;
                export const Representatives: string;
                export const Residence: string;
                export const Smoker: string;
                export const SpecialConditionsDirections: string;
                export const SpecialNeedsList: string;
                export const SpecialNeedsPlainText: string;
                export const StartDate: string;
                export const TEMP: string;
                export const WhyEnding: string;
            }

            namespace CustomerCustomerDemo {
                export const CustomerAddress: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerContactTitle: string;
                export const CustomerCountry: string;
                export const CustomerFax: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerPostalCode: string;
                export const CustomerRegion: string;
                export const CustomerTypeCustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDemographic {
                export const CustomerDesc: string;
                export const CustomerTypeID: string;
                export const ID: string;
            }

            namespace CustomerDetails {
                export const Dental: string;
                export const Email: string;
                export const EmergencyName: string;
                export const EmergencyName2: string;
                export const EmergencyPhone: string;
                export const EmergencyPhone2: string;
                export const EmergencyRelation: string;
                export const EmergencyRelation2: string;
                export const Gender: string;
                export const Groceries: string;
                export const Id: string;
                export const LastContactDate: string;
                export const LastContactedBy: string;
                export const LastContactedByAddress: string;
                export const LastContactedByBirthDate: string;
                export const LastContactedByCity: string;
                export const LastContactedByCountry: string;
                export const LastContactedByExtension: string;
                export const LastContactedByFirstName: string;
                export const LastContactedByHireDate: string;
                export const LastContactedByHomePhone: string;
                export const LastContactedByLastName: string;
                export const LastContactedByNotes: string;
                export const LastContactedByPhoto: string;
                export const LastContactedByPhotoPath: string;
                export const LastContactedByPostalCode: string;
                export const LastContactedByRegion: string;
                export const LastContactedByReportsTo: string;
                export const LastContactedByTitle: string;
                export const LastContactedByTitleOfCourtesy: string;
                export const LivingWith: string;
                export const Medical: string;
                export const OtherTransport: string;
                export const PreferredHospital: string;
                export const ReferralSource: string;
                export const TEMP: string;
            }

            namespace CustomerGrossSales {
                export const ContactName: string;
                export const CustomerId: string;
                export const GrossAmount: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace CustomerRepresentatives {
                export const CustomerId: string;
                export const EmployeeId: string;
                export const RepresentativeId: string;
            }

            namespace Employee {
                export const Address: string;
                export const BirthDate: string;
                export const City: string;
                export const Country: string;
                export const EmployeeID: string;
                export const Extension: string;
                export const FirstName: string;
                export const FullName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const LastName: string;
                export const Notes: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PostalCode: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToFullName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToReportsTo: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
            }

            namespace EmployeeTerritory {
                export const EmployeeAddress: string;
                export const EmployeeBirthDate: string;
                export const EmployeeCity: string;
                export const EmployeeCountry: string;
                export const EmployeeExtension: string;
                export const EmployeeFirstName: string;
                export const EmployeeHireDate: string;
                export const EmployeeHomePhone: string;
                export const EmployeeID: string;
                export const EmployeeLastName: string;
                export const EmployeeNotes: string;
                export const EmployeePhoto: string;
                export const EmployeePhotoPath: string;
                export const EmployeePostalCode: string;
                export const EmployeeRegion: string;
                export const EmployeeReportsTo: string;
                export const EmployeeTitle: string;
                export const EmployeeTitleOfCourtesy: string;
                export const TerritoryID: string;
                export const TerritoryRegionID: string;
                export const TerritoryTerritoryDescription: string;
            }

            namespace Employees {
                export const Address: string;
                export const AvailabilityAMList: string;
                export const AvailabilityPMList: string;
                export const BirthDate: string;
                export const CitiesList: string;
                export const City: string;
                export const Country: string;
                export const DMVClearance: string;
                export const DateOfLastTrip: string;
                export const DriversLicense: string;
                export const DriversLicenseExp: string;
                export const Email: string;
                export const EmployeeId: string;
                export const EndDate: string;
                export const Extension: string;
                export const FirstName: string;
                export const Gender: string;
                export const HireDate: string;
                export const HomePhone: string;
                export const Inactive: string;
                export const Insurance: string;
                export const InsuranceExp: string;
                export const Language: string;
                export const LastName: string;
                export const LicensePlate: string;
                export const LicensePlateExp: string;
                export const Notes: string;
                export const NotesPlainText: string;
                export const OnVacation: string;
                export const Photo: string;
                export const PhotoPath: string;
                export const PoliceClearance: string;
                export const PostalCode: string;
                export const ReferralSource: string;
                export const Region: string;
                export const ReportsTo: string;
                export const ReportsTo1: string;
                export const ReportsToAddress: string;
                export const ReportsToBirthDate: string;
                export const ReportsToCity: string;
                export const ReportsToCountry: string;
                export const ReportsToExtension: string;
                export const ReportsToFirstName: string;
                export const ReportsToHireDate: string;
                export const ReportsToHomePhone: string;
                export const ReportsToLastName: string;
                export const ReportsToNotes: string;
                export const ReportsToPhoto: string;
                export const ReportsToPhotoPath: string;
                export const ReportsToPostalCode: string;
                export const ReportsToRegion: string;
                export const ReportsToTitle: string;
                export const ReportsToTitleOfCourtesy: string;
                export const ReturnDate: string;
                export const Smoker: string;
                export const SpecialNeedsList: string;
                export const Title: string;
                export const TitleOfCourtesy: string;
                export const TrainingDate: string;
                export const VehicleMake: string;
                export const VehicleMake2: string;
                export const VehicleModel: string;
                export const VehicleModel2: string;
                export const VolunteerRegion: string;
                export const WhyEnding: string;
            }

            namespace Mail {
                export const Attachments: string;
                export const Body: string;
                export const Cc: string;
                export const CreatedBy: string;
                export const CreatedOn: string;
                export const Direction: string;
                export const ErrorMessage: string;
                export const From: string;
                export const IsSent: string;
                export const MailId: string;
                export const ModifiedBy: string;
                export const ModifiedOn: string;
                export const ReceivedDate: string;
                export const SendDateTime: string;
                export const Subject: string;
                export const To: string;
                export const Uid: string;
            }

            namespace MailAttachments {
                export const AttachmentId: string;
                export const CreatedBy: string;
                export const CreatedOn: string;
                export const FilePath: string;
                export const MailBody: string;
                export const MailCc: string;
                export const MailCreatedBy: string;
                export const MailCreatedOn: string;
                export const MailDirection: string;
                export const MailFrom: string;
                export const MailId: string;
                export const MailModifiedBy: string;
                export const MailModifiedOn: string;
                export const MailReceivedDate: string;
                export const MailSendDateTime: string;
                export const MailSubject: string;
                export const MailTo: string;
                export const MailUid: string;
                export const MimeType: string;
                export const ModifiedBy: string;
                export const ModifiedOn: string;
                export const OriginalFileName: string;
                export const Size: string;
            }

            namespace Note {
                export const EntityId: string;
                export const EntityType: string;
                export const InsertDate: string;
                export const InsertUserDisplayName: string;
                export const InsertUserId: string;
                export const NoteId: string;
                export const Text: string;
            }

            namespace Order {
                export const ActualDuration1: string;
                export const ActualDuration2: string;
                export const ActualDuration3: string;
                export const ActualDurationMins1: string;
                export const ActualDurationMins2: string;
                export const ActualDurationMins3: string;
                export const ActualTotalHours: string;
                export const ActualTotalMileage: string;
                export const ActualTotalMinutes: string;
                export const AppointmentTime: string;
                export const AppointmentTime2: string;
                export const AppointmentTime3: string;
                export const ApptTime: string;
                export const ApptTime2: string;
                export const ApptTime3: string;
                export const ApptType: string;
                export const ApptType2: string;
                export const ApptType3: string;
                export const CancelReason: string;
                export const Cancelled: string;
                export const CustomerCity: string;
                export const CustomerCompanyName: string;
                export const CustomerContactName: string;
                export const CustomerCountry: string;
                export const CustomerFullName: string;
                export const CustomerID: string;
                export const CustomerPhone: string;
                export const CustomerRegion: string;
                export const CustomerSpecialConditionsDirections: string;
                export const CustomerSpecialNeedsList: string;
                export const CustomerSpecialNeedsPlainText: string;
                export const CustomerTEMP: string;
                export const DestinationAddress: string;
                export const DestinationAddress2: string;
                export const DestinationAddress3: string;
                export const DestinationApartment: string;
                export const DestinationApartment2: string;
                export const DestinationApartment3: string;
                export const DestinationCity: string;
                export const DestinationCity2: string;
                export const DestinationCity3: string;
                export const DestinationZip: string;
                export const DestinationZip2: string;
                export const DestinationZip3: string;
                export const DetailList: string;
                export const DistanceText: string;
                export const DistanceText2: string;
                export const DistanceText3: string;
                export const DistanceValue: string;
                export const DistanceValue2: string;
                export const DistanceValue3: string;
                export const DurationText: string;
                export const DurationText2: string;
                export const DurationText3: string;
                export const DurationValue: string;
                export const DurationValue2: string;
                export const DurationValue3: string;
                export const EmployeeFullName: string;
                export const EmployeeGender: string;
                export const EmployeeID: string;
                export const EmployeeReportsToFullName: string;
                export const Freight: string;
                export const HowMany: string;
                export const OrderDate: string;
                export const OrderID: string;
                export const RequiredDate: string;
                export const RideCompleted: string;
                export const ShipAddress: string;
                export const ShipCity: string;
                export const ShipCountry: string;
                export const ShipName: string;
                export const ShipPostalCode: string;
                export const ShipRegion: string;
                export const ShipVia: string;
                export const ShipViaCompanyName: string;
                export const ShipViaPhone: string;
                export const ShippedDate: string;
                export const ShippingState: string;
            }

            namespace OrderDetail {
                export const DetailID: string;
                export const Discount: string;
                export const LineTotal: string;
                export const OrderCustomerID: string;
                export const OrderDate: string;
                export const OrderEmployeeID: string;
                export const OrderID: string;
                export const OrderShipCity: string;
                export const OrderShipCountry: string;
                export const OrderShipVia: string;
                export const OrderShippedDate: string;
                export const ProductDiscontinued: string;
                export const ProductID: string;
                export const ProductName: string;
                export const ProductQuantityPerUnit: string;
                export const ProductSupplierID: string;
                export const ProductUnitPrice: string;
                export const Quantity: string;
                export const UnitPrice: string;
            }

            namespace Product {
                export const CategoryDescription: string;
                export const CategoryID: string;
                export const CategoryName: string;
                export const CategoryPicture: string;
                export const Discontinued: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierAddress: string;
                export const SupplierCity: string;
                export const SupplierCompanyName: string;
                export const SupplierContactName: string;
                export const SupplierContactTitle: string;
                export const SupplierCountry: string;
                export const SupplierFax: string;
                export const SupplierHomePage: string;
                export const SupplierID: string;
                export const SupplierPhone: string;
                export const SupplierPostalCode: string;
                export const SupplierRegion: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
            }

            namespace ProductLang {
                export const Id: string;
                export const LanguageId: string;
                export const ProductId: string;
                export const ProductName: string;
            }

            namespace ProductLog {
                export const CategoryID: string;
                export const ChangingUserId: string;
                export const Discontinued: string;
                export const OperationType: string;
                export const ProductID: string;
                export const ProductImage: string;
                export const ProductLogID: string;
                export const ProductName: string;
                export const QuantityPerUnit: string;
                export const ReorderLevel: string;
                export const SupplierID: string;
                export const UnitPrice: string;
                export const UnitsInStock: string;
                export const UnitsOnOrder: string;
                export const ValidFrom: string;
                export const ValidUntil: string;
            }

            namespace Region {
                export const RegionDescription: string;
                export const RegionID: string;
            }

            namespace SalesByCategory {
                export const CategoryId: string;
                export const CategoryName: string;
                export const ProductName: string;
                export const ProductSales: string;
            }

            namespace Shipper {
                export const CompanyName: string;
                export const Phone: string;
                export const ShipperID: string;
            }

            namespace SpecialNeeds {
                export const Name: string;
                export const SpecialNeedsID: string;
            }

            namespace SpecialNeedsMultiple {
                export const CustomerId: string;
                export const SpecialNeedsId: string;
                export const SpecialNeedsMultipleId: string;
            }

            namespace SpecialNeedsMultipleVolunteer {
                export const EmployeeId: string;
                export const SpecialNeedsId: string;
                export const SpecialNeedsMultipleVolunteerId: string;
            }

            namespace Supplier {
                export const Address: string;
                export const City: string;
                export const CompanyName: string;
                export const ContactName: string;
                export const ContactTitle: string;
                export const Country: string;
                export const Fax: string;
                export const HomePage: string;
                export const Phone: string;
                export const PostalCode: string;
                export const Region: string;
                export const SupplierID: string;
            }

            namespace Territory {
                export const ID: string;
                export const RegionDescription: string;
                export const RegionID: string;
                export const TerritoryDescription: string;
                export const TerritoryID: string;
            }
        }
    }

    declare namespace Forms {

        namespace Membership {

            namespace ChangePassword {
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace ForgotPassword {
                export const BackToLogin: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace Login {
                export const FacebookButton: string;
                export const ForgotPassword: string;
                export const FormTitle: string;
                export const GoogleButton: string;
                export const OR: string;
                export const RememberMe: string;
                export const SignInButton: string;
                export const SignUpButton: string;
            }

            namespace ResetPassword {
                export const BackToLogin: string;
                export const EmailSubject: string;
                export const FormTitle: string;
                export const SubmitButton: string;
                export const Success: string;
            }

            namespace SignUp {
                export const AcceptTerms: string;
                export const ActivateEmailSubject: string;
                export const ActivationCompleteMessage: string;
                export const BackToLogin: string;
                export const ConfirmEmail: string;
                export const ConfirmPassword: string;
                export const DisplayName: string;
                export const Email: string;
                export const FormInfo: string;
                export const FormTitle: string;
                export const Password: string;
                export const SubmitButton: string;
                export const Success: string;
            }
        }
    }

    declare namespace Site {

        namespace AccessDenied {
            export const ClickToChangeUser: string;
            export const ClickToLogin: string;
            export const LackPermissions: string;
            export const NotLoggedIn: string;
            export const PageTitle: string;
        }

        namespace BasicProgressDialog {
            export const CancelTitle: string;
            export const PleaseWait: string;
        }

        namespace BulkServiceAction {
            export const AllHadErrorsFormat: string;
            export const AllSuccessFormat: string;
            export const ConfirmationFormat: string;
            export const ErrorCount: string;
            export const NothingToProcess: string;
            export const SomeHadErrorsFormat: string;
            export const SuccessCount: string;
        }

        namespace Dashboard {
            export const ContentDescription: string;
        }

        namespace Layout {
            export const FooterCopyright: string;
            export const FooterInfo: string;
            export const FooterRights: string;
            export const GeneralSettings: string;
            export const Language: string;
            export const Theme: string;
            export const ThemeBlack: string;
            export const ThemeBlackLight: string;
            export const ThemeBlue: string;
            export const ThemeBlueLight: string;
            export const ThemeGreen: string;
            export const ThemeGreenLight: string;
            export const ThemePurple: string;
            export const ThemePurpleLight: string;
            export const ThemeRed: string;
            export const ThemeRedLight: string;
            export const ThemeYellow: string;
            export const ThemeYellowLight: string;
        }

        namespace RolePermissionDialog {
            export const DialogTitle: string;
            export const EditButton: string;
            export const SaveSuccess: string;
        }

        namespace UserDialog {
            export const EditPermissionsButton: string;
            export const EditRolesButton: string;
        }

        namespace UserPermissionDialog {
            export const DialogTitle: string;
            export const Grant: string;
            export const Permission: string;
            export const Revoke: string;
            export const SaveSuccess: string;
        }

        namespace UserRoleDialog {
            export const DialogTitle: string;
            export const SaveSuccess: string;
        }

        namespace ValidationError {
            export const Title: string;
        }
    }

    declare namespace Validation {
        export const AuthenticationError: string;
        export const CantFindUserWithEmail: string;
        export const CurrentPasswordMismatch: string;
        export const DeleteForeignKeyError: string;
        export const EmailConfirm: string;
        export const EmailInUse: string;
        export const InvalidActivateToken: string;
        export const InvalidResetToken: string;
        export const MinRequiredPasswordLength: string;
        export const NorthwindPhone: string;
        export const NorthwindPhoneMultiple: string;
        export const SavePrimaryKeyError: string;
    }

    MobilityMatters['Texts'] = Q.proxyTexts(Texts, '', {Db:{Administration:{Language:{Id:1,LanguageId:1,LanguageName:1},Role:{RoleId:1,RoleName:1},RolePermission:{PermissionKey:1,RoleId:1,RolePermissionId:1,RoleRoleName:1},Translation:{CustomText:1,EntityPlural:1,Key:1,OverrideConfirmation:1,SaveChangesButton:1,SourceLanguage:1,SourceText:1,TargetLanguage:1,TargetText:1},User:{DisplayName:1,Email:1,InsertDate:1,InsertUserId:1,IsActive:1,LastDirectoryUpdate:1,Password:1,PasswordConfirm:1,PasswordHash:1,PasswordSalt:1,Source:1,UpdateDate:1,UpdateUserId:1,UserId:1,UserImage:1,Username:1},UserPermission:{Granted:1,PermissionKey:1,User:1,UserId:1,UserPermissionId:1,Username:1},UserRole:{RoleId:1,User:1,UserId:1,UserRoleId:1,Username:1}},Common:{UserPreference:{Name:1,PreferenceType:1,UserId:1,UserPreferenceId:1,Value:1}},Northwind:{AvailabilityAm:{AvailabilityAmid:1,Day:1},AvailabilityAmMultiple:{AvailabilityAmMultipleId:1,AvailabilityAmid:1,EmployeeId:1},AvailabilityPm:{AvailabilityPmid:1,Day:1},AvailabilityPmMultiple:{AvailabilityPmMultipleId:1,AvailabilityPmid:1,EmployeeId:1},Category:{CategoryID:1,CategoryName:1,Description:1,Picture:1},CategoryLang:{CategoryId:1,CategoryName:1,Description:1,Id:1,LanguageId:1},Cities:{CityId:1,Name:1},CitiesMulti:{CitiesMultiId:1,CityId:1,CityName:1,EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeDriversLicense:1,EmployeeDriversLicenseExp:1,EmployeeEmail:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeGender:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeId:1,EmployeeInsurance:1,EmployeeInsuranceExp:1,EmployeeLastName:1,EmployeeLicensePlate:1,EmployeeLicensePlateExp:1,EmployeeNotes:1,EmployeeOnVacation:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeSmoker:1,EmployeeSpecialNeedsId:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,EmployeeVehicleMake:1,EmployeeVehicleModel:1},Customer:{Active:1,Address:1,AgeCalc:1,AltPhone:1,BirthDate:1,City:1,CompanyName:1,ContactName:1,Country:1,County:1,CustomerID:1,DNR:1,DateOfLastTrip:1,Dental:1,EIO:1,Email:1,EmergencyName:1,EmergencyName2:1,EmergencyPhone:1,EmergencyPhone2:1,EmergencyRelation:1,EmergencyRelation2:1,EndDate:1,FullName:1,Gender:1,Groceries:1,ID:1,LivingWith:1,Medical:1,NoteList:1,OtherTransport:1,PLanguage:1,Phone:1,PostalCode:1,PreferredHospital:1,Program:1,ProgramOption:1,Radio:1,ReferralSource:1,Region:1,Representatives:1,Residence:1,Smoker:1,SpecialConditionsDirections:1,SpecialNeedsList:1,SpecialNeedsPlainText:1,StartDate:1,TEMP:1,WhyEnding:1},CustomerCustomerDemo:{CustomerAddress:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerContactTitle:1,CustomerCountry:1,CustomerFax:1,CustomerID:1,CustomerPhone:1,CustomerPostalCode:1,CustomerRegion:1,CustomerTypeCustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDemographic:{CustomerDesc:1,CustomerTypeID:1,ID:1},CustomerDetails:{Dental:1,Email:1,EmergencyName:1,EmergencyName2:1,EmergencyPhone:1,EmergencyPhone2:1,EmergencyRelation:1,EmergencyRelation2:1,Gender:1,Groceries:1,Id:1,LastContactDate:1,LastContactedBy:1,LastContactedByAddress:1,LastContactedByBirthDate:1,LastContactedByCity:1,LastContactedByCountry:1,LastContactedByExtension:1,LastContactedByFirstName:1,LastContactedByHireDate:1,LastContactedByHomePhone:1,LastContactedByLastName:1,LastContactedByNotes:1,LastContactedByPhoto:1,LastContactedByPhotoPath:1,LastContactedByPostalCode:1,LastContactedByRegion:1,LastContactedByReportsTo:1,LastContactedByTitle:1,LastContactedByTitleOfCourtesy:1,LivingWith:1,Medical:1,OtherTransport:1,PreferredHospital:1,ReferralSource:1,TEMP:1},CustomerGrossSales:{ContactName:1,CustomerId:1,GrossAmount:1,ProductId:1,ProductName:1},CustomerRepresentatives:{CustomerId:1,EmployeeId:1,RepresentativeId:1},Employee:{Address:1,BirthDate:1,City:1,Country:1,EmployeeID:1,Extension:1,FirstName:1,FullName:1,Gender:1,HireDate:1,HomePhone:1,LastName:1,Notes:1,Photo:1,PhotoPath:1,PostalCode:1,Region:1,ReportsTo:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToFullName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToReportsTo:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,Title:1,TitleOfCourtesy:1},EmployeeTerritory:{EmployeeAddress:1,EmployeeBirthDate:1,EmployeeCity:1,EmployeeCountry:1,EmployeeExtension:1,EmployeeFirstName:1,EmployeeHireDate:1,EmployeeHomePhone:1,EmployeeID:1,EmployeeLastName:1,EmployeeNotes:1,EmployeePhoto:1,EmployeePhotoPath:1,EmployeePostalCode:1,EmployeeRegion:1,EmployeeReportsTo:1,EmployeeTitle:1,EmployeeTitleOfCourtesy:1,TerritoryID:1,TerritoryRegionID:1,TerritoryTerritoryDescription:1},Employees:{Address:1,AvailabilityAMList:1,AvailabilityPMList:1,BirthDate:1,CitiesList:1,City:1,Country:1,DMVClearance:1,DateOfLastTrip:1,DriversLicense:1,DriversLicenseExp:1,Email:1,EmployeeId:1,EndDate:1,Extension:1,FirstName:1,Gender:1,HireDate:1,HomePhone:1,Inactive:1,Insurance:1,InsuranceExp:1,Language:1,LastName:1,LicensePlate:1,LicensePlateExp:1,Notes:1,NotesPlainText:1,OnVacation:1,Photo:1,PhotoPath:1,PoliceClearance:1,PostalCode:1,ReferralSource:1,Region:1,ReportsTo:1,ReportsTo1:1,ReportsToAddress:1,ReportsToBirthDate:1,ReportsToCity:1,ReportsToCountry:1,ReportsToExtension:1,ReportsToFirstName:1,ReportsToHireDate:1,ReportsToHomePhone:1,ReportsToLastName:1,ReportsToNotes:1,ReportsToPhoto:1,ReportsToPhotoPath:1,ReportsToPostalCode:1,ReportsToRegion:1,ReportsToTitle:1,ReportsToTitleOfCourtesy:1,ReturnDate:1,Smoker:1,SpecialNeedsList:1,Title:1,TitleOfCourtesy:1,TrainingDate:1,VehicleMake:1,VehicleMake2:1,VehicleModel:1,VehicleModel2:1,VolunteerRegion:1,WhyEnding:1},Mail:{Attachments:1,Body:1,Cc:1,CreatedBy:1,CreatedOn:1,Direction:1,ErrorMessage:1,From:1,IsSent:1,MailId:1,ModifiedBy:1,ModifiedOn:1,ReceivedDate:1,SendDateTime:1,Subject:1,To:1,Uid:1},MailAttachments:{AttachmentId:1,CreatedBy:1,CreatedOn:1,FilePath:1,MailBody:1,MailCc:1,MailCreatedBy:1,MailCreatedOn:1,MailDirection:1,MailFrom:1,MailId:1,MailModifiedBy:1,MailModifiedOn:1,MailReceivedDate:1,MailSendDateTime:1,MailSubject:1,MailTo:1,MailUid:1,MimeType:1,ModifiedBy:1,ModifiedOn:1,OriginalFileName:1,Size:1},Note:{EntityId:1,EntityType:1,InsertDate:1,InsertUserDisplayName:1,InsertUserId:1,NoteId:1,Text:1},Order:{ActualDuration1:1,ActualDuration2:1,ActualDuration3:1,ActualDurationMins1:1,ActualDurationMins2:1,ActualDurationMins3:1,ActualTotalHours:1,ActualTotalMileage:1,ActualTotalMinutes:1,AppointmentTime:1,AppointmentTime2:1,AppointmentTime3:1,ApptTime:1,ApptTime2:1,ApptTime3:1,ApptType:1,ApptType2:1,ApptType3:1,CancelReason:1,Cancelled:1,CustomerCity:1,CustomerCompanyName:1,CustomerContactName:1,CustomerCountry:1,CustomerFullName:1,CustomerID:1,CustomerPhone:1,CustomerRegion:1,CustomerSpecialConditionsDirections:1,CustomerSpecialNeedsList:1,CustomerSpecialNeedsPlainText:1,CustomerTEMP:1,DestinationAddress:1,DestinationAddress2:1,DestinationAddress3:1,DestinationApartment:1,DestinationApartment2:1,DestinationApartment3:1,DestinationCity:1,DestinationCity2:1,DestinationCity3:1,DestinationZip:1,DestinationZip2:1,DestinationZip3:1,DetailList:1,DistanceText:1,DistanceText2:1,DistanceText3:1,DistanceValue:1,DistanceValue2:1,DistanceValue3:1,DurationText:1,DurationText2:1,DurationText3:1,DurationValue:1,DurationValue2:1,DurationValue3:1,EmployeeFullName:1,EmployeeGender:1,EmployeeID:1,EmployeeReportsToFullName:1,Freight:1,HowMany:1,OrderDate:1,OrderID:1,RequiredDate:1,RideCompleted:1,ShipAddress:1,ShipCity:1,ShipCountry:1,ShipName:1,ShipPostalCode:1,ShipRegion:1,ShipVia:1,ShipViaCompanyName:1,ShipViaPhone:1,ShippedDate:1,ShippingState:1},OrderDetail:{DetailID:1,Discount:1,LineTotal:1,OrderCustomerID:1,OrderDate:1,OrderEmployeeID:1,OrderID:1,OrderShipCity:1,OrderShipCountry:1,OrderShipVia:1,OrderShippedDate:1,ProductDiscontinued:1,ProductID:1,ProductName:1,ProductQuantityPerUnit:1,ProductSupplierID:1,ProductUnitPrice:1,Quantity:1,UnitPrice:1},Product:{CategoryDescription:1,CategoryID:1,CategoryName:1,CategoryPicture:1,Discontinued:1,ProductID:1,ProductImage:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierAddress:1,SupplierCity:1,SupplierCompanyName:1,SupplierContactName:1,SupplierContactTitle:1,SupplierCountry:1,SupplierFax:1,SupplierHomePage:1,SupplierID:1,SupplierPhone:1,SupplierPostalCode:1,SupplierRegion:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1},ProductLang:{Id:1,LanguageId:1,ProductId:1,ProductName:1},ProductLog:{CategoryID:1,ChangingUserId:1,Discontinued:1,OperationType:1,ProductID:1,ProductImage:1,ProductLogID:1,ProductName:1,QuantityPerUnit:1,ReorderLevel:1,SupplierID:1,UnitPrice:1,UnitsInStock:1,UnitsOnOrder:1,ValidFrom:1,ValidUntil:1},Region:{RegionDescription:1,RegionID:1},SalesByCategory:{CategoryId:1,CategoryName:1,ProductName:1,ProductSales:1},Shipper:{CompanyName:1,Phone:1,ShipperID:1},SpecialNeeds:{Name:1,SpecialNeedsID:1},SpecialNeedsMultiple:{CustomerId:1,SpecialNeedsId:1,SpecialNeedsMultipleId:1},SpecialNeedsMultipleVolunteer:{EmployeeId:1,SpecialNeedsId:1,SpecialNeedsMultipleVolunteerId:1},Supplier:{Address:1,City:1,CompanyName:1,ContactName:1,ContactTitle:1,Country:1,Fax:1,HomePage:1,Phone:1,PostalCode:1,Region:1,SupplierID:1},Territory:{ID:1,RegionDescription:1,RegionID:1,TerritoryDescription:1,TerritoryID:1}}},Forms:{Membership:{ChangePassword:{FormTitle:1,SubmitButton:1,Success:1},ForgotPassword:{BackToLogin:1,FormInfo:1,FormTitle:1,SubmitButton:1,Success:1},Login:{FacebookButton:1,ForgotPassword:1,FormTitle:1,GoogleButton:1,OR:1,RememberMe:1,SignInButton:1,SignUpButton:1},ResetPassword:{BackToLogin:1,EmailSubject:1,FormTitle:1,SubmitButton:1,Success:1},SignUp:{AcceptTerms:1,ActivateEmailSubject:1,ActivationCompleteMessage:1,BackToLogin:1,ConfirmEmail:1,ConfirmPassword:1,DisplayName:1,Email:1,FormInfo:1,FormTitle:1,Password:1,SubmitButton:1,Success:1}}},Site:{AccessDenied:{ClickToChangeUser:1,ClickToLogin:1,LackPermissions:1,NotLoggedIn:1,PageTitle:1},BasicProgressDialog:{CancelTitle:1,PleaseWait:1},BulkServiceAction:{AllHadErrorsFormat:1,AllSuccessFormat:1,ConfirmationFormat:1,ErrorCount:1,NothingToProcess:1,SomeHadErrorsFormat:1,SuccessCount:1},Dashboard:{ContentDescription:1},Layout:{FooterCopyright:1,FooterInfo:1,FooterRights:1,GeneralSettings:1,Language:1,Theme:1,ThemeBlack:1,ThemeBlackLight:1,ThemeBlue:1,ThemeBlueLight:1,ThemeGreen:1,ThemeGreenLight:1,ThemePurple:1,ThemePurpleLight:1,ThemeRed:1,ThemeRedLight:1,ThemeYellow:1,ThemeYellowLight:1},RolePermissionDialog:{DialogTitle:1,EditButton:1,SaveSuccess:1},UserDialog:{EditPermissionsButton:1,EditRolesButton:1},UserPermissionDialog:{DialogTitle:1,Grant:1,Permission:1,Revoke:1,SaveSuccess:1},UserRoleDialog:{DialogTitle:1,SaveSuccess:1},ValidationError:{Title:1}},Validation:{AuthenticationError:1,CantFindUserWithEmail:1,CurrentPasswordMismatch:1,DeleteForeignKeyError:1,EmailConfirm:1,EmailInUse:1,InvalidActivateToken:1,InvalidResetToken:1,MinRequiredPasswordLength:1,NorthwindPhone:1,NorthwindPhoneMultiple:1,SavePrimaryKeyError:1}});
}

