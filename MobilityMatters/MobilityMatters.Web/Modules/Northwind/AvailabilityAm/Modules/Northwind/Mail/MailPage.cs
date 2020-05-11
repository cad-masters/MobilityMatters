﻿
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Mail"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.MailRow))]
    public class MailController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Mail/MailIndex.cshtml");
        }

        public ActionResult Outbox()
        {
            return View("~/Modules/Northwind/Mail/MailIndex.cshtml", false);
        }
    }
}