
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[SpecialNeedsMultipleVolunteer]")]
    [DisplayName("Special Needs Multiple Volunteer"), InstanceName("Special Needs Multiple Volunteer")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class SpecialNeedsMultipleVolunteerRow : Row, IIdRow
    {
        [DisplayName("Special Needs Multiple Volunteer Id"), Column("SpecialNeedsMultipleVolunteerID"), Identity]
        public Int32? SpecialNeedsMultipleVolunteerId
        {
            get { return Fields.SpecialNeedsMultipleVolunteerId[this]; }
            set { Fields.SpecialNeedsMultipleVolunteerId[this] = value; }
        }

        [DisplayName("Special Needs Id"), Column("SpecialNeedsID"), NotNull]
        public Int32? SpecialNeedsId
        {
            get { return Fields.SpecialNeedsId[this]; }
            set { Fields.SpecialNeedsId[this] = value; }
        }

        [DisplayName("Employee Id"), Column("EmployeeID"), NotNull]
        public Int32? EmployeeId
        {
            get { return Fields.EmployeeId[this]; }
            set { Fields.EmployeeId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SpecialNeedsMultipleVolunteerId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SpecialNeedsMultipleVolunteerRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SpecialNeedsMultipleVolunteerId;
            public Int32Field SpecialNeedsId;
            public Int32Field EmployeeId;
        }
    }
}
