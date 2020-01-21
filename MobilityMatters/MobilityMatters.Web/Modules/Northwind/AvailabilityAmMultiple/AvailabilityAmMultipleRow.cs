
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[AvailabilityAMMultiple]")]
    [DisplayName("Availability Am Multiple"), InstanceName("Availability Am Multiple")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AvailabilityAmMultipleRow : Row, IIdRow
    {
        [DisplayName("Availability Am Multiple Id"), Column("AvailabilityAMMultipleID"), Identity]
        public Int32? AvailabilityAmMultipleId
        {
            get { return Fields.AvailabilityAmMultipleId[this]; }
            set { Fields.AvailabilityAmMultipleId[this] = value; }
        }

        [DisplayName("Availability Amid"), Column("AvailabilityAMID"), NotNull]
        public Int32? AvailabilityAmid
        {
            get { return Fields.AvailabilityAmid[this]; }
            set { Fields.AvailabilityAmid[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AvailabilityAmMultipleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AvailabilityAmMultipleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AvailabilityAmMultipleId;
            public Int32Field AvailabilityAmid;
            public Int32Field EmployeeId;
        }
    }
}
