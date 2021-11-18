using DataLibrary.Repository;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Core.Entities;
using API.Helpers;
using Core.Models;
using System.Collections.Generic;
using DataLibrary.SortFilter;
using System.Linq;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Calculations : ControllerBase
    {
        private readonly ICalculator _calculator;
        private readonly ICalculationsRepo _calcRepo;
        private readonly ISortAndFilter _sortAndFilter;

        public Calculations(ICalculator calculator, ICalculationsRepo calcRepo, ISortAndFilter sortAndFilter)
        {
            _calculator = calculator;
            _calcRepo = calcRepo;
            _sortAndFilter = sortAndFilter;
        }

        // Get: api/Calculations
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Pagination<CalcWithUserEntity>>> GetCalculations([FromQuery] ClientParams clientParams)
        {
            var calcs = await _calcRepo.GetCalculationsWithUser();
            IEnumerable<CalcWithUserEntity> sortedCalcs = _sortAndFilter.SortAndFilterCalculations(clientParams, calcs);
            int totalCalcs = sortedCalcs.Count();

            return Ok(new Pagination<CalcWithUserEntity>(clientParams.PageIndex, clientParams.PageSize, totalCalcs, sortedCalcs));
        }

        // Get: api/Calculations/5
        [HttpGet("{userId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetCalculationsByUser(int userId)
        {
            var calculations = await _calcRepo.GetCalculationsByUserId(userId);
            return Ok(calculations);
        }

        // Post: api/Calculations
        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> PostCalculation(CalculationEntity calcInput)
        {
            try
            {
                calcInput.Answer = _calculator.Calculate(calcInput.FirstOperand, calcInput.SecondOperand, calcInput.Operator);
                await _calcRepo.CreateAndAddCalculation(calcInput);
                return Ok(calcInput.Answer);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message} | {ex.StackTrace}");
            }
        }
    }
}