CREATE PROCEDURE [dbo].[spCalculations_All]
AS
BEGIN

	set nocount on;

	SELECT [Id], [UserId], [FirstOperand], [Operator], [SecondOperand], [Answer]
	FROM dbo.Calculations;
END