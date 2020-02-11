using FluentMigrator;

namespace MobilityMatters.Migrations.NorthwindDB
{
	[Migration(20200210182000)]
	public class NorthwindDB_20200210_182000_MailAddFields : AutoReversingMigration
	{
		public override void Up()
		{
			Alter.Table("Mail")
				.AddColumn("IsSent").AsBoolean().NotNullable().WithDefaultValue(false)
				.AddColumn("ErrorMessage").AsString(int.MaxValue).Nullable();
		}
	}
}