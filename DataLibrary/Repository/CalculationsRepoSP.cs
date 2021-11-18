using Dapper;
using DataLibrary.Db;
using Core.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Core.Models;

namespace DataLibrary.Repository
{
    public class CalculationsRepoSP : ICalculationsRepo
    {
        private readonly IDataAccess _dataAccess;
        private readonly ConnectionStringData _connectionString;

        public CalculationsRepoSP(IDataAccess dataAccess, ConnectionStringData connectionString)
        {
            _dataAccess = dataAccess;
            _connectionString = connectionString;
        }

        public Task<List<CalculationEntity>> GetCalculations()
        {
            return _dataAccess.LoadData<CalculationEntity, dynamic>("dbo.spCalculations_All",
                                                                    new { },
                                                                    _connectionString.SqlConnectionName);
        }

        public Task<int> DeleteCalculation(int calculationId)
        {
            return _dataAccess.SaveData("dbo.spCalculations_Delete",
                                        new { Id = calculationId },
                                        _connectionString.SqlConnectionName);
        }

        public async Task<List<CalculationEntity>> GetCalculationsByUserId(int userId)
        {
            var recs = await _dataAccess.LoadData<CalculationEntity, dynamic>("dbo.spCalculations_ByUserId",
                                                                             new { UserId = userId },
                                                                             _connectionString.SqlConnectionName);
            return recs.ToList();
        }

        public async Task<int> CreateAndAddCalculation(CalculationEntity calculation)
        {
            DynamicParameters p = new DynamicParameters();

            p.Add("UserId", calculation.UserId);
            p.Add("FirstOperand", calculation.FirstOperand);
            p.Add("Operator", calculation.Operator);
            p.Add("SecondOperand", calculation.SecondOperand);
            p.Add("Answer", calculation.Answer);
            p.Add("Date", calculation.Date);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            await _dataAccess.SaveData("dbo.spCalculations_Insert", p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }

        public Task<int> CountAsync()
        {
            throw new NotImplementedException();
        }

        public Task<List<CalcWithUserEntity>> GetCalculationsWithUser()
        {
            throw new NotImplementedException();
        }

        public Task<int> CountAsync(ClientParams clientParams)
        {
            throw new NotImplementedException();
        }
    }
}