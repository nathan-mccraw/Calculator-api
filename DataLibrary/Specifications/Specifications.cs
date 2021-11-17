using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.Repository
{
    public class Specifications
    {
        public DynamicParameters Parameters { get; set; } = new DynamicParameters();
        public string SqlStatement { get; set; }
    }
}