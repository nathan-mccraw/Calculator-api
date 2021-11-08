CREATE PROCEDURE [dbo].[spUsers_ById]
	@userId INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [Id], [Username], [FirstName], [LastName]
	FROM dbo.Users
	WHERE @UserId = Id;
END
