
namespace MobilityMatters.Northwind.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/ProgramMultiple"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.ProgramMultipleRow))]
    public class ProgramMultipleController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/ProgramMultiple/ProgramMultipleIndex.cshtml");
        }
    }
}