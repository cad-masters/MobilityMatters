
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[AvailabilityAM]")]
    [DisplayName("Availability Am"), InstanceName("Availability Am")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Northwind.AvailabilityAM")]
    public sealed class AvailabilityAmRow : Row, IIdRow, INameRow
    {
        [DisplayName("Availability Amid"), Column("AvailabilityAMID"), PrimaryKey]
        public Int32? AvailabilityAmid
        {
            get { return Fields.AvailabilityAmid[this]; }
            set { Fields.AvailabilityAmid[this] = value; }
        }

        [DisplayName("Day"), Size(50), NotNull, QuickSearch]
        public String Day
        {
            get { return Fields.Day[this]; }
            set { Fields.Day[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AvailabilityAmid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Day; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AvailabilityAmRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AvailabilityAmid;
            public StringField Day;
        }
    }
}
