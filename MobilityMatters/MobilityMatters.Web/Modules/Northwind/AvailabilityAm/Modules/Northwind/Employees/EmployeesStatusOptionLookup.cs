
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class EmployeesStatusOptionLookup : RowLookupScript<Entities.EmployeesRow>
    {
        public EmployeesStatusOptionLookup()
        {
            IdField = TextField = "TitleOfCourtesy";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.EmployeesRow.Fields;
            query.Distinct(true)
                .Select(fld.TitleOfCourtesy)
                .Where(
                    new Criteria(fld.TitleOfCourtesy) != "" &
                    new Criteria(fld.TitleOfCourtesy).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}