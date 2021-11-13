using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Models
{
    public class ClientParams
    {
        private const int MaxPageSize = 50;
        public int _pageSize = 10;
        public int PageSize { get => _pageSize; set => _pageSize = value > MaxPageSize ? MaxPageSize : value; }
        public int PageIndex { get; set; } = 1;
        public string Sort { get; set; } = "Date";
        public bool IsOrderByDescending { get; set; } = false;
        public decimal Search { get; set; } = decimal.MinValue;
        public string SearchParams { get; set; } = ">";
        public int? UserId { get; set; }

    }
}
