
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class EmployeesStatusLookup : RowLookupScript<Entities.EmployeesRow>
    {
        public EmployeesStatusLookup()
        {
            IdField = TextField = "Title";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.EmployeesRow.Fields;
            query.Distinct(true)
                .Select(fld.Title)
                .Where(
                    new Criteria(fld.Title) != "" &
                    new Criteria(fld.Title).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}