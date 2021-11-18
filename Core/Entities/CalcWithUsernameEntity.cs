using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Entities
{
    public class CalcWithUsernameEntity
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public int UserId { get; set; }
        public decimal FirstOperand { get; set; }
        public decimal SecondOperand { get; set; }
        public string Operator { get; set; }
        public decimal Answer { get; set; }
        public DateTime Date { get; set; }
    }
}