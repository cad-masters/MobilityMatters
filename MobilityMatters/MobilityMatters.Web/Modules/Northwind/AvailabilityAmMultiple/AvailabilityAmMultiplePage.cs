
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/AvailabilityAmMultiple"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvailabilityAmMultipleRow))]
    public class AvailabilityAmMultipleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/AvailabilityAmMultiple/AvailabilityAmMultipleIndex.cshtml");
        }
    }
}