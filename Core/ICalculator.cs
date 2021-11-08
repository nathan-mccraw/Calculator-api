using System.Collections.Generic;

namespace Core
{
    public interface ICalculator
    {
        IEnumerable<string> AvailableOperators();

        decimal Calculate(decimal firstOperand, decimal secondOperand, string operation);
    }
}