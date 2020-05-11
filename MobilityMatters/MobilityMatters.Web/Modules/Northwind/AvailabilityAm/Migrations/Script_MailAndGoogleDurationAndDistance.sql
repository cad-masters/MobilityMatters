--1) Adding new fields for distance and duration
ALTER TABLE [dbo].[Orders]
ADD DistanceText NVARCHAR(255) NULL

ALTER TABLE [dbo].[Orders]
ADD DistanceValue INT NULL

ALTER TABLE [dbo].[Orders]
ADD DurationText NVARCHAR(255) NULL

ALTER TABLE [dbo].[Orders]
ADD DurationValue INT NULL

--2) Creating Mail Table
CREATE TABLE [dbo].[Mail](
	[MailId] [int] IDENTITY(1,1) NOT NULL,
	[UID] [nvarchar](40) NULL,
	[Subject] [nvarchar](max) NOT NULL,
	[Body] [nvarchar](max) NOT NULL,
	[Direction] [nvarchar](1) NOT NULL,
	[To] [nvarchar](max) NOT NULL,
	[CC] [nvarchar](max) NULL,
	[From] [nvarchar](max) NOT NULL,
	[SendDateTime] [datetime] NOT NULL,
	[ReceivedDate] [datetime] NULL,
	[CreatedBy] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedOn] [datetime] NULL,
	[IsSent] [bit] NOT NULL,
	[ErrorMessage] [nvarchar](max) NULL,
 CONSTRAINT [PK_Mail] PRIMARY KEY CLUSTERED 
(
	[MailId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[Mail] ADD  CONSTRAINT [DF_Mail_Direction]  DEFAULT ('o') FOR [Direction]
GO

ALTER TABLE [dbo].[Mail] ADD  CONSTRAINT [DF_Mail_IsSent]  DEFAULT ((0)) FOR [IsSent]
GO

--3) Creating MailAttachments Table
CREATE TABLE [dbo].[MailAttachments](
	[AttachmentId] [int] IDENTITY(1,1) NOT NULL,
	[MailId] [int] NOT NULL,
	[MimeType] [nvarchar](100) NOT NULL,
	[Size] [int] NOT NULL,
	[FilePath] [nvarchar](150) NOT NULL,
	[OriginalFileName] [nvarchar](150) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedOn] [datetime] NULL,
	[ModifiedBy] [int] NULL,
	[ModifiedOn] [datetime] NULL,
 CONSTRAINT [PK_MailAttachments] PRIMARY KEY CLUSTERED 
(
	[AttachmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[MailAttachments]  WITH CHECK ADD  CONSTRAINT [FK_MailAttachments_MailId] FOREIGN KEY([MailId])
REFERENCES [dbo].[Mail] ([MailId])
GO

ALTER TABLE [dbo].[MailAttachments] CHECK CONSTRAINT [FK_MailAttachments_MailId]
GO