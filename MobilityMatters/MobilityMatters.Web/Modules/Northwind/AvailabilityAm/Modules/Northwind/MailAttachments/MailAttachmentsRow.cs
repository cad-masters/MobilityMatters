
namespace MobilityMatters.Northwind.Entities
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;

    [ConnectionKey("Northwind"), Module("Northwind"), TableName("[dbo].[MailAttachments]")]
    [DisplayName("Mail Attachments"), InstanceName("Mail Attachments")]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class MailAttachmentsRow : Row, IIdRow, INameRow
    {
        [DisplayName("Attachment Id"), Identity]
        public Int32? AttachmentId
        {
            get { return Fields.AttachmentId[this]; }
            set { Fields.AttachmentId[this] = value; }
        }

        [DisplayName("Mail"), NotNull, ForeignKey("[dbo].[Mail]", "MailId"), LeftJoin("jMail"), TextualField("MailUid")]
        public Int32? MailId
        {
            get { return Fields.MailId[this]; }
            set { Fields.MailId[this] = value; }
        }

        [DisplayName("Mime Type"), Size(100), NotNull, QuickSearch]
        public String MimeType
        {
            get { return Fields.MimeType[this]; }
            set { Fields.MimeType[this] = value; }
        }

        [DisplayName("Size"), NotNull]
        public Int32? Size
        {
            get { return Fields.Size[this]; }
            set { Fields.Size[this] = value; }
        }

        [DisplayName("File Path"), Size(150), NotNull]
        public String FilePath
        {
            get { return Fields.FilePath[this]; }
            set { Fields.FilePath[this] = value; }
        }

        [DisplayName("Original File Name"), Size(150), NotNull]
        public String OriginalFileName
        {
            get { return Fields.OriginalFileName[this]; }
            set { Fields.OriginalFileName[this] = value; }
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

        [DisplayName("Mail Uid"), Expression("jMail.[UID]")]
        public String MailUid
        {
            get { return Fields.MailUid[this]; }
            set { Fields.MailUid[this] = value; }
        }

        [DisplayName("Mail Subject"), Expression("jMail.[Subject]")]
        public String MailSubject
        {
            get { return Fields.MailSubject[this]; }
            set { Fields.MailSubject[this] = value; }
        }

        [DisplayName("Mail Body"), Expression("jMail.[Body]")]
        public String MailBody
        {
            get { return Fields.MailBody[this]; }
            set { Fields.MailBody[this] = value; }
        }

        [DisplayName("Mail Direction"), Expression("jMail.[Direction]")]
        public String MailDirection
        {
            get { return Fields.MailDirection[this]; }
            set { Fields.MailDirection[this] = value; }
        }

        [DisplayName("Mail To"), Expression("jMail.[To]")]
        public String MailTo
        {
            get { return Fields.MailTo[this]; }
            set { Fields.MailTo[this] = value; }
        }

        [DisplayName("Mail Cc"), Expression("jMail.[CC]")]
        public String MailCc
        {
            get { return Fields.MailCc[this]; }
            set { Fields.MailCc[this] = value; }
        }

        [DisplayName("Mail From"), Expression("jMail.[From]")]
        public String MailFrom
        {
            get { return Fields.MailFrom[this]; }
            set { Fields.MailFrom[this] = value; }
        }

        [DisplayName("Mail Send Date Time"), Expression("jMail.[SendDateTime]")]
        public DateTime? MailSendDateTime
        {
            get { return Fields.MailSendDateTime[this]; }
            set { Fields.MailSendDateTime[this] = value; }
        }

        [DisplayName("Mail Received Date"), Expression("jMail.[ReceivedDate]")]
        public DateTime? MailReceivedDate
        {
            get { return Fields.MailReceivedDate[this]; }
            set { Fields.MailReceivedDate[this] = value; }
        }

        [DisplayName("Mail Created By"), Expression("jMail.[CreatedBy]")]
        public Int32? MailCreatedBy
        {
            get { return Fields.MailCreatedBy[this]; }
            set { Fields.MailCreatedBy[this] = value; }
        }

        [DisplayName("Mail Created On"), Expression("jMail.[CreatedOn]")]
        public DateTime? MailCreatedOn
        {
            get { return Fields.MailCreatedOn[this]; }
            set { Fields.MailCreatedOn[this] = value; }
        }

        [DisplayName("Mail Modified By"), Expression("jMail.[ModifiedBy]")]
        public Int32? MailModifiedBy
        {
            get { return Fields.MailModifiedBy[this]; }
            set { Fields.MailModifiedBy[this] = value; }
        }

        [DisplayName("Mail Modified On"), Expression("jMail.[ModifiedOn]")]
        public DateTime? MailModifiedOn
        {
            get { return Fields.MailModifiedOn[this]; }
            set { Fields.MailModifiedOn[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.AttachmentId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MimeType; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MailAttachmentsRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field AttachmentId;
            public Int32Field MailId;
            public StringField MimeType;
            public Int32Field Size;
            public StringField FilePath;
            public StringField OriginalFileName;
            public Int32Field CreatedBy;
            public DateTimeField CreatedOn;
            public Int32Field ModifiedBy;
            public DateTimeField ModifiedOn;

            public StringField MailUid;
            public StringField MailSubject;
            public StringField MailBody;
            public StringField MailDirection;
            public StringField MailTo;
            public StringField MailCc;
            public StringField MailFrom;
            public DateTimeField MailSendDateTime;
            public DateTimeField MailReceivedDate;
            public Int32Field MailCreatedBy;
            public DateTimeField MailCreatedOn;
            public Int32Field MailModifiedBy;
            public DateTimeField MailModifiedOn;
        }
    }
}
