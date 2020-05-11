
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/SpecialNeedsMultipleVolunteer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.SpecialNeedsMultipleVolunteerRow))]
    public class SpecialNeedsMultipleVolunteerController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/SpecialNeedsMultipleVolunteer/SpecialNeedsMultipleVolunteerIndex.cshtml");
        }
    }
}