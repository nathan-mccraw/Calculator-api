using System.Collections.Generic;

namespace Core.Models
{
    public class ClientParams
    {
        private const int MaxPageSize = 50;
        public int _pageSize = 10;
        public int PageSize { get => _pageSize; set => _pageSize = value > MaxPageSize ? MaxPageSize : value; }
        public int PageIndex { get; set; } = 0;
        public string OrderBy { get; set; }
        public string Search { get; set; }
        public string SortOrder { get; set; }
        public List<int> UserFilter { get; set; }
        public List<string> OperatorFilter { get; set; }
        public string DateFilter { get; set; }
        public string DateFilterCriteria { get; set; }
    }
}