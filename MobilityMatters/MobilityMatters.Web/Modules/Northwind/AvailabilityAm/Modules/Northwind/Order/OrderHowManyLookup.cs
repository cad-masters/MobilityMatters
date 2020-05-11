
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OrderHowManyLookup : RowLookupScript<Entities.OrderRow>
    {
        public OrderHowManyLookup()
        {
            IdField = TextField = "HowMany";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.HowMany)
                .Where(
                    new Criteria(fld.HowMany) != "" &
                    new Criteria(fld.HowMany).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}