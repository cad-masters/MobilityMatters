
namespace MobilityMatters.Northwind.Lookups
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class OrderShipCityLookup : RowLookupScript<Entities.OrderRow>
    {
        public OrderShipCityLookup()
        {
            IdField = TextField = OrderRow.Fields.ShipCity.PropertyName;
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.OrderRow.Fields;
            query.Distinct(true)
                
                .Select(fld.ShipCity)
                .Where(
                    
                    new Criteria(fld.ShipCity) != "" &
                    new Criteria(fld.ShipCity).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}