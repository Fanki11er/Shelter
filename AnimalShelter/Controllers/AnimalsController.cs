using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Animal")]
    [Authorize]
    public class AnimalsController : ControllerBase
    {
        private readonly IAnimalsService _animalsService;
        public AnimalsController(IAnimalsService animalsService)
        {
            _animalsService = animalsService;   
        }

        [HttpGet("Amount")]
        [AllowAnonymous]
        public ActionResult<AnimalsAmountDto> GetAnimalsToAdoptionAmout()
        {
            var animalsAmount = _animalsService.GetAnimalsToAdoptionAmout();
            return Ok(animalsAmount);
        }

        [HttpGet("List/{species}")]
        [AllowAnonymous]
        public ActionResult<IEnumerable<FullAnimalInfoDto>> GetAnimalsToAdoptionAmout([FromRoute] string species)
        {
            var animalsList = _animalsService.GetAnimalsList(species);
            return Ok(animalsList);
        }

        [HttpGet("Options")]
        public ActionResult<AddAnimalFormOptionsListDto> GetOptionsList()
        {
            return _animalsService.GetOptionsList();
        }

        [HttpPost("AddAnimal")]
        public ActionResult AddAnimal([FromBody] CreateAnimalDto dto)
        {
            var index = _animalsService.CreateAnimal(dto);
            _animalsService.CreateAnimalFutures(dto.Characteristics, index);


            return Ok();
        }

        [HttpGet("Statistics")]
        public ActionResult<List<BoxesStatisticsDto>> GetStatisticsList()
        {
            return _animalsService.GetStatisticsList();
        }

    }
}


