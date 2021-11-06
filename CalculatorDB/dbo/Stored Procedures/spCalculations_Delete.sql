CREATE PROCEDURE [dbo].[spCalculations_Delete]
	@Id int
AS
BEGIN
	SET NOCOUNT ON;

	DELETE
	FROM dbo.[Calculations]
	WHERE Id = @Id;
END
