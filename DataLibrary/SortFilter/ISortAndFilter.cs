using Core.Entities;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.SortFilter
{
    public interface ISortAndFilter
    {
        public IEnumerable<CalcWithUserEntity> SortAndFilterCalculations(ClientParams cp, List<CalcWithUserEntity> data);
    }
}