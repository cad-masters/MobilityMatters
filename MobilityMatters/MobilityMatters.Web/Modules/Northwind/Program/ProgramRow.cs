
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[Program]")]
    [DisplayName("Program"), InstanceName("Program")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    [LookupScript("Northwind.Program")]
    public sealed class ProgramRow : Row, IIdRow, INameRow
    {
        [DisplayName("Program Id"), Column("ProgramID"), PrimaryKey]
        public Int32? ProgramId
        {
            get { return Fields.ProgramId[this]; }
            set { Fields.ProgramId[this] = value; }
        }

        [DisplayName("Name"), Size(50), NotNull, QuickSearch]
        public String Name
        {
            get { return Fields.Name[this]; }
            set { Fields.Name[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ProgramId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Name; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProgramRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramId;
            public StringField Name;
        }
    }
}
