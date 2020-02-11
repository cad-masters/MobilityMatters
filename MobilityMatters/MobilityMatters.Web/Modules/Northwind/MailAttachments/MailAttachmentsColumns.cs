
namespace MobilityMatters.Northwind.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Northwind.MailAttachments")]
    [BasedOnRow(typeof(Entities.MailAttachmentsRow), CheckNames = true)]
    public class MailAttachmentsColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 AttachmentId { get; set; }
        public String MailUid { get; set; }
        [EditLink]
        public String MimeType { get; set; }
        public Int32 Size { get; set; }
        public String FilePath { get; set; }
        public String OriginalFileName { get; set; }
        public Int32 CreatedBy { get; set; }
        public DateTime CreatedOn { get; set; }
        public Int32 ModifiedBy { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}