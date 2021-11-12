using Dapper;
using DataLibrary.Db;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public class CalculationsRepo : ICalculationsRepo
    {
        private readonly IDataAccess _dataAccess;
        private readonly ConnectionStringData _connectionString;

        public CalculationsRepo(IDataAccess dataAccess, ConnectionStringData connectionString)
        {
            _dataAccess = dataAccess;
            _connectionString = connectionString;
        }

        public Task<List<CalculationModel>> GetCalculations()
        {
            //"dbo.spCalculations_All"
            string sql = "SELECT * FROM dbo.Calculations ORDER BY Id";
            return _dataAccess.LoadData<CalculationModel, dynamic>(sql,
                                                                    new { },
                                                                    _connectionString.SqlConnectionName);
        }

        public Task<int> DeleteCalculation(int calculationId)
        {
            //"dbo.spCalculations_Delete"
            string sql = "DELETE FROM dbo.Calculations WHERE Id=@Id";
            return _dataAccess.SaveData(sql,
                                        new { Id = calculationId },
                                        _connectionString.SqlConnectionName);
        }

        public async Task<List<CalculationModel>> GetCalculationsByUserId(int userId)
        {
            //"dbo.spCalculations_ByUserId"
            string sql = "SELECT * FROM dbo.Calculations WHERE UserId=@userId ORDER BY Id";
            var recs = await _dataAccess.LoadData<CalculationModel, dynamic>(sql,
                                                                             new { UserId = userId },
                                                                             _connectionString.SqlConnectionName);
            return recs.ToList();
        }

        public async Task<int> CreateCalculation(CalculationModel calculation)
        {
            DynamicParameters p = new DynamicParameters();

            p.Add("UserId", calculation.UserId);
            p.Add("FirstOperand", calculation.FirstOperand);
            p.Add("Operator", calculation.Operator);
            p.Add("SecondOperand", calculation.SecondOperand);
            p.Add("Answer", calculation.Answer);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            //"dbo.spCalculations_Insert"
            string sql = "INSERT INTO dbo.[Calculations](UserId, FirstOperand, Operator, SecondOperand, Answer) VALUES(@UserId, @FirstOperand, @Operator, @SecondOperand, @Answer);";

            await _dataAccess.SaveData(sql, p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }
    }
}