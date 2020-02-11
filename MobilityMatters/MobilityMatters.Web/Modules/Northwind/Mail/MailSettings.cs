
namespace MobilityMatters.Northwind
{
    using Serenity.ComponentModel;
    using Serenity.Services;
    using System.Collections.Generic;
    using System.ComponentModel;

    [SettingScope("Application"), SettingKey("Email")]
    public class MailSettings
    {
        public string SenderName { get; set; }
        public string SenderAddress { get; set; }
        public string ImapHost { get; set; }
        public int ImapPort { get; set; }
        public string SmtpHost { get; set; }
        public int SmtpPort { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public MailSettings()
        {
            SmtpPort = 587;
            ImapPort = 993;
        }
    }
}