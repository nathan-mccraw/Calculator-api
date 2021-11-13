using DataLibrary.Repository;
using Core.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Users : ControllerBase
    {
        private readonly IUsersRepo _userRepo;

        public Users(IUsersRepo usersRepo)
        {
            _userRepo = usersRepo;
        }

        // GET: api/<Users>
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetAllUsers()
        {
            return Ok(await _userRepo.GetAllUsers());
        }

        // GET: api/<Users>
        [HttpGet("{userId}")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<IActionResult> GetUser(int userId)
        {
            return Ok(await _userRepo.GetUserById(userId));
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> CreateUser(UserEntity user)
        {
            if (await _userRepo.DoesUserNameExist(user.Username))
            {
                return BadRequest("Username already Exists. Please choose another username.");
            }
            else
            {
                try
                {
                    return Ok(await _userRepo.CreateUser(user));
                }
                catch (Exception ex)
                {
                    return BadRequest(ex.Message);
                }
            }
        }
    }
}