CREATE PROCEDURE [dbo].[spCalculations_Insert]
	@UserId INT,
	@FirstOperand DECIMAL(10,0),
	@Operator NVARCHAR(5),
	@SecondOperand DECIMAL(10,0),
	@Answer DECIMAL(10,0),
	@Id INT OUTPUT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer)
	VALUES (@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer);

	SET @Id = SCOPE_IDENTITY();
END
