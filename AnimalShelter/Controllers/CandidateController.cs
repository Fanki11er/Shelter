using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Candidate")]
    [Authorize]
    public class CandidateController : ControllerBase
    {
        private readonly ICandidatesService _candidatesService;
        public CandidateController(ICandidatesService candidatesService)
        {
            _candidatesService = candidatesService;
        }


        [HttpGet("Options")]
        public ActionResult<AddCandidateFormOptionsListDto> GetOptionsList()
        {
            return _candidatesService.GetOptionsList();
        }

        [HttpPost("AddCandidate")]
        public ActionResult AddCandidate([FromBody] CreateCandidateDto dto)
        {
            var requirementId = _candidatesService.CreateCandidate(dto);
            _candidatesService.CreateAnimalCandidateRequirements(dto.Characteristics, requirementId);


            return Ok();
        }

    }
}
