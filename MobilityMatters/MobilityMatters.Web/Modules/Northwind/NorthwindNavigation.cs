using Serenity.Navigation;
using MyPages = MobilityMatters.Northwind.Pages;
using Northwind = MobilityMatters.Northwind.Pages;

[assembly: NavigationMenu(7000, "Mobility Matters", icon: "fa-car")]
[assembly: NavigationLink(7100, "Mobility Matters/Riders", typeof(Northwind.CustomerController), icon: "fa-wheelchair")]
[assembly: NavigationLink(7200, "Mobility Matters/Trips", typeof(Northwind.OrderController), icon: "fa-bus")]
/*[assembly: NavigationLink(7300, "Mobility Matters/Products", typeof(Northwind.ProductController), icon: "fa-cube")]
[assembly: NavigationLink(7400, "Mobility Matters/Suppliers", typeof(Northwind.SupplierController), icon: "fa-truck")]
[assembly: NavigationLink(7500, "Mobility Matters/Shippers", typeof(Northwind.ShipperController), icon: "fa-ship")]
[assembly: NavigationLink(7600, "Mobility Matters/Categories", typeof(Northwind.CategoryController), icon: "fa-folder-o")]
[assembly: NavigationLink(7700, "Mobility Matters/Counties", typeof(Northwind.RegionController), icon: "fa-map-o")]
[assembly: NavigationLink(7800, "Mobility Matters/Cities", typeof(Northwind.TerritoryController), icon: "fa-city")]
[assembly: NavigationLink(7900, "Mobility Matters/Reports", typeof(Northwind.ReportsController), icon: "fa-files-o")]*/
[assembly: NavigationLink(int.MaxValue, "Mobility Matters/Volunteers", typeof(MyPages.EmployeesController), icon: "fa-user")]
/*[assembly: NavigationLink(int.MaxValue, "Northwind/Special Needs", typeof(MyPages.SpecialNeedsController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Special Needs Multiple", typeof(MyPages.SpecialNeedsMultipleController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Cities", typeof(MyPages.CitiesController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Cities Multi", typeof(MyPages.CitiesMultiController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Special Needs Multiple Volunteer", typeof(MyPages.SpecialNeedsMultipleVolunteerController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Availability Am", typeof(MyPages.AvailabilityAmController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Availability Am Multiple", typeof(MyPages.AvailabilityAmMultipleController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Availability Pm", typeof(MyPages.AvailabilityPmController), icon: null)]
[assembly: NavigationLink(int.MaxValue, "Northwind/Availability Pm Multiple", typeof(MyPages.AvailabilityPmMultipleController), icon: null)]*/
