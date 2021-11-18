using Core.Entities;
using Core.Models;
using Dapper;
using DataLibrary.Db;
using DataLibrary.SortFilter;
using System;
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

        public Task<int> CountAsync(ClientParams cp)
        {
            SpecificationsSQL specs = new SpecificationsSQL
            {
                SqlStatement = "SELECT COUNT(c.Id)"
            };
            BuildSpecifications(cp, specs);

            return _dataAccess.LoadSingleData<int, dynamic>(specs.SqlStatement, specs.Parameters, _connectionString.SqlConnectionName);
        }

        public async Task<int> CreateAndAddCalculation(CalculationEntity calculation)
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
            //p.Add("Id", dbType: DbType.Int32, direction: ParameterDirection.Output);

            int id = await _dataAccess.SaveData(sql, p, _connectionString.SqlConnectionName);

            //int id = p.Get<int>("Id");

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
            string calcSql = @"SELECT Id, UserId, FirstOperand, Operator, SecondOperand, Answer, Date
                           FROM dbo.Calculations
                           ORDER BY Id
                           OFFSET @skip ROWS
                           FETCH NEXT @take ROWS ONLY;";

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

        public async Task<List<CalcWithUserEntity>> GetCalculationsWithUser()
        {
            string sql = @"SELECT c.Id, u.Username, u.Id AS UserId, c.FirstOperand, c.Operator, c.SecondOperand, c.Answer, c.Date
                                 FROM dbo.Calculations c
                                 INNER JOIN dbo.Users u
                                 ON c.UserId = u.Id";

            //Specifications specs = new Specifications
            //{
            //    SqlStatement = @"SELECT c.Id, u.Username, c.FirstOperand, c.Operator, c.SecondOperand, c.Answer, c.Date"
            //};
            //BuildSpecifications(cp, specs);

            //return await _dataAccess.LoadData<CalcWithUserEntity, dynamic>(specs.SqlStatement, specs.Parameters, _connectionString.SqlConnectionName);
            return await _dataAccess.LoadData<CalcWithUserEntity, dynamic>(sql, new { }, _connectionString.SqlConnectionName);
        }

        private SpecificationsSQL BuildSpecifications(ClientParams cp, SpecificationsSQL specs)
        {
            bool isCountStatement = specs.SqlStatement.Contains("COUNT");

            specs.SqlStatement += @" FROM dbo.Calculations c
                                     INNER JOIN dbo.Users u
                                     ON c.UserId = u.Id";

            if (cp.Search != null)
            {
                decimal num = Convert.ToDecimal(cp.Search);
                specs.Parameters.Add("search", num);
                specs.SqlStatement += @" WHERE c.FirstOperand LIKE '%@search%'
                         OR c.SecondOperand LIKE '%@search%'
                         OR c.Answer LIKE '%@search%'";
            }

            if (cp.UserFilter != null)
            {
                specs.Parameters.Add("userId0", cp.UserFilter[0]);
                specs.SqlStatement += " WHERE u.Id IN (@userId0";

                for (int i = 1; i < cp.UserFilter.Count; i++)
                {
                    specs.Parameters.Add($"userId{i}", cp.UserFilter[i]);
                    specs.SqlStatement += $", @userId{i}";
                }

                specs.SqlStatement += ")";
            }

            if (cp.OperatorFilter != null)
            {
                specs.Parameters.Add("op0", cp.OperatorFilter[0]);
                specs.SqlStatement += " WHERE c.Operator IN (@op0";

                for (int i = 1; i < cp.OperatorFilter.Count; i++)
                {
                    specs.Parameters.Add($"op{i}", cp.OperatorFilter[i]);
                    specs.SqlStatement += $", @op{i}";
                }

                specs.SqlStatement += ")";
            }

            if (cp.DateFilterCriteria != null)
            {
                DateTime date = DateTime.Parse(cp.DateFilter);
                DateTime nextDay = date.AddDays(1);
                specs.Parameters.Add("date", date);
                specs.Parameters.Add("nextDay", nextDay);
                specs.SqlStatement += cp.DateFilterCriteria switch
                {
                    "Before Selected Date" => $" WHERE c.Date < @date",
                    "After Selected Date" => $" WHERE c.Date > @date",
                    _ => $" WHERE c.Date >= @date and c.Date < @nextDay"
                };
            }

            if (!isCountStatement)
            {
                specs.SqlStatement += cp.OrderBy switch
                {
                    "Username" => " ORDER BY u.Username",
                    "FirstOperand" => " ORDER BY c.FirstOperand",
                    "SecondOperand" => " ORDER BY c.SecondOperand",
                    "Answer" => " ORDER BY c.Answer",
                    _ => " ORDER BY c.Date",
                };

                specs.SqlStatement += cp.SortOrder switch
                {
                    "DESC" => " DESC",
                    _ => " ASC"
                };

                specs.Parameters.Add("skip", cp.PageIndex * cp.PageSize);
                specs.Parameters.Add("take", cp.PageSize);

                specs.SqlStatement += " OFFSET @skip ROWS FETCH NEXT @take ROWS ONLY;";
            }

            return specs;
        }
    }
}