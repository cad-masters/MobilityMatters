
namespace MobilityMatters.Northwind
{
    using Entities;
    using Serenity;
    using Serenity.Data;
    using Serenity.Reporting;
    using System;
    using System.Collections.Generic;
    using System.Linq;

    public class CityIDListDecorator : BaseCellDecorator
    {
        public override void Decorate()
        {
            var idList = this.Value as IEnumerable<int>;
            if (idList == null || !idList.Any())
            {
                this.Value = "";
                return;
            }

            var byId = TwoLevelCache.GetLocalStoreOnly("CityIDListDecorator:CityIDById", 
                TimeSpan.Zero, TerritoryRow.Fields.GenerationKey, () =>
                {
                    using (var connection = SqlConnections.NewFor<TerritoryRow>())
                    {
                        var fld = TerritoryRow.Fields;
                        return connection.List<TerritoryRow>(q => q
                            .Select(fld.ID)
                            .Select(fld.TerritoryDescription))
                            .ToDictionary(x => x.ID.Value);
                    }
                });

            this.Value = String.Join(", ", idList.Select(x =>
            {
                TerritoryRow e;
                return byId.TryGetValue(x, out e) ? e.TerritoryDescription : x.ToString();
            }));
        }
    }
}