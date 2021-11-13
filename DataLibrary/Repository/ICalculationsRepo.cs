using Core.Entities;
using Core.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public interface ICalculationsRepo
    {
        Task<int> DeleteCalculation(int calculationId);

        Task<List<CalculationEntity>> GetCalculations();

        Task<List<CalculationEntity>> GetCalculationsByUserId(int userId);

        Task<int> CreateAndAddCalculation(CalculationEntity calculation);
        //Task<int> CountAsync(ClientParams clientParams);
    }
}