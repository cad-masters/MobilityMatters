
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OrderCustomerProgramLookup : RowLookupScript<Entities.OrderRow>
    {
        public OrderCustomerProgramLookup()
        {
            IdField = TextField = "CustomerProgram";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.CustomerProgram)
                .Where(
                    new Criteria(fld.CustomerProgram) != "" &
                    new Criteria(fld.CustomerProgram).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}