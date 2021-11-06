using InfrastructureLibrary;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

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
        public ActionResult<IEnumerable<string>> GetAvailableOperations()
        {
            return Ok(_calculator.AvailableOperators());
        }
    }
}