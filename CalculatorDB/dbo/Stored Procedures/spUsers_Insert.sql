CREATE PROCEDURE [dbo].[spUsers_Insert]
	@Username NVARCHAR(50),
	@Firstname NVARCHAR(50),
	@Lastname NVARCHAR(50),
	@Id INT OUTPUT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO dbo.Users(Username, FirstName, LastName)
	VALUES(@Username, @Firstname, @Lastname);

	SET @Id = SCOPE_IDENTITY();
END
