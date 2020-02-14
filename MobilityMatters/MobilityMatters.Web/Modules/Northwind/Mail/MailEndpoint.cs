
namespace MobilityMatters.Northwind.Endpoints
{
    using MailKit;
    using MailKit.Net.Imap;
    using MailKit.Net.Smtp;
    using MimeKit;
    using MimeKit.Utils;
    using Serenity;
    using Serenity.Data;
    using Serenity.Services;
    using Serenity.Web;
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.IO;
    using System.Linq;
    using System.Web;
    using System.Web.Mvc;
    using MyRepository = Repositories.MailRepository;
    using MyRow = Entities.MailRow;

    [RoutePrefix("Services/Northwind/Mail"), Route("{action}")]
    [ConnectionKey(typeof(MyRow)), ServiceAuthorize(typeof(MyRow))]
    public class MailController : ServiceEndpoint
    {
        public class AttachmentInfo
        {
            public int Key;
            public MimeEntity Mime;
            public string Filename;
            public string Url;
            public bool IsEmbedded { get; set; }
            public int Size { get; set; }
        }

        public class AttachmentList
        {
            public Dictionary<int, AttachmentInfo> ByIndex;
            public List<AttachmentInfo> InOrder;
            public string HtmlBody;
        }

        [HttpPost, AuthorizeCreate(typeof(MyRow))]
        public SaveResponse Create(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Create(uow, request);
        }

        [HttpPost, AuthorizeUpdate(typeof(MyRow))]
        public SaveResponse Update(IUnitOfWork uow, SaveRequest<MyRow> request)
        {
            return new MyRepository().Update(uow, request);
        }
 
        [HttpPost, AuthorizeDelete(typeof(MyRow))]
        public DeleteResponse Delete(IUnitOfWork uow, DeleteRequest request)
        {
            return new MyRepository().Delete(uow, request);
        }

        [HttpPost]
        public RetrieveResponse<MyRow> Retrieve(IDbConnection connection, RetrieveRequest request)
        {
            return new MyRepository().Retrieve(connection, request);
        }

        [HttpPost]
        public ListResponse<MyRow> List(IDbConnection connection, ListRequest request)
        {
            return new MyRepository().List(connection, request);
        }

        public static void UsingSmtp(Action<SmtpClient> action)
        {
            var client = new SmtpClient();
            try
            {
                var config = Config.Get<MailSettings>();
                client.Connect(config.SmtpHost, 587, MailKit.Security.SecureSocketOptions.Auto);
                client.Authenticate(config.Username, config.Password);
                action(client);
            }
            finally
            {
                client.Disconnect(true);
            }
        }

        public static void UsingClient(Action<ImapClient> action)
        {
            var client = new ImapClient();
            try
            {
                var config = Config.Get<MailSettings>();
                client.Connect(config.ImapHost, config.ImapPort, MailKit.Security.SecureSocketOptions.SslOnConnect);
                client.Authenticate(config.Username, config.Password);

                action(client);
            }
            finally
            {
                client.Disconnect(true);
            }
        }

        public ServiceResponse Compose(IUnitOfWork uow, MailComposeRequest request)
        {
            return ComposeMail(uow, request, Request.Url.GetLeftPart(UriPartial.Authority));
        }

        public static ServiceResponse ComposeMail(IUnitOfWork uow, MailComposeRequest request, string requestRootUrl, string overrideDisplayName = null)
        {
            request.CheckNotNull();
            Check.NotNull(request.To, "to");
            var config = Config.Get<MailSettings>();
            var message = new MimeMessage();

            var row = new Entities.MailRow();
            row.Uid = Guid.NewGuid().ToString("N");
            message.MessageId = row.Uid;

            var subject = "Mobility Matters | Ride Scheduled" + request.Subject ?? "";

            string editLink = null;
            string editKind = null;

            row.Subject = subject;
            message.Subject = subject;

            if (config.SenderAddress.IsTrimmedEmpty())
                throw new ValidationError("Please set EmailSendAddress site setting!");

            var user = Authorization.UserDefinition as UserDefinition;
            var from = new MailboxAddress(overrideDisplayName ?? user.DisplayName, config.SenderAddress);
            row.From = from.ToString();
            message.From.Add(from);

            var c = Entities.EmployeesRow.Fields;
            row.To = "";
            foreach (var toId in request.To)
            {
                var toVolunteers = uow.Connection.ById<Entities.EmployeesRow>(toId, q => q
                    .Select(c.FirstName)
                    .Select(c.LastName)
                    .Select(c.Email));

                if (string.IsNullOrWhiteSpace(toVolunteers.Email))
                    throw new ValidationError("To Volunteer " + toVolunteers.FirstName + " " + toVolunteers.LastName + " doesn't have an e-mail address, please set it!");

                var to = new MailboxAddress(toVolunteers.FirstName + " " + toVolunteers.LastName, toVolunteers.Email);
                row.To = row.To + ";" + to.ToString();
                message.To.Add(to);
            }

            if (request.Cc != null)
            {
                var ccList = new List<string>();
                foreach (var contactId in request.Cc)
                {
                    var ccVolunteers = uow.Connection.ById<Entities.EmployeesRow>(contactId, q => q
                        .Select(c.FirstName)
                        .Select(c.LastName)
                        .Select(c.Email));
                    if (ccVolunteers.Email.IsTrimmedEmpty())
                        throw new ValidationError("CC Volunteer " + ccVolunteers.FirstName + " " + ccVolunteers.LastName + " doesn't have an e-mail address, please set it!");

                    var cc = new MailboxAddress(ccVolunteers.FirstName + " " + ccVolunteers.LastName, ccVolunteers.Email);
                    message.Cc.Add(cc);
                    ccList.Add(cc.ToString());
                }

                row.Cc = string.Join("; ", ccList);
            }

            var body = request.BodyHtml ?? "";
            if (body.IndexOf("</html>") < 0)
                body = "<html><title>" + HttpUtility.HtmlEncode(request.Subject) +
                    "</title><body>" + body + "</body></html>";

            if (editLink != null)
            {
                var externalUrl = Config.Get<EnvironmentSettings>().SiteExternalUrl ??
                     requestRootUrl + VirtualPathUtility.ToAbsolute("~/");

                editLink = HttpUtility.HtmlAttributeEncode(UriHelper.Combine(externalUrl, editLink));

                var idx = body.IndexOf("</body>");
                body = body.Insert(idx, "<p></p><p style=\"margin-top: 15px;\">Click link below to open related " + editKind + ":</p>" +
                    "<p><a href=\"" + editLink + "\">" + HttpUtility.HtmlEncode(editLink) + "</a></p>");
            }

            var bodyBuilder = new BodyBuilder();
            body = AttachEmbeddedImages(bodyBuilder, body);
            var filesToDelete = new FilesToDelete();
            UploadHelper.RegisterFilesToDelete(uow, filesToDelete);

            string fileNameFormat = "Northwind/Mail/{3:yyyyMM}/{4}";

            var attachmentRows = AttachFiles(bodyBuilder, request.Attachments, filesToDelete, fileNameFormat);
            bodyBuilder.HtmlBody = body;
            row.Body = ConvertEmbeddedImagesToDataUris(bodyBuilder, body);
            message.Body = bodyBuilder.ToMessageBody();
            row.Direction = "o";
            row.SendDateTime = DateTime.UtcNow;
            row.CreatedBy = user?.UserId ?? user.UserId;
            row.CreatedOn = DateTime.UtcNow;
            var rowId = Convert.ToInt32(uow.Connection.InsertAndGetID(row));
            foreach (var att in attachmentRows)
            {
                att.MailId = rowId;
                att.CreatedBy = row.CreatedBy;
                att.CreatedOn = DateTime.UtcNow;
                uow.Connection.Insert(att);
            }

            var response = new ServiceResponse();

            uow.OnCommit += (() =>
            {
                UsingSmtp(client =>
                {
                    try
                    {
                        client.Send(message);

                        uow.Connection.UpdateById<Entities.MailRow>(new MyRow
                        {
                            MailId = rowId,
                            IsSent = true

                        });
                    }
                    catch (Exception ex)
                    {
                        ex.Log();
                        uow.Connection.UpdateById<Entities.MailRow>(new MyRow
                        {
                            MailId = rowId,
                            IsSent = false,
                            ErrorMessage = ex.Message
                        });
                    }
                });

                UsingClient(client =>
                {
                    try
                    {
                        client.GetFolder(SpecialFolder.Sent).Append(message, MessageFlags.Seen);
                    }
                    catch (Exception ex)
                    {
                        ex.Log();
                    }
                });
            });

            return response;
        }

        private static string AttachEmbeddedImages(BodyBuilder builder, string body)
        {
            int start = 0;
            int index;
            var src = "src=\"";
            string search = src + VirtualPathUtility.ToAbsolute("~/upload/");
            while ((index = body.IndexOf(search + "temporary/", start)) >= 0)
            {
                var end = body.IndexOf('"', index + search.Length);
                var url = HttpUtility.HtmlDecode(body.Substring(index + search.Length, end - index - search.Length));
                UploadHelper.CheckFileNameSecurity(url);
                var path = UploadHelper.DbFilePath(url);

                if (!System.IO.File.Exists(path))
                    throw new Exception(url + " temporary file not found!");

                string originalName;
                var origFile = System.IO.Path.ChangeExtension(path, ".orig");
                if (System.IO.File.Exists(origFile))
                {
                    using (var sr = new System.IO.StreamReader(System.IO.File.OpenRead(origFile)))
                        originalName = sr.ReadLine();
                }
                else
                    originalName = "embed" + (builder.LinkedResources.Count + 1) + System.IO.Path.GetExtension(path);

                var image = builder.LinkedResources.Add(originalName, System.IO.File.ReadAllBytes(path));
                image.ContentId = MimeUtils.GenerateMessageId();
                url = "cid:" + image.ContentId;

                url = HttpUtility.HtmlEncode(url);
                body = body.Substring(0, index + src.Length) + url + body.Substring(end);
                start = index + url.Length + 1;
            }

            return body;
        }

        private static string ConvertEmbeddedImagesToDataUris(BodyBuilder builder, string body)
        {
            int start = 0;
            int index;
            var src = "src=\"";
            string search = src + "cid:";
            while ((index = body.IndexOf(search, start)) >= 0)
            {
                var end = body.IndexOf('"', index + search.Length);
                var cid = HttpUtility.HtmlDecode(body.Substring(index + search.Length, end - index - search.Length));
                MimeEntity mime = null;
                foreach (var res in builder.LinkedResources)
                    if (res.ContentId == cid)
                        mime = res;

                if (mime as MimePart != null)
                {
                    using (var output = new MemoryStream())
                    {
                        var mp = mime as MimePart;
                        mp.Content.DecodeTo(output);

                        var buffer = output.GetBuffer();
                        int length = (int)output.Length;

                        var url = string.Format("data:{0};base64,{1}",
                            mime.ContentType.MimeType,
                            Convert.ToBase64String(buffer, 0, length));
                        url = HttpUtility.HtmlEncode(url);
                        start = index + url.Length + 1;
                        body = body.Substring(0, index + src.Length) + url + body.Substring(end);
                    }
                }
                else
                    start = index + search.Length + 1;
            }

            return body;
        }

        private static List<Entities.MailAttachmentsRow> AttachFiles(BodyBuilder builder, string attachments,
          FilesToDelete filesToDelete, string fileNameFormat)
        {
            var result = new List<Entities.MailAttachmentsRow>();

            if (string.IsNullOrEmpty(attachments))
                return result;

            var list = JSON.Parse<UploadedFile[]>(attachments);
            foreach (var att in list)
            {
                if (!att.Filename.ToLowerInvariant().StartsWith("temporary/"))
                    throw new InvalidOperationException("Only temporary files can be used for upload!");

                UploadHelper.CheckFileNameSecurity(att.Filename);

                var path = UploadHelper.DbFilePath(att.Filename);

                string originalName;
                var origFile = System.IO.Path.ChangeExtension(path, ".orig");
                if (System.IO.File.Exists(origFile))
                {
                    using (var sr = new System.IO.StreamReader(System.IO.File.OpenRead(origFile)))
                        originalName = sr.ReadLine();
                }
                else
                    originalName = "att" + (builder.Attachments.Count + 1) + System.IO.Path.GetExtension(path);

                var bytes = System.IO.File.ReadAllBytes(path);
                var attachment = builder.Attachments.Add(originalName, bytes);
                MimeKit.Parameter param;
                if (attachment.ContentDisposition.Parameters.TryGetValue("filename", out param))
                    param.EncodingMethod = ParameterEncodingMethod.Rfc2047;

                var copyResult = new UploadHelper(fileNameFormat).CopyTemporaryFile(
                    att.Filename, -1, filesToDelete);

                result.Add(new Entities.MailAttachmentsRow
                {
                    MimeType = attachment.ContentType.MimeType,
                    Size = bytes.Length,
                    OriginalFileName = originalName,
                    FilePath = copyResult.DbFileName
                });
            }

            return result;
        }

        public static AttachmentList GetAttachmentList(MimeMessage message,
            bool forReply, FilesToDelete filesToDelete)
        {
            var uploadHelper = new UploadHelper("Nortwind/Mail/{3:yyyyMM}/{4}");

            var result = new AttachmentList();
            result.ByIndex = new Dictionary<int, AttachmentInfo>();

            result.InOrder = new List<AttachmentInfo>();
            var attachmentNumber = 0;
            var visitor = new EmailPreviewVisitor(message, (mime, embedUrl) =>
            {
                var sameAttachment = result.InOrder.FirstOrDefault(x => x.Mime == mime);
                if (sameAttachment != null)
                {
                    sameAttachment.IsEmbedded = sameAttachment.IsEmbedded || embedUrl != null;
                    return sameAttachment.Url;
                }

                ++attachmentNumber;
                string fileName;
                string downUrl = null;

                byte[] buffer;
                using (var output = new MemoryStream())
                {
                    (mime as MimePart).Content.DecodeTo(output);
                    buffer = output.GetBuffer();
                }

                if (mime is MessagePart)
                {
                    fileName = mime.ContentDisposition?.FileName ?? (mime.ContentType.Name ?? "attached" + attachmentNumber + ".eml");
                }
                else
                {
                    fileName = ((MimePart)mime).FileName ?? "file" + attachmentNumber + ".dat";
                }

                if (embedUrl != null)
                    downUrl = string.Format("data:{0};base64,{1}",
                        mime.ContentType.MimeType, Convert.ToBase64String(buffer, 0, buffer.Length));
                else
                {
                    var processor = new UploadProcessor
                    {
                        ThumbWidth = 128,
                        ThumbHeight = 96
                    };

                    if (processor.ProcessStream(new MemoryStream(buffer), Path.GetExtension(fileName)))
                    {
                        var temporaryFile = "temporary/" + Path.GetFileName(processor.FilePath);
                        using (var sw = new StreamWriter(Path.ChangeExtension(UploadHelper.DbFilePath(temporaryFile), ".orig")))
                            sw.WriteLine(fileName);

                        var copyResult = uploadHelper.CopyTemporaryFile(temporaryFile, -1, filesToDelete);
                        downUrl = "/upload/" + copyResult.DbFileName;
                    }
                    else
                        downUrl = "?";
                }

                var info = new AttachmentInfo
                {
                    Key = attachmentNumber,
                    Filename = fileName,
                    Mime = mime,
                    Url = downUrl,
                    IsEmbedded = embedUrl != null,
                    Size = buffer.Length
                };

                result.ByIndex[attachmentNumber] = info;
                result.InOrder.Add(info);
                return downUrl;

            }, forReply);

            message.Accept(visitor);
            result.HtmlBody = visitor.HtmlBody;

            return result;
        }
    }
}
