using Dapper;
using System.Linq;

namespace DataLibrary.SortFilter
{
    public class SpecificationsModel
    {
        public DynamicParameters Parameters { get; set; } = new DynamicParameters();
        public IQueryable SqlStatement { get; set; }
    }
}