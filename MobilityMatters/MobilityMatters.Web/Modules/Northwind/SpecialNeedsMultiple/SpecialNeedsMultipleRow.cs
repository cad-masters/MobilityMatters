
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[SpecialNeedsMultiple]")]
    [DisplayName("Special Needs Multiple"), InstanceName("Special Needs Multiple")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SpecialNeedsMultipleRow : Row, IIdRow
    {
        [DisplayName("Special Needs Multiple Id"), Column("SpecialNeedsMultipleID"), Identity]
        public Int32? SpecialNeedsMultipleId
        {
            get { return Fields.SpecialNeedsMultipleId[this]; }
            set { Fields.SpecialNeedsMultipleId[this] = value; }
        }

        [DisplayName("Special Needs Id"), Column("SpecialNeedsID"), NotNull]
        public Int32? SpecialNeedsId
        {
            get { return Fields.SpecialNeedsId[this]; }
            set { Fields.SpecialNeedsId[this] = value; }
        }

        [DisplayName("Customer Id"), Column("CustomerID"), NotNull]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

        [DisplayName("Order Id")]
        public Int32? OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        /*[DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }*/

        IIdField IIdRow.IdField
        {
            get { return Fields.SpecialNeedsMultipleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SpecialNeedsMultipleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SpecialNeedsMultipleId;
            public Int32Field SpecialNeedsId;
            public Int32Field CustomerId;
            public Int32Field OrderId;
            /*public Int32Field EmployeeId;*/
        }
    }
}
