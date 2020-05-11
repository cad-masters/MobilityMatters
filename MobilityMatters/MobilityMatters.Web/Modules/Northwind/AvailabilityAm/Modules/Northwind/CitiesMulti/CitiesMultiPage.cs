
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/CitiesMulti"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CitiesMultiRow))]
    public class CitiesMultiController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/CitiesMulti/CitiesMultiIndex.cshtml");
        }
    }
}