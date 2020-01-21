
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[SpecialNeeds]")]
    [DisplayName("Special Needs"), InstanceName("Special Needs")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Northwind.SpecialNeeds")]
    public sealed class SpecialNeedsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Special Needs Id"), Column("SpecialNeedsID"), Identity]
        public Int32? SpecialNeedsID
        {
            get { return Fields.SpecialNeedsID[this]; }
            set { Fields.SpecialNeedsID[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SpecialNeedsID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SpecialNeedsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SpecialNeedsID;
            public StringField Name;
        }
    }
}
