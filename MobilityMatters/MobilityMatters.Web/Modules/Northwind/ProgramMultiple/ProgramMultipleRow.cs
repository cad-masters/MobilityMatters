
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[ProgramMultiple]")]
    [DisplayName("Program Multiple"), InstanceName("Program Multiple")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class ProgramMultipleRow : Row, IIdRow
    {
        [DisplayName("Program Multiple Id"), Column("ProgramMultipleID"), Identity]
        public Int32? ProgramMultipleId
        {
            get { return Fields.ProgramMultipleId[this]; }
            set { Fields.ProgramMultipleId[this] = value; }
        }

        [DisplayName("Program Id"), Column("ProgramID"), NotNull]
        public Int32? ProgramId
        {
            get { return Fields.ProgramId[this]; }
            set { Fields.ProgramId[this] = value; }
        }

        [DisplayName("Customer Id")]
        public Int32? CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
        }

   

        IIdField IIdRow.IdField
        {
            get { return Fields.ProgramMultipleId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProgramMultipleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ProgramMultipleId;
            public Int32Field ProgramId;
            public Int32Field CustomerId;
            
        }
    }
}
