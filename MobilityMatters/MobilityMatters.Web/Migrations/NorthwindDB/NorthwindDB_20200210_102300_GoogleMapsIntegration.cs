using FluentMigrator;

namespace MobilityMatters.Migrations.NorthwindDB
{
    [Migration(20200210102300)]
    public class NorthwindDB_20200210_102300_GoogleMapsIntegration : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("Orders")
                .AddColumn("DistanceText").AsString().Nullable()
                .AddColumn("DistanceValue").AsInt32().Nullable()
                .AddColumn("DurationText").AsString().Nullable()
                .AddColumn("DurationValue").AsInt32().Nullable();
        }
    }
}