using Dapper;
using Microsoft.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace DataLibrary.Db
{
    public class SqlDbUsingQuery : IDataAccess
    {
        private readonly IConfiguration _config;

        public SqlDbUsingQuery(IConfiguration config)
        {
            _config = config;
        }

        public async Task<List<T>> LoadData<T, U>(string sqlStatement, U parameters, string connectionStringName)
        {
            var connectionString = _config.GetConnectionString(connectionStringName);

            using (IDbConnection connection = new SqlConnection(connectionString))
            {
                var rows = await connection.QueryAsync<T>(sqlStatement, parameters);
                var data = rows.ToList();

                return data;
            }
        }

        public async Task<T> LoadSingleData<T, U>(string sqlStatement, U parameters, string connectionStringName)
        {
            var connectionString = _config.GetConnectionString(connectionStringName);

            using (IDbConnection connection = new SqlConnection(connectionString))
            {
                var row = await connection.QueryAsync<T>(sqlStatement, parameters);
                var data = row.FirstOrDefault();

                return data;
            }
        }

        public async Task<int> SaveData<T>(string sqlStatement, T parameters, string connectionStringName)
        {
            string connectionString = _config.GetConnectionString(connectionStringName);

            using (IDbConnection connection = new SqlConnection(connectionString))
            {
                return await connection.ExecuteAsync(sqlStatement, parameters);
            }
        }
    }
}