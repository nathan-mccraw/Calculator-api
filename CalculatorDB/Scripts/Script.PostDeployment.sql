/*
Post-Deployment Script Template							
--------------------------------------------------------------------------------------
 This file contains SQL statements that will be appended to the build script.		
 Use SQLCMD syntax to include a file in the post-deployment script.			
 Example:      :r .\myfile.sql								
 Use SQLCMD syntax to reference a variable in the post-deployment script.		
 Example:      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/

if not exists (SELECT * FROM dbo.Calculations)
begin
    INSERT INTO dbo.Calculations(UserId, FirstOperand, Operator, SecondOperand, Answer)
    VALUES (1, 2, '+', 3, 5),
    (2, 9, '/', 3, 3),
    (1, 122, '+', 15, 137),
    (1, -273, '+', 513, 240),
    (3, 123, '+', 3, 41);
end