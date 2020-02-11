
using System.Collections.Generic;

namespace MobilityMatters.Common
{
    public class DashboardPageModel
    {
        public int OpenOrders { get; set; }
        public int ClosedOrderPercent { get; set; }
        public int CustomerCount { get; set; }
        public int ProductCount { get; set; }
        public int EmployeeCount { get; set; }
        public int OrderCount { get; set; }
        public int ContraCostaRiders { get; set; }
        public int AlamedaRiders { get; set; }
        public List<ClientReportModel> ClientsByCity { get; set; }
        public List<ClientReportModel> ClientsByAge { get; set; }
        public List<ClientReportModel> ClientsByTransportationType { get; set; }
        public List<ClientReportModel> ClientsByStatusType { get; set; }
        public List<ClientReportModel> ClientsByStatusOption { get; set; }
    }

    public class ClientReportModel
    {
        public string Name { get; set; }
        public string Count { get; set; }
    }
}