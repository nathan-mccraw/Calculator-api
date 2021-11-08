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
            p.Add("Username", user.Username);
            p.Add("FirstName", user.FirstName);
            p.Add("LastName", user.LastName);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            await _dataAccess.SaveData("dbo.spUsers_Insert", p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }

        public async Task<bool> DoesUserNameExist(string username)
        {
            var existingUsers = await _dataAccess.LoadData<UserModel, dynamic>("dbo.spUsers_ByUserName",
                                                            new { Username = username },
                                                            _connectionString.SqlConnectionName);

            if (existingUsers.Count == 0)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public async Task<List<UserModel>> GetAllUsers()
        {
            return await _dataAccess.LoadData<UserModel, dynamic>("dbo.spUsers_All",
                                                                  new { },
                                                                  _connectionString.SqlConnectionName);
        }

        public async Task<UserModel> GetUserById(int userId)
        {
            return await _dataAccess.LoadSingleData<UserModel, dynamic>("dbo.spUsers_ById",
                                                                  new { UserId = userId },
                                                                  _connectionString.SqlConnectionName);
        }
    }
}