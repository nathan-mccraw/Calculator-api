using InfrastructureLibrary;
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
    public class Operations : ControllerBase
    {
        private readonly ICalculator _calculator;

        public Operations(ICalculator calculator)
        {
            _calculator = calculator;
        }

        // GET: api/<Operations>
        [HttpGet]
        public IEnumerable<string> GetAvailableOperations()
        {
            return _calculator.AvailableOperators();
        }
    }
}