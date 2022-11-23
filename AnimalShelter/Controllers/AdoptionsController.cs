using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Adoption")]
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

        /*[HttpPost("AddCandidate")]
        public ActionResult AddCandidate([FromBody] CreateCandidateDto dto)
        {
            var requirementId = _candidatesService.CreateCandidate(dto);
            _candidatesService.CreateAnimalCandidateRequirements(dto.Characteristics, requirementId);


            return Ok();
        }*/

    }
}
