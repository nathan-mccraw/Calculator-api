using DataLibrary.Repository;
using Core;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using Core.Entities;
using API.DTOs;
using Core.Models;
using System.Collections.Generic;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Calculations : ControllerBase
    {
        private readonly ICalculator _calculator;
        private readonly ICalculationsRepo _calcRepo;
        private readonly IUsersRepo _usersRepo;

        public Calculations(ICalculator calculator, ICalculationsRepo calcRepo, IUsersRepo usersRepo)
        {
            _calculator = calculator;
            _calcRepo = calcRepo;
            _usersRepo = usersRepo;
        }

        // Get: api/Calculations
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<Pagination<CalculationDTO>>> GetCalculations([FromQuery] ClientParams clientParams)
        {
            var calcsWithNoUsers = await _calcRepo.GetCalculations(clientParams);
            var calcData = new List<CalculationDTO>();
            foreach (CalculationEntity calc in calcsWithNoUsers)
            {
                var calcDTO = new CalculationDTO(calc);
                calcDTO.User = await _usersRepo.GetUserById(calc.UserId);
                calcData.Add(calcDTO);
            }

            var totalCalcs = await _calcRepo.CountAsync();
            return Ok(new Pagination<CalculationDTO>(clientParams.PageIndex, clientParams.PageSize, totalCalcs, calcData));
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