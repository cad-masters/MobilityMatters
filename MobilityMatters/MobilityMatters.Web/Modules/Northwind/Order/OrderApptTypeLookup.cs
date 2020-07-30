
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OrderApptTypeLookup : RowLookupScript<Entities.OrderRow>
    {
        public OrderApptTypeLookup()
        {
            IdField = TextField = "ApptType";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                .Select(fld.ApptType)
                .Where(
                    new Criteria(fld.ApptType) != "" &
                    new Criteria(fld.ApptType).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}