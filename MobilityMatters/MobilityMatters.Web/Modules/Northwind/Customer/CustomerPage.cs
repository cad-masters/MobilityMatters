﻿
namespace MobilityMatters.Northwind.Pages
{
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Customer"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.CustomerRow))]
    public class CustomerController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Customer.CustomerIndex);
        }

        public ActionResult Inactive()
        {
            return View(MVC.Views.Northwind.Customer.InactiveCustomerIndex);
        }
    }
}
