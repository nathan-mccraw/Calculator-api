CREATE TABLE [dbo].[Calculations]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY,
	[UserId] INT NOT NULL,
	[FirstOperand] DECIMAL(10) NOT NULL,
	[Operator] VARCHAR(5) NOT NULL,
	[SecondOperand] DECIMAL(10) NOT NULL,
	[Answer] DECIMAL(10) NOT NULL
)
