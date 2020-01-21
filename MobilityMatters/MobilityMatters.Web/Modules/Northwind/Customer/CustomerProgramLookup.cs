
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerProgramLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerProgramLookup()
        {
            IdField = TextField = "Program";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.Program)
                .Where(
                    new Criteria(fld.Program) != "" &
                    new Criteria(fld.Program).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}