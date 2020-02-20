
namespace MobilityMatters.Northwind.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Web;

    [LookupScript]
    public class CustomerLookup : RowLookupScript<CustomerRow>
    {
        public CustomerLookup()
        {
            //IdField = CustomerRow.Fields.CustomerID.PropertyName;     //original code
            IdField = CustomerRow.Fields.CompanyName.PropertyName;
            //TextField = CustomerRow.Fields.CompanyName.PropertyName;  //original code
            TextField = CustomerRow.Fields.ContactName.PropertyName;
        }
    }
}