
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
        [DisplayName("Subject"), Required(true), DefaultValue("Mobility Matters / Ride Scheduled on ")]
        public string Subject { get; set; }
        [DisplayName("Message"), MailContentEditor(Rows = 10), DefaultValue("<html><body style=\"font-family: Arial, Helvetica, sans-serif; font-size: 14px;\">" +
            "<b>The following trip has been scheduled:</b><br><br><b>Ride Number:</b> ###<br><b>Appointment Date:</b> yyyy-mm-dd<br><b>Client Name:</b> First Last<br>" +
            "<b>Special Note / Directions:</b><hr><br><b>Pick up address:</b><br><b>Telephone Number:</b><br><b>Alt Telephone:</b>" +
            "<hr><b><em>Appointment Details:</b></em><br><b>Pick-up Time:</b><br><b>Estimated Length of Appointment:</b><br>" +
            "<b>Delivery Address</b><br><b>Appointment Time:</b><hr><br><b>Special Conditions:</b></body></html>")]
        public string BodyHtml { get; set; }
        [DisplayName("Attachments"), MultipleFileUploadEditor]
        public string Attachments { get; set; }
        [Hidden]
        public int? ReplyToMailId { get; set; }
    }
}