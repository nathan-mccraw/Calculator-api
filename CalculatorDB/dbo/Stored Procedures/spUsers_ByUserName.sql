CREATE PROCEDURE [dbo].[spUsers_ByUserName]
	@Username NVARCHAR(50)
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [Id], [Username], [FirstName], [LastName]
	FROM dbo.Users
	WHERE @Username = Username;
END
