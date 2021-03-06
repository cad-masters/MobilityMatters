﻿
namespace MobilityMatters.Northwind.Forms
{
    using Serenity.ComponentModel;
    using System;

    [FormScript("Northwind.MailAttachments")]
    [BasedOnRow(typeof(Entities.MailAttachmentsRow), CheckNames = true)]
    public class MailAttachmentsForm
    {
        public Int32 MailId { get; set; }
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