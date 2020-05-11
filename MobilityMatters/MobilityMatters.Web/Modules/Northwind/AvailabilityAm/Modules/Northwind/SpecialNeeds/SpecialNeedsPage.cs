
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/SpecialNeeds"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SpecialNeedsRow))]
    public class SpecialNeedsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/SpecialNeeds/SpecialNeedsIndex.cshtml");
        }
    }
}