using Core.Entities;
using Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataLibrary.SortFilter
{
    public class SortAndFilterDbReturn : ISortAndFilter
    {
        public IEnumerable<CalcWithUserEntity> SortAndFilterCalculations(ClientParams cp, List<CalcWithUserEntity> data)
        {
            IEnumerable<CalcWithUserEntity> sortedData = data;

            if (cp.Search != null)
            {
                string searchString = cp.Search.ToString();
                sortedData = sortedData.Where(c =>
                {
                    var cString = c.Answer.ToString();
                    bool answer = cString.Contains(searchString);
                    return answer;
                });
            }

            if (cp.UserFilter != null)
            {
                sortedData = sortedData.Where(c => cp.UserFilter.Contains(c.UserId));
            }

            if (cp.OperatorFilter != null)
            {
                sortedData = sortedData.Where(c => cp.OperatorFilter.Contains(c.Operator));
            }

            if (cp.DateFilterCriteria != null)
            {
                DateTime date = DateTime.Parse(cp.DateFilter);
                DateTime nextDay = date.AddDays(1);

                sortedData = cp.DateFilterCriteria switch
                {
                    "Before Selected Date" => sortedData.Where(c => c.Date < date),
                    "After Selected Date" => sortedData.Where(c => c.Date > date),
                    _ => sortedData.Where(c => c.Date >= date && c.Date < nextDay),
                };
            }

            switch (cp.OrderBy)
            {
                case "Username":
                    if (cp.SortOrder == "DESC")
                    {
                        sortedData = sortedData.OrderByDescending(c => c.Username);
                    }
                    else
                    {
                        sortedData = sortedData.OrderBy(c => c.Username);
                    }
                    break;

                case "FirstOperand":
                    if (cp.SortOrder == "DESC")
                    {
                        sortedData = sortedData.OrderByDescending(c => c.FirstOperand);
                    }
                    else
                    {
                        sortedData = sortedData.OrderBy(c => c.FirstOperand);
                    }
                    break;

                case "SecondOperand":
                    if (cp.SortOrder == "DESC")
                    {
                        sortedData = sortedData.OrderByDescending(c => c.SecondOperand);
                    }
                    else
                    {
                        sortedData = sortedData.OrderBy(c => c.SecondOperand);
                    }
                    break;

                case "Answer":
                    if (cp.SortOrder == "DESC")
                    {
                        sortedData = sortedData.OrderByDescending(c => c.Answer);
                    }
                    else
                    {
                        sortedData = sortedData.OrderBy(c => c.Answer);
                    }
                    break;

                default:
                    if (cp.SortOrder == "DESC")
                    {
                        sortedData = sortedData.OrderByDescending(c => c.Date);
                    }
                    else
                    {
                        sortedData = sortedData.OrderBy(c => c.Date);
                    }
                    break;
            }

            return sortedData;
        }
    }
}