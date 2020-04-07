
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Employees"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.EmployeesRow))]
    public class EmployeesController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Northwind/Employees/EmployeesIndex.cshtml");
        }

        public ActionResult Inactive()
        {
            return View(MVC.Views.Northwind.Employees.InactiveEmployeeIndex);
        }
    }
}