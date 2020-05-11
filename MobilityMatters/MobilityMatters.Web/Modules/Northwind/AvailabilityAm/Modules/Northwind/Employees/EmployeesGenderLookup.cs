
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class EmployeesGenderLookup : RowLookupScript<Entities.EmployeesRow>
    {
        public EmployeesGenderLookup()
        {
            IdField = TextField = "Gender";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.EmployeesRow.Fields;
            query.Distinct(true)
                .Select(fld.Gender)
                .Where(
                    new Criteria(fld.Gender) != "" &
                    new Criteria(fld.Gender).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}