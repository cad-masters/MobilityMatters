
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerResidenceLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerResidenceLookup()
        {
            IdField = TextField = "Residence";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Residence)
                .Where(
                    new Criteria(fld.Residence) != "" &
                    new Criteria(fld.Residence).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}