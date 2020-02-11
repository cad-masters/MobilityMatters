
namespace MobilityMatters.Northwind.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Northwind.Mail")]
    [BasedOnRow(typeof(Entities.MailRow), CheckNames = true)]
    public class MailForm
    {
        public String From { get; set; }
        public String To { get; set; }
        public String Cc { get; set; }
        public String Subject { get; set; }
        [MailBodyViewer]
        public String Body { get; set; }
        public List<Entities.MailAttachmentsRow> Attachments { get; set; }
        public DateTime SendDateTime { get; set; }
        public Boolean IsSent { get; set; }
        public String ErrorMessage { get; set; }
        public DateTime ReceivedDate { get; set; }
    }
}