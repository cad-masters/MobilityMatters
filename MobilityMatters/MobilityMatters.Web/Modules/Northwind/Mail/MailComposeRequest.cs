
namespace MobilityMatters.Northwind
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.ComponentModel;

    [FormScript("Northwind.MailCompose")]
    public class MailComposeRequest : ServiceRequest
    {
        [DisplayName("To"), Required(true), LookupEditor(typeof(Entities.EmployeeRow), Multiple = true)]
        public List<int> To { get; set; }
        [DisplayName("CC"), LookupEditor(typeof(Entities.EmployeeRow), Multiple = true)]
        public List<int> Cc { get; set; }
        [DisplayName("Subject"), Required(true)]
        public string Subject { get; set; }
        [DisplayName("Message"), MailContentEditor(Rows = 10), DefaultValue("<html><body style=\"font-family: Arial, Helvetica, sans-serif; font-size: 14px;\"></body></html>")]
        public string BodyHtml { get; set; }
        [DisplayName("Attachments"), MultipleFileUploadEditor]
        public string Attachments { get; set; }
        [Hidden]
        public int? ReplyToMailId { get; set; }
    }
}