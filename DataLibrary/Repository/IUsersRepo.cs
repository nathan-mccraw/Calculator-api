using Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public interface IUsersRepo
    {
        Task<int> CreateUser(UserEntity user);

        Task<List<UserEntity>> GetAllUsers();

        Task<UserEntity> GetUserById(int userId);

        Task<bool> DoesUserNameExist(string username);
    }
}