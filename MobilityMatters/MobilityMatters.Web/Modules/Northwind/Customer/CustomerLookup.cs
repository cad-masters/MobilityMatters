
namespace MobilityMatters.Northwind.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System;

    [LookupScript]
    public class CustomerLookup : RowLookupScript<CustomerRow>
    {
        public CustomerLookup()
        {
            IdField = CustomerRow.Fields.CustomerID.PropertyName;
            TextField = CustomerRow.Fields.FullName.PropertyName;
            Permission = "*";
            base.Expiration = TimeSpan.FromDays(-1);
        }


        protected override void PrepareQuery(SqlQuery query)
        {
            base.PrepareQuery(query);

            query.Select(CustomerRow.Fields.CustomerID);
        }
    }
}