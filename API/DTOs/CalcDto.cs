using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.DTOs
{
    public class CalcDto
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