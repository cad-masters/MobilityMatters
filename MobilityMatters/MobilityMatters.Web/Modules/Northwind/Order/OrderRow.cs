
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("Orders")]
    [DisplayName("Trips"), InstanceName("Trip")]
    [ReadPermission(PermissionKeys.General)]
    [ModifyPermission(PermissionKeys.General)]
    [LookupScript]
    public sealed class OrderRow : Row, IIdRow, INameRow
    {
        [DisplayName("Ride ID"), NotNull, Identity, QuickSearch]
        public Int32? OrderID
        {
            get { return Fields.OrderID[this]; }
            set { Fields.OrderID[this] = value; }
        }

        [DisplayName("Rider"), Size(5), NotNull, ForeignKey(typeof(CustomerRow)), LeftJoin("c"), CustomerEditor]
        [LookupEditor(typeof(CustomerRow)), TextualField("RiderFullName")]
        public String CustomerID
        {
            get { return Fields.CustomerID[this]; }
            set { Fields.CustomerID[this] = value; }
        }

        [Origin("c"), DisplayName("Rider Last Name"), QuickSearch]
        public String CustomerCompanyName
        {
            get { return Fields.CustomerCompanyName[this]; }
            set { Fields.CustomerCompanyName[this] = value; }
        }

        [DisplayName("Volunteer"), ForeignKey(typeof(EmployeeRow)), LeftJoin("e")]
        [LookupEditor(typeof(EmployeeRow)), TextualField("EmployeeFullName")]
        public Int32? EmployeeID
        {
            get { return Fields.EmployeeID[this]; }
            set { Fields.EmployeeID[this] = value; }
        }

        [Origin("e"), DisplayName("Volunteer")]
        public String EmployeeFullName
        {
            get { return Fields.EmployeeFullName[this]; }
            set { Fields.EmployeeFullName[this] = value; }
        }

        [Origin("c"), DisplayName("Rider")]
        public String CustomerFullName
        {
            get { return Fields.CustomerFullName[this]; }
            set { Fields.CustomerFullName[this] = value; }
        }

        [Origin("e")]
        public Gender? EmployeeGender
        {
            get { return (Gender?)Fields.EmployeeGender[this]; }
            set { Fields.EmployeeGender[this] = (Int32?)value; }
        }

        [Origin("e")]
        public String EmployeeReportsToFullName
        {
            get { return Fields.EmployeeReportsToFullName[this]; }
            set { Fields.EmployeeReportsToFullName[this] = value; }
        }

        [DisplayName("Ride Date"), NotNull]
        public DateTime? OrderDate
        {
            get { return Fields.OrderDate[this]; }
            set { Fields.OrderDate[this] = value; }
        }

        [DisplayName("Pickup Time")]
        public String RequiredDate
        {
            get { return Fields.RequiredDate[this]; }
            set { Fields.RequiredDate[this] = value; }
        }

        [DisplayName("Shipped Date")]
        public DateTime? ShippedDate
        {
            get { return Fields.ShippedDate[this]; }
            set { Fields.ShippedDate[this] = value; }
        }

        [DisplayName("Shipping State"), Expression("(CASE WHEN T0.[ShippedDate] IS NULL THEN 0 ELSE 1 END)")]
        public OrderShippingState? ShippingState
        {
            get { return (OrderShippingState?)Fields.ShippingState[this]; }
            set { Fields.ShippingState[this] = (Int32?)value; }
        }

        [DisplayName("Ship Via"), ForeignKey(typeof(ShipperRow)), LeftJoin("via"), LookupEditor(typeof(ShipperRow))]
        public Int32? ShipVia
        {
            get { return Fields.ShipVia[this]; }
            set { Fields.ShipVia[this] = value; }
        }

        [DisplayName("Freight"), Scale(4), DisplayFormat("#,##0.####"), AlignRight]
        public Decimal? Freight
        {
            get { return Fields.Freight[this]; }
            set { Fields.Freight[this] = value; }
        }

        [DisplayName("Ship Name"), Size(40)]
        public String ShipName
        {
            get { return Fields.ShipName[this]; }
            set { Fields.ShipName[this] = value; }
        }

        [DisplayName("Origin Address"), Size(60)]
        public String ShipAddress
        {
            get { return Fields.ShipAddress[this]; }
            set { Fields.ShipAddress[this] = value; }
        }

        [DisplayName("Origin City"), Size(15)]
        public String ShipCity
        {
            get { return Fields.ShipCity[this]; }
            set { Fields.ShipCity[this] = value; }
        }

        [DisplayName("Ship Region"), Size(15)]
        public String ShipRegion
        {
            get { return Fields.ShipRegion[this]; }
            set { Fields.ShipRegion[this] = value; }
        }

        [DisplayName("Origin Zip"), Size(10)]
        public String ShipPostalCode
        {
            get { return Fields.ShipPostalCode[this]; }
            set { Fields.ShipPostalCode[this] = value; }
        }

        [DisplayName("Destination Address"), Size(60)]
        public String DestinationAddress
        {
            get { return Fields.DestinationAddress[this]; }
            set { Fields.DestinationAddress[this] = value; }
        }

        [DisplayName("Destination City"), Size(15)]
        public String DestinationCity
        {
            get { return Fields.DestinationCity[this]; }
            set { Fields.DestinationCity[this] = value; }
        }


        [DisplayName("Destination Zip"), Size(10)]
        public String DestinationZip
        {
            get { return Fields.DestinationZip[this]; }
            set { Fields.DestinationZip[this] = value; }
        }

        [DisplayName("Ship Country"), Size(15)]
        public String ShipCountry
        {
            get { return Fields.ShipCountry[this]; }
            set { Fields.ShipCountry[this] = value; }
        }

        [DisplayName("Distance"), ReadOnly(true)]
        public String DistanceText
        {
            get { return Fields.DistanceText[this]; }
            set { Fields.DistanceText[this] = value; }
        }

        [DisplayName("Distance Value"), ReadOnly(true)]
        public Int32? DistanceValue
        {
            get { return Fields.DistanceValue[this]; }
            set { Fields.DistanceValue[this] = value; }
        }

        [DisplayName("Duration"), ReadOnly(true)]
        public String DurationText
        {
            get { return Fields.DurationText[this]; }
            set { Fields.DurationText[this] = value; }
        }

        [DisplayName("Duration Value"), ReadOnly(true)]
        public Int32? DurationValue
        {
            get { return Fields.DurationValue[this]; }
            set { Fields.DurationValue[this] = value; }
        }

        [Origin("c"), DisplayName("Rider First Name")]
        public String CustomerContactName
        {
            get { return Fields.CustomerContactName[this]; }
            set { Fields.CustomerContactName[this] = value; }
        }

        /* [Origin("c")]
         public String CustomerContactTitle
         {
             get { return Fields.CustomerContactTitle[this]; }
             set { Fields.CustomerContactTitle[this] = value; }
         }*/

        [Origin("c")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [Origin("c")]
        public String CustomerRegion
        {
            get { return Fields.CustomerRegion[this]; }
            set { Fields.CustomerRegion[this] = value; }
        }

        [Origin("c")]
        public String CustomerCountry
        {
            get { return Fields.CustomerCountry[this]; }
            set { Fields.CustomerCountry[this] = value; }
        }

        [Origin("c")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [Origin("via"), DisplayName("Ship Via")]
        public String ShipViaCompanyName
        {
            get { return Fields.ShipViaCompanyName[this]; }
            set { Fields.ShipViaCompanyName[this] = value; }
        }

        [Origin("via")]
        public String ShipViaPhone
        {
            get { return Fields.ShipViaPhone[this]; }
            set { Fields.ShipViaPhone[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderID"), NotMapped]
        public List<OrderDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.CustomerID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public OrderRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field OrderID;
            public StringField CustomerID;
            public Int32Field EmployeeID;
            public DateTimeField OrderDate;
            public StringField RequiredDate;
            public DateTimeField ShippedDate;
            public Int32Field ShipVia;
            public DecimalField Freight;
            public StringField ShipName;
            public StringField ShipAddress;
            public StringField ShipCity;
            public StringField ShipRegion;
            public StringField ShipPostalCode;
            public StringField DestinationAddress;
            public StringField DestinationCity;
            public StringField DestinationZip;
            public StringField ShipCountry;
            public StringField DistanceText;
            public Int32Field DistanceValue;
            public StringField DurationText;
            public Int32Field DurationValue;

            public StringField CustomerCompanyName;
            public StringField CustomerContactName;
            /*public StringField CustomerContactTitle;*/
            public StringField CustomerCity;
            public StringField CustomerRegion;
            public StringField CustomerCountry;
            public StringField CustomerPhone;

            public StringField EmployeeFullName;
            public StringField CustomerFullName;
            public Int32Field EmployeeGender;
            public StringField EmployeeReportsToFullName;

            public StringField ShipViaCompanyName;
            public StringField ShipViaPhone;

            public Int32Field ShippingState;
            public RowListField<OrderDetailRow> DetailList;
        }
    }
}