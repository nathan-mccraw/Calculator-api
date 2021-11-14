using DataLibrary.Repository;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Core.Entities;
using API.Helpers;
using Core.Models;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Calculations : ControllerBase
    {
        private readonly ICalculator _calculator;
        private readonly ICalculationsRepo _calcRepo;

        public Calculations(ICalculator calculator, ICalculationsRepo calcRepo)
        {
            _calculator = calculator;
            _calcRepo = calcRepo;
        }

        // Get: api/Calculations
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Pagination<CalculationEntity>>> GetCalculations([FromQuery] ClientParams clientParams)
        {
            var totalCalcs = await _calcRepo.CountAsync();
            var data = await _calcRepo.GetCalculations(clientParams);
            return Ok(new Pagination<CalculationEntity>(clientParams.PageIndex, clientParams.PageSize, totalCalcs, data));
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

        //public async Task<IActionResult> GetAllCalculations()
        //{
        //    return Ok(await _calcRepo.GetCalculations());
        //}
    }
}