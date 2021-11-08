using DataLibrary.Repository;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
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
        public async Task<IActionResult> GetAllCalculations()
        {
            return Ok(await _calcRepo.GetCalculations());
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
        public async Task<IActionResult> PostCalculation(CalculationModel input)
        {
            try
            {
                input.Answer = _calculator.Calculate(input.FirstOperand, input.SecondOperand, input.Operator);
                await _calcRepo.CreateCalculation(input);
                return Ok(input.Answer);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message} | {ex.StackTrace}");
            }
        }
    }
}