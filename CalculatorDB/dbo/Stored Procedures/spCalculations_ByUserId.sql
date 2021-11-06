CREATE PROCEDURE [dbo].[spCalculations_ByUserId]
	@userId int
AS
BEGIN
	set nocount on;

	SELECT [Id], [UserId], [FirstOperand], [Operator], [SecondOperand], [Answer]
	FROM dbo.[Calculations]
	WHERE UserId = @userId;
END
