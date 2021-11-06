CREATE PROCEDURE [dbo].[spUsers_All]

AS
BEGIN
	SET NOCOUNT ON;

	SELECT [Id], [Username], [FirstName], [LastName] FROM
	dbo.Users
END
