using System.Collections.Generic;

namespace InfrastructureLibrary
{
    public interface ICalculator
    {
        IEnumerable<string> AvailableOperators();

        decimal Calculate(decimal firstOperand, decimal secondOperand, string operation);

        decimal Calculate();
    }
}