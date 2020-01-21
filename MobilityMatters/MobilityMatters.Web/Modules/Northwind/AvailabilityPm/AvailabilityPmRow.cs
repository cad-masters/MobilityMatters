
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[AvailabilityPM]")]
    [DisplayName("Availability Pm"), InstanceName("Availability Pm")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Northwind.AvailabilityPM")]
    public sealed class AvailabilityPmRow : Row, IIdRow, INameRow
    {
        [DisplayName("Availability Pmid"), Column("AvailabilityPMID"), PrimaryKey]
        public Int32? AvailabilityPmid
        {
            get { return Fields.AvailabilityPmid[this]; }
            set { Fields.AvailabilityPmid[this] = value; }
        }

        [DisplayName("Day"), Size(50), NotNull, QuickSearch]
        public String Day
        {
            get { return Fields.Day[this]; }
            set { Fields.Day[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AvailabilityPmid; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Day; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public AvailabilityPmRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AvailabilityPmid;
            public StringField Day;
        }
    }
}
