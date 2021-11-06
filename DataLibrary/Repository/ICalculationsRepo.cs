using InfrastructureLibrary.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public interface ICalculationsRepo
    {
        Task<int> DeleteCalculation(int calculationId);

        Task<List<CalculationModel>> GetCalculations();

        Task<List<CalculationModel>> GetCalculationsByUserId(int userId);

        Task<int> CreateCalculation(CalculationModel calculation);
    }
}