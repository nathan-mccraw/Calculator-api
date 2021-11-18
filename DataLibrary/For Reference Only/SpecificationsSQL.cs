using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.SortFilter
{
    public class SpecificationsSQL
    {
        public DynamicParameters Parameters { get; set; } = new DynamicParameters();
        public string SqlStatement { get; set; }
    }
}