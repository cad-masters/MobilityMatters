
namespace MobilityMatters.Northwind.Pages
{
    using MobilityMatters.Common;
    using MobilityMatters.Northwind.Entities;
    using Serenity.Data;
    using Serenity.Web;
    using System;
    using System.Data;
    using System.Data.SqlClient;
    using System.Web.Mvc;

    [RoutePrefix("Northwind/Order"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.OrderRow))]
    public class OrderController : Controller
    {
        public ActionResult Index()
        {
            return View(MVC.Views.Northwind.Order.OrderIndex);
        }

        public ActionResult Cancelled()
        {
            return View(MVC.Views.Northwind.Order.CancelledOrderIndex);
        }

        public ActionResult ConfirmTrip(TripConfirmRequest request)
        {
            try
            {
                var decryptId = EncryptionHelper.Decrypt(request.Token);
                int id;
                bool success = Int32.TryParse(decryptId, out id);
                if (success)
                {
                    using (var connection = SqlConnections.NewByKey("Northwind"))
                    using (var uow = new UnitOfWork(connection))
                    {
                        var updateOrder = new OrderRow
                        {
                            OrderID = id,
                            ConfirmRide = true
                        };
                        connection.UpdateById<OrderRow>(updateOrder);
                        uow.Commit();
                    }
                }

                return View("~/Modules/Northwind/Order/TripConfirm.cshtml", new TripConfirm { Message = "Success" });
            }
            catch
            {
                return View("~/Modules/Northwind/Order/TripConfirm.cshtml", new TripConfirm { Message = "Error" });
            }
        }
    }
}
