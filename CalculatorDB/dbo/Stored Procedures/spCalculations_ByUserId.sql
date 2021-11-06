CREATE PROCEDURE [dbo].[spCalculations_ByUserId]
	@userId INT
AS
BEGIN
	SET NOCOUNT ON;

	SELECT [Id], [UserId], [FirstOperand], [Operator], [SecondOperand], [Answer]
	FROM dbo.[Calculations]
	WHERE UserId = @userId;
END
