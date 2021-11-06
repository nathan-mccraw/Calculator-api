using DataLibrary.Repository;
using InfrastructureLibrary;
using InfrastructureLibrary.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

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
        public async Task<IActionResult> PostCalculation(CalculatorExpression input, int userId)
        {
            try
            {
                var answer = _calculator.Calculate(input.FirstOperand, input.SecondOperand, input.Operation);
                CalculationModel calculation = new()
                {
                    UserId = userId,
                    FirstOperand = input.FirstOperand,
                    SecondOperand = input.SecondOperand,
                    Operator = input.Operation,
                    Answer = answer
                };
                await _calcRepo.CreateCalculation(calculation);
                return Ok(answer);
            }
            catch (Exception ex)
            {
                return BadRequest($"{ex.Message} | {ex.StackTrace}");
            }
        }
    }
}