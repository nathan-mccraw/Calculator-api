using Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public interface IUsersRepo
    {
        Task<int> CreateUser(UserModel user);

        Task<List<UserModel>> GetAllUsers();

        Task<UserModel> GetUserById(int userId);

        Task<bool> DoesUserNameExist(string username);
    }
}