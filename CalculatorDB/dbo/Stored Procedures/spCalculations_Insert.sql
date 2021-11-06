CREATE PROCEDURE [dbo].[spCalculations_Insert]
	@UserId int,
	@FirstOperand decimal(10,0),
	@Operator nvarchar(5),
	@SecondOperand decimal(10,0),
	@Answer decimal(10,0),
	@Id int output
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer)
	VALUES (@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer);

	SET @Id = SCOPE_IDENTITY();
END
