
namespace MobilityMatters.Northwind.Entities
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[Mail]")]
    [DisplayName("Mail"), InstanceName("Mail")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Mail Id"), Identity]
        public Int32? MailId
        {
            get { return Fields.MailId[this]; }
            set { Fields.MailId[this] = value; }
        }

        [DisplayName("Uid"), Column("UID"), Size(40), QuickSearch]
        public String Uid
        {
            get { return Fields.Uid[this]; }
            set { Fields.Uid[this] = value; }
        }

        [DisplayName("Subject"), NotNull]
        public String Subject
        {
            get { return Fields.Subject[this]; }
            set { Fields.Subject[this] = value; }
        }

        [DisplayName("Body"), NotNull]
        public String Body
        {
            get { return Fields.Body[this]; }
            set { Fields.Body[this] = value; }
        }

        [DisplayName("Direction"), Size(1), NotNull]
        public String Direction
        {
            get { return Fields.Direction[this]; }
            set { Fields.Direction[this] = value; }
        }

        [DisplayName("To"), NotNull]
        public String To
        {
            get { return Fields.To[this]; }
            set { Fields.To[this] = value; }
        }

        [DisplayName("Cc"), Column("CC")]
        public String Cc
        {
            get { return Fields.Cc[this]; }
            set { Fields.Cc[this] = value; }
        }

        [DisplayName("From"), NotNull]
        public String From
        {
            get { return Fields.From[this]; }
            set { Fields.From[this] = value; }
        }

        [DisplayName("Send Date Time"), NotNull]
        public DateTime? SendDateTime
        {
            get { return Fields.SendDateTime[this]; }
            set { Fields.SendDateTime[this] = value; }
        }

        [DisplayName("Is Sent")]
        public bool? IsSent
        {
            get { return Fields.IsSent[this]; }
            set { Fields.IsSent[this] = value; }
        }

        [DisplayName("Error Message")]
        public string ErrorMessage
        {
            get { return Fields.ErrorMessage[this]; }
            set { Fields.ErrorMessage[this] = value; }
        }

        [DisplayName("Received Date")]
        public DateTime? ReceivedDate
        {
            get { return Fields.ReceivedDate[this]; }
            set { Fields.ReceivedDate[this] = value; }
        }

        [DisplayName("Created By")]
        public Int32? CreatedBy
        {
            get { return Fields.CreatedBy[this]; }
            set { Fields.CreatedBy[this] = value; }
        }

        [DisplayName("Created On")]
        public DateTime? CreatedOn
        {
            get { return Fields.CreatedOn[this]; }
            set { Fields.CreatedOn[this] = value; }
        }

        [DisplayName("Modified By")]
        public Int32? ModifiedBy
        {
            get { return Fields.ModifiedBy[this]; }
            set { Fields.ModifiedBy[this] = value; }
        }

        [DisplayName("Modified On")]
        public DateTime? ModifiedOn
        {
            get { return Fields.ModifiedOn[this]; }
            set { Fields.ModifiedOn[this] = value; }
        }

        [NotMapped, MultipleFileUploadEditor]
        public string Attachments
        {
            get { return Fields.Attachments[this]; }
            set { Fields.Attachments[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MailId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.Uid; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MailId;
            public StringField Uid;
            public StringField Subject;
            public StringField Body;
            public StringField Direction;
            public StringField To;
            public StringField Cc;
            public StringField From;
            public DateTimeField SendDateTime;
            public BooleanField IsSent;
            public StringField ErrorMessage;
            public DateTimeField ReceivedDate;
            public Int32Field CreatedBy;
            public DateTimeField CreatedOn;
            public Int32Field ModifiedBy;
            public DateTimeField ModifiedOn;
            public StringField Attachments;
        }
    }
}
