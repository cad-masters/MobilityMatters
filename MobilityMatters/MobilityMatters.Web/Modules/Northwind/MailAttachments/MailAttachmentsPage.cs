
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/MailAttachments"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MailAttachmentsRow))]
    public class MailAttachmentsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/MailAttachments/MailAttachmentsIndex.cshtml");
        }
    }
}