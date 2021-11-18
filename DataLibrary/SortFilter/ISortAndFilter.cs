using Core.Entities;
using Core.Models;
using System.Collections.Generic;

namespace DataLibrary.SortFilter
{
    public interface ISortAndFilter
    {
        public IEnumerable<CalcWithUsernameEntity> SortAndFilterCalculations(ClientParams cp, List<CalcWithUsernameEntity> data);
    }
}