using Dapper;
using DataLibrary.Db;
using InfrastructureLibrary.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public class UsersRepo : IUsersRepo
    {
        private readonly IDataAccess _dataAccess;
        private readonly ConnectionStringData _connectionString;

        public UsersRepo(IDataAccess dataAccess, ConnectionStringData connectionString)
        {
            _dataAccess = dataAccess;
            _connectionString = connectionString;
        }

        public async Task<int> CreateUser(UserModel user)
        {
            DynamicParameters p = new DynamicParameters();
            p.Add("First_Name", user.FirstName);
            p.Add("Last_Name", user.LastName);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            await _dataAccess.SaveData("dbo.spaUsers_Insert", p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }
    }
}