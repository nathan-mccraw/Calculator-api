using System;

namespace Core.Models
{
    public class CalculationDto
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public decimal FirstOperand { get; set; }
        public decimal SecondOperand { get; set; }
        public string Operator { get; set; }
        public decimal Answer { get; set; }
        public DateTime Date { get; set; }
    }
}