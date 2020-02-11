namespace MobilityMatters.Northwind {
    export interface MailAttachmentsRow {
        AttachmentId?: number;
        MailId?: number;
        MimeType?: string;
        Size?: number;
        FilePath?: string;
        OriginalFileName?: string;
        CreatedBy?: number;
        CreatedOn?: string;
        ModifiedBy?: number;
        ModifiedOn?: string;
        MailUid?: string;
        MailSubject?: string;
        MailBody?: string;
        MailDirection?: string;
        MailTo?: string;
        MailCc?: string;
        MailFrom?: string;
        MailSendDateTime?: string;
        MailReceivedDate?: string;
        MailCreatedBy?: number;
        MailCreatedOn?: string;
        MailModifiedBy?: number;
        MailModifiedOn?: string;
    }

    export namespace MailAttachmentsRow {
        export const idProperty = 'AttachmentId';
        export const nameProperty = 'MimeType';
        export const localTextPrefix = 'Northwind.MailAttachments';
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            AttachmentId = "AttachmentId",
            MailId = "MailId",
            MimeType = "MimeType",
            Size = "Size",
            FilePath = "FilePath",
            OriginalFileName = "OriginalFileName",
            CreatedBy = "CreatedBy",
            CreatedOn = "CreatedOn",
            ModifiedBy = "ModifiedBy",
            ModifiedOn = "ModifiedOn",
            MailUid = "MailUid",
            MailSubject = "MailSubject",
            MailBody = "MailBody",
            MailDirection = "MailDirection",
            MailTo = "MailTo",
            MailCc = "MailCc",
            MailFrom = "MailFrom",
            MailSendDateTime = "MailSendDateTime",
            MailReceivedDate = "MailReceivedDate",
            MailCreatedBy = "MailCreatedBy",
            MailCreatedOn = "MailCreatedOn",
            MailModifiedBy = "MailModifiedBy",
            MailModifiedOn = "MailModifiedOn"
        }
    }
}

