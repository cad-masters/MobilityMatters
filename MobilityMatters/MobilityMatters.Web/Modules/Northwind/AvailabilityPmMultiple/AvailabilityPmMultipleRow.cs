
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[AvailabilityPMMultiple]")]
    [DisplayName("Availability Pm Multiple"), InstanceName("Availability Pm Multiple")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class AvailabilityPmMultipleRow : Row, IIdRow
    {
        [DisplayName("Availability Pm Multiple Id"), Column("AvailabilityPMMultipleID"), Identity]
        public Int32? AvailabilityPmMultipleId
        {
            get { return Fields.AvailabilityPmMultipleId[this]; }
            set { Fields.AvailabilityPmMultipleId[this] = value; }
        }

        [DisplayName("Availability Pmid"), Column("AvailabilityPMID"), NotNull]
        public Int32? AvailabilityPmid
        {
            get { return Fields.AvailabilityPmid[this]; }
            set { Fields.AvailabilityPmid[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AvailabilityPmMultipleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AvailabilityPmMultipleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AvailabilityPmMultipleId;
            public Int32Field AvailabilityPmid;
            public Int32Field EmployeeId;
        }
    }
}
