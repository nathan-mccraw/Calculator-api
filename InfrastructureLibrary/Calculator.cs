using System;
using System.Collections.Generic;

namespace InfrastructureLibrary
{
    public class Calculator : ICalculator
    {
        public IEnumerable<string> AvailableOperators()
        {
            return new string[] { "+", "/"};
        }

        public decimal Calculate(decimal firstOperand, decimal secondOperand, string operation)
        {
            decimal answer = operation switch
            {
                "+" => firstOperand + secondOperand,
                "/" => firstOperand / secondOperand,
                _ => throw new Exception("Operator does not exist"),
            };

            return Math.Round(answer, 6) / 1.0000000000m;
        }
    }
}