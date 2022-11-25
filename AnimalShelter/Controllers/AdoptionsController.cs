using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Adoption")]
    [Authorize]
    public class AdoptionsController : ControllerBase
    {
        private readonly IAdoptionsService _adoptionsService;
        public AdoptionsController(IAdoptionsService adoptionsService)
        {
            _adoptionsService = adoptionsService;
        }


        [HttpGet("Options")]
        public ActionResult<AddAdoptionFormOptionsListDto> GetOptionsList()
        {
            return _adoptionsService.GetOptionsList();
        }

        [HttpPost("Adopt")]
        public ActionResult AddCandidate([FromBody] CreateAdoptionDto dto)
        {
          var success =  _adoptionsService.CreateAdoption(dto);


            if (success)
            {
                return Ok();
            }
            return BadRequest();
        }

        [HttpGet("History")]
        public ActionResult<List<AdoptionsHistoryDto>> GetHistory()
        {
            return _adoptionsService.GetHistory();
        }

    }
}
