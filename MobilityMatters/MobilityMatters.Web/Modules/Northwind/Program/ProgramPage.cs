
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Program"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProgramRow))]
    public class ProgramController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Program/ProgramIndex.cshtml");
        }
    }
}