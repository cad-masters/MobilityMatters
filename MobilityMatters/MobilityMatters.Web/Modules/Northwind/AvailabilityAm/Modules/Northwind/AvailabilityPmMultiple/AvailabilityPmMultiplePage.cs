
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/AvailabilityPmMultiple"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.AvailabilityPmMultipleRow))]
    public class AvailabilityPmMultipleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/AvailabilityPmMultiple/AvailabilityPmMultipleIndex.cshtml");
        }
    }
}