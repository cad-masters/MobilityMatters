
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerReferralSourceLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerReferralSourceLookup()
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