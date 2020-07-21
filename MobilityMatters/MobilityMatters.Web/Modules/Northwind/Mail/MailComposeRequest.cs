
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
        [DisplayName("Subject"), Required(true), DefaultValue("Mobility Matters |")]
        public string Subject { get; set; }
        [DisplayName("Message"), MailContentEditor(Rows = 10), DefaultValue("<html><body style=\"font-family: Arial, Helvetica, sans-serif; font-size: 14px;\">" +
            "<b>The following trip has been scheduled:</b><br><br><b>To confirm your trip, please click the following link:</b> {ConfirmUrl}<br><b>Ride Number:</b> {RideNumber}<br><b>Appointment Date:</b> {AppointmentDate}<br><b>Client Name:</b> {ClientName}<br>" +
            "<b>Special Note / Directions:</b> {SpecialConditionsDirections}<br><b>Client's Special Needs Conditions:</b> {SpecialNeedsTemp}<br><hr><br><b>Pick up address:</b> {PickupAddress}<br><b>Telephone Number:</b> {TelephoneNumber}<br><b>Alt Telephone:</b> {AltPhone}" +
            "<hr><b><em>Appointment Details:</b></em><br><b>Pick-up Time:</b> {PickupTime}<br><b>Appointment Type/Details:</b> {ApptType}<br><b>Estimated Length of Appointment:</b> {ApptTime} hour(s)<br>" +
            "<b>Appointment Address</b> {DeliveryAddress}<br><b>Appointment Time:</b> {AppointmentTime}" + "<hr><b><em> Appointment 2 Details:</b></em><br><b>Appointment Type/Details:</b> {ApptType2}<br><b>Estimated Length of Appointment:</b> {ApptTime2}<br>" +
            "<b>Appointment Address</b> {DeliveryAddress2}<br><b>Appointment Time:</b> {AppointmentTime2}<hr><br>Next steps:<ol><li>Please confirm ride at top of the email</li><li>Please call client a day in advance to confirm the trip details.</li><li>Please report time and mileage after your trip.</li></ol><br>To report mileage, reply to this email with:<ol><li>Number of miles the trip took</li><li>Number of hours the trip took</li><li>If there were any extra stops</li></ol><br><i>Note: Calculate distance from your place of residence/starting point and return</i></body></html>")]
        public string BodyHtml { get; set; }
        [DisplayName("Attachments"), MultipleFileUploadEditor]
        public string Attachments { get; set; }
        [Hidden]
        public int? ReplyToMailId { get; set; }
    }
}