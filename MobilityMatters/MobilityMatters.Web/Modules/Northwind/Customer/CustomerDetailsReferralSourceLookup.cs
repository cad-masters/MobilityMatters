
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerDetailsReferralSourceLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerDetailsReferralSourceLookup()
        {
            IdField = TextField = "ReferralSource";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.ReferralSource)
                .Where(
                    new Criteria(fld.ReferralSource) != "" &
                    new Criteria(fld.ReferralSource).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}