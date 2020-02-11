namespace MobilityMatters.Northwind {
    export interface MailRow {
        MailId?: number;
        Uid?: string;
        Subject?: string;
        Body?: string;
        Direction?: string;
        To?: string;
        Cc?: string;
        From?: string;
        SendDateTime?: string;
        IsSent?: boolean;
        ErrorMessage?: string;
        ReceivedDate?: string;
        CreatedBy?: number;
        CreatedOn?: string;
        ModifiedBy?: number;
        ModifiedOn?: string;
        Attachments?: string;
    }

    export namespace MailRow {
        export const idProperty = 'MailId';
        export const nameProperty = 'Uid';
        export const localTextPrefix = 'Northwind.Mail';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            MailId = "MailId",
            Uid = "Uid",
            Subject = "Subject",
            Body = "Body",
            Direction = "Direction",
            To = "To",
            Cc = "Cc",
            From = "From",
            SendDateTime = "SendDateTime",
            IsSent = "IsSent",
            ErrorMessage = "ErrorMessage",
            ReceivedDate = "ReceivedDate",
            CreatedBy = "CreatedBy",
            CreatedOn = "CreatedOn",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn",
            Attachments = "Attachments"
        }
    }
}

