﻿using Dapper;
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
            return _dataAccess.LoadData<CalculationModel, dynamic>("dbo.spCalculations_All",
                                                                    new { },
                                                                    _connectionString.SqlConnectionName);
        }

        public Task<int> DeleteCalculation(int calculationId)
        {
            return _dataAccess.SaveData("dbo.spCalculations_Delete",
                                        new { Id = calculationId },
                                        _connectionString.SqlConnectionName);
        }

        public async Task<List<CalculationModel>> GetCalculationsByUserId(int userId)
        {
            var recs = await _dataAccess.LoadData<CalculationModel, dynamic>("dbo.spCalculations_ByUserId",
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

            await _dataAccess.SaveData("dbo.spCalculations_Insert", p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }
    }
}