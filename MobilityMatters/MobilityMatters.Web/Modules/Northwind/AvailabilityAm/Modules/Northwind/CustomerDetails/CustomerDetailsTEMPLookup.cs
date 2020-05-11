
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerDetailsTEMPLookup : RowLookupScript<Entities.CustomerDetailsRow>
    {
        public CustomerDetailsTEMPLookup()
        {
            IdField = TextField = "TEMP";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerDetailsRow.Fields;
            query.Distinct(true)
                .Select(fld.TEMP)
                .Where(
                    new Criteria(fld.TEMP) != "" &
                    new Criteria(fld.TEMP).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}