using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CalculationDTO
    {
        public CalculationDTO(CalculationEntity calc)
        {
            Id = calc.Id;
            FirstOperand = calc.FirstOperand;
            SecondOperand = calc.SecondOperand;
            Operator = calc.Operator;
            Answer = calc.Answer;
            Date = calc.Date;
        }

        public int Id { get; set; }
        public UserEntity User { get; set; }
        public decimal FirstOperand { get; set; }
        public decimal SecondOperand { get; set; }
        public string Operator { get; set; }
        public decimal Answer { get; set; }
        public DateTime Date { get; set; }
    }
}