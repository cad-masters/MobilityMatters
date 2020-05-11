
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/AvailabilityAm"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvailabilityAmRow))]
    public class AvailabilityAmController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/AvailabilityAm/AvailabilityAmIndex.cshtml");
        }
    }
}