using FluentMigrator;

namespace MobilityMatters.Migrations.NorthwindDB
{
	[Migration(20200210155700)]
	public class NorthwindDB_20200210_155700_Mail : AutoReversingMigration
	{
		public override void Up()
		{
			Create.Table("Mail").InSchema("dbo")
				.WithColumn("MailId").AsInt32().Identity().PrimaryKey().NotNullable()
				.WithColumn("UID").AsString(40).Nullable()
				.WithColumn("Subject").AsString(int.MaxValue).NotNullable()
				.WithColumn("Body").AsString(int.MaxValue).NotNullable()
				.WithColumn("Direction").AsString(1).NotNullable().WithDefaultValue("o")
				.WithColumn("To").AsString(int.MaxValue).NotNullable()
				.WithColumn("CC").AsString(int.MaxValue).Nullable()
				.WithColumn("From").AsString(int.MaxValue).NotNullable()
				.WithColumn("SendDateTime").AsDateTime().NotNullable()
				.WithColumn("ReceivedDate").AsDateTime().Nullable()
				.WithColumn("CreatedBy").AsInt32().Nullable()
				.WithColumn("CreatedOn").AsDateTime().Nullable()
				.WithColumn("ModifiedBy").AsInt32().Nullable()
				.WithColumn("ModifiedOn").AsDateTime().Nullable();

			Create.Table("MailAttachments").InSchema("dbo")
				.WithColumn("AttachmentId").AsInt32().Identity().PrimaryKey().NotNullable()
				.WithColumn("MailId").AsInt32().NotNullable()
					.ForeignKey("FK_MailAttachments_MailId", "dbo", "Mail", "MailId")
				.WithColumn("MimeType").AsString(100).NotNullable()
				.WithColumn("Size").AsInt32().NotNullable()
				.WithColumn("FilePath").AsString(150).NotNullable()
				.WithColumn("OriginalFileName").AsString(150).NotNullable()
				.WithColumn("CreatedBy").AsInt32().Nullable()
				.WithColumn("CreatedOn").AsDateTime().Nullable()
				.WithColumn("ModifiedBy").AsInt32().Nullable()
				.WithColumn("ModifiedOn").AsDateTime().Nullable();
		}
	}
}