using InfrastructureLibrary;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Calculations : ControllerBase
    {
        private ICalculator _calculator;

        public Calculations(ICalculator calculator)
        {
            _calculator = calculator;
        }

        // GET: api/<Calculations>
        [HttpPost]
        public decimal PostCalculation(Calculator input)
        {
            _calculator = input;
            return _calculator.Calculate();
        }
    }
}