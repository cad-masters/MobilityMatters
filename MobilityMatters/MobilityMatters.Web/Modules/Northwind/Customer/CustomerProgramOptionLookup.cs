
namespace MobilityMatters.Northwind.Lookups
{
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript]
    public class CustomerProgramOptionLookup : RowLookupScript<Entities.CustomerRow>
    {
        public CustomerProgramOptionLookup()
        {
            IdField = TextField = "ProgramOption";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = Entities.CustomerRow.Fields;
            query.Distinct(true)
                .Select(fld.ProgramOption)
                .Where(
                    new Criteria(fld.ProgramOption) != "" &
                    new Criteria(fld.ProgramOption).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}