
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Cities"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CitiesRow))]
    public class CitiesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Cities/CitiesIndex.cshtml");
        }
    }
}