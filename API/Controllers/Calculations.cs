using InfrastructureLibrary;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Calculations : ControllerBase
    {
        private readonly ICalculator _calculator;

        public Calculations(ICalculator calculator)
        {
            _calculator = calculator;
        }

        // Post: api/<Calculations>
        [HttpPost]
        [ValidateModel]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult PostCalculation(CalculatorExpression input)
        {
            try
            {
                return Ok(_calculator.Calculate(input.FirstOperand, input.SecondOperand, input.Operation));
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}