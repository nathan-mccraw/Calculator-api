CREATE PROCEDURE [dbo].[spCalculations_All]
AS
BEGIN

	SET NOCOUNT ON;

	SELECT [Id], [UserId], [FirstOperand], [Operator], [SecondOperand], [Answer]
	FROM dbo.Calculations;
END