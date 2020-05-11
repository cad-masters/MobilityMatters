namespace MobilityMatters.Northwind {
    export interface MailComposeRequest extends Serenity.ServiceRequest {
        To?: number[];
        Cc?: number[];
        Subject?: string;
        BodyHtml?: string;
        Attachments?: string;
        ReplyToMailId?: number;
    }
}

