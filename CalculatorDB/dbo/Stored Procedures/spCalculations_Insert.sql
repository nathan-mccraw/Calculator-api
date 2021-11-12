CREATE PROCEDURE [dbo].[spCalculations_Insert]
	@UserId INT,
	@FirstOperand DECIMAL(10,5),
	@Operator NVARCHAR(5),
	@SecondOperand DECIMAL(10,5),
	@Answer DECIMAL(10,5),
	@Id INT OUTPUT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer)
	VALUES (@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer);

	SET @Id = SCOPE_IDENTITY();
END
