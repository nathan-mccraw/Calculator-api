using Core.Entities;
using Dapper;
using DataLibrary.Db;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public class CalculationsRepoQuery : ICalculationsRepo
    {
        private readonly IDataAccess _dataAccess;
        private readonly ConnectionStringData _connectionString;

        public CalculationsRepoQuery(IDataAccess dataAccess, ConnectionStringData connectionString)
        {
            _dataAccess = dataAccess;
            _connectionString = connectionString;
        }

        public async Task<int> AddCalculation(CalculationEntity calculation)
        {
            string sql = @"INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer, Date)
                           OUTPUT INSERTED.Id
	                       VALUES(@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer, @Date);";

            DynamicParameters p = new DynamicParameters();

            p.Add("UserId", calculation.UserId);
            p.Add("FirstOperand", calculation.FirstOperand);
            p.Add("Operator", calculation.Operator);
            p.Add("SecondOperand", calculation.SecondOperand);
            p.Add("Answer", calculation.Answer);
            p.Add("Date", calculation.Date);

            int id = await _dataAccess.SaveData(sql, p, _connectionString.SqlConnectionName);

            return id;
        }

        public Task<int> DeleteCalculation(int calculationId)
        {
            string sql = @"DELETE FROM dbo.Calculations
                           WHERE Id = @calculationId;";

            return _dataAccess.SaveData(sql, new { Id = calculationId }, _connectionString.SqlConnectionName);
        }

        public async Task<List<CalculationEntity>> GetCalculations()
        {
            string calcSql = @"SELECT c.Id, u.Username, u.Id AS UserId, c.FirstOperand, c.Operator, c.SecondOperand, c.Answer, c.Date
                                 FROM dbo.Calculations c
                                 INNER JOIN dbo.Users u
                                 ON c.UserId = u.Id";

            return await _dataAccess.LoadData<CalculationEntity, dynamic>(calcSql,
                                                                          new { },
                                                                          _connectionString.SqlConnectionName);
        }

        public Task<List<CalculationEntity>> GetCalculationsByUserId(int userId)
        {
            string sql = @"SELECT Id, UserId, FirstOperand, Operator, SecondOperand, Answer, Date
                           FROM dbo.Calculations
                           WHERE UserId = @userId;";

            return _dataAccess.LoadData<CalculationEntity, dynamic>(sql, new { UserId = userId }, _connectionString.SqlConnectionName);
        }

        public async Task<List<CalcWithUsernameEntity>> GetCalculationsWithUser()
        {
            string sql = @"SELECT c.Id, u.Username, u.Id AS UserId, c.FirstOperand, c.Operator, c.SecondOperand, c.Answer, c.Date
                                 FROM dbo.Calculations c
                                 INNER JOIN dbo.Users u
                                 ON c.UserId = u.Id";

     
            return await _dataAccess.LoadData<CalcWithUsernameEntity, dynamic>(sql, new { }, _connectionString.SqlConnectionName);
        }
    }
}