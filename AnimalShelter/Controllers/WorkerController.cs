using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Worker")]
    [ApiController]
    public class WorkerController : ControllerBase
    {
        private readonly IWorkersService _workerServivce;
        public WorkerController(IWorkersService workerService)
        {
            _workerServivce = workerService;
        }

        [HttpPost("Register")]
        public ActionResult RegisterWorker([FromBody] RegisterUserDto dto)
        {
          var status =   _workerServivce.RegisterWorker(dto);
            if (status)
            {
                return Ok();
            }
            return BadRequest("Użytkownik już istnieje");
        }
        [HttpPost("Login")]
        public ActionResult<AuthUserDto> LoginWorker([FromBody] LoginDto dto)
        {
            var user = _workerServivce.LoginUser(dto);
            if (user == null)
            {
                return BadRequest("Logowanie nie powiodło się");
            }
            return Ok(user);
        }
      
    }
}
