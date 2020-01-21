
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerDNRLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerDNRLookup()
        {
            IdField = TextField = "DNR";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.DNR)
                .Where(
                    new Criteria(fld.DNR) != "" &
                    new Criteria(fld.DNR).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}