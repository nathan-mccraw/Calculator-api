using Core.Entities;
using Core.Models;
using Dapper;
using DataLibrary.Db;
using System.Collections.Generic;
using System.Data;
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

        public Task<int> CountAsync()
        {
            string sql = @"SELECT COUNT(Id) FROM dbo.Calculations";
            return _dataAccess.LoadSingleData<int, dynamic>(sql, new { }, _connectionString.SqlConnectionName);
        }

        public async Task<int> CreateAndAddCalculation(CalculationEntity calculation)
        {
            string sql = @"INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer, Date)
	                       VALUES(@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer, @Date);";

            DynamicParameters p = new DynamicParameters();

            p.Add("UserId", calculation.UserId);
            p.Add("FirstOperand", calculation.FirstOperand);
            p.Add("Operator", calculation.Operator);
            p.Add("SecondOperand", calculation.SecondOperand);
            p.Add("Answer", calculation.Answer);
            p.Add("Date", calculation.Date);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            await _dataAccess.SaveData(sql, p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }

        public Task<int> DeleteCalculation(int calculationId)
        {
            string sql = @"DELETE FROM dbo.Calculations
                           WHERE Id = @calculationId;";

            return _dataAccess.SaveData(sql, new { Id = calculationId }, _connectionString.SqlConnectionName);
        }

        public async Task<List<CalculationEntity>> GetCalculations(ClientParams clientParams)
        {
            string sql = @"SELECT Id, UserId, FirstOperand, Operator, SecondOperand, Answer, Date
                           FROM dbo.Calculations
                           ORDER BY Id
                           OFFSET @skip ROWS
                           FETCH NEXT @take ROWS ONLY;";

            return await _dataAccess.LoadData<CalculationEntity, dynamic>(sql, new { skip = clientParams.PageIndex * clientParams.PageSize, take = clientParams.PageSize }, _connectionString.SqlConnectionName);
        }

        public Task<List<CalculationEntity>> GetCalculationsByUserId(int userId)
        {
            string sql = @"SELECT Id, UserId, FirstOperand, Operator, SecondOperand, Answer, Date
                           FROM dbo.Calculations
                           WHERE UserId = @userId;";

            return _dataAccess.LoadData<CalculationEntity, dynamic>(sql, new { UserId = userId }, _connectionString.SqlConnectionName);
        }
    }
}