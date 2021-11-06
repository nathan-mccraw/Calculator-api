using InfrastructureLibrary.Models;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public interface IUsersRepo
    {
        Task<int> CreateUser(UserModel user);
    }
}