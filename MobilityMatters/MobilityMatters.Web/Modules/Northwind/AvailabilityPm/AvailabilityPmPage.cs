
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/AvailabilityPm"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvailabilityPmRow))]
    public class AvailabilityPmController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/AvailabilityPm/AvailabilityPmIndex.cshtml");
        }
    }
}