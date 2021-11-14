using Core.Entities;
using Dapper;
using DataLibrary.Db;
using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public class UsersRepoQuery : IUsersRepo
    {
        private readonly IDataAccess _dataAccess;
        private readonly ConnectionStringData _connectionString;

        public UsersRepoQuery(IDataAccess dataAccess, ConnectionStringData connectionString)
        {
            _dataAccess = dataAccess;
            _connectionString = connectionString;
        }

        public async Task<int> CreateUser(UserEntity user)
        {
            string sql = @"INSERT INTO dbo.Users Id, Username, Firstname, Lastname
                           VALUES(@Id, @Username, @Firstname, @Lastname);";

            DynamicParameters p = new DynamicParameters();
            p.Add("Username", user.Username);
            p.Add("FirstName", user.FirstName);
            p.Add("LastName", user.LastName);
            p.Add("Id", DbType.Int32, direction: ParameterDirection.Output);

            await _dataAccess.SaveData(sql, p, _connectionString.SqlConnectionName);

            return p.Get<int>("Id");
        }

        public async Task<bool> DoesUserNameExist(string username)
        {
            string sql = @"SELECT COUNT(Id)
                           FROM dbo.Users
                           WHERE Username = @username;";

            var count = await _dataAccess.LoadSingleData<int, dynamic>(sql, new { username }, _connectionString.SqlConnectionName);

            if (count > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public async Task<List<UserEntity>> GetAllUsers()
        {
            string sql = @"SELECT Id, Username, FirstName, LastName FROM dbo.Users";

            return await _dataAccess.LoadData<UserEntity, dynamic>(sql, new { }, _connectionString.SqlConnectionName);
        }

        public async Task<UserEntity> GetUserById(int userId)
        {
            string sql = @"SELECT Id, Username, FirstName, LastName
                           FROM dbo.Users
                           WHERE Id = @userId";

            return await _dataAccess.LoadSingleData<UserEntity, dynamic>(sql, new { userId = userId }, _connectionString.SqlConnectionName);
        }
    }
}