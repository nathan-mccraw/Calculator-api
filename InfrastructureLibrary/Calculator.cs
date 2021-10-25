using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InfrastructureLibrary
{
    public class Calculator : ICalculator
    {
        public decimal FirstOperand { get; set; }
        public decimal SecondOperand { get; set; }
        public string Operation { get; set; }

        public IEnumerable<string> AvailableOperators()
        {
            return new string[] { "+", "/" };
        }

        public decimal Calculate(decimal firstOperand, decimal secondOperand, string operation)
        {
            decimal answer = 0;

            if (operation == "+")
            {
                answer = firstOperand + secondOperand;
            }
            else if (operation == "/")
            {
                answer = (firstOperand / secondOperand);
            }

            return answer;
        }

        public decimal Calculate()
        {
            decimal answer = 0;

            if (Operation == "+")
            {
                answer = FirstOperand + SecondOperand;
            }
            else if (Operation == "/")
            {
                answer = (FirstOperand / SecondOperand);
            }

            return answer;
        }
    }
}