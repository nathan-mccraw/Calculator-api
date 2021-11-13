using System;

namespace Core.Entities
{
    public class CalculationEntity
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public decimal FirstOperand { get; set; }
        public decimal SecondOperand { get; set; }
        public string Operator { get; set; }
        public decimal Answer { get; set; }
        public DateTime Date { get; set; } = DateTime.Now.ToLocalTime();
    }
}