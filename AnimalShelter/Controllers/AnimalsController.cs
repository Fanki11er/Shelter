using AnimalShelter.Models;
using AnimalShelter.Services;
using Microsoft.AspNetCore.Mvc;

namespace AnimalShelter.Controllers
{
    [Route("Animal")]
    public class AnimalsController : ControllerBase
    {
        private readonly IAnimalsService _animalsService;
        public AnimalsController(IAnimalsService animalsService)
        {
            _animalsService = animalsService;   
        }

        [HttpGet("Amount")]

        public ActionResult<AnimalsAmountDto> GetAnimalsToAdoptionAmout()
        {
            var animalsAmount = _animalsService.GetAnimalsToAdoptionAmout();
            return Ok(animalsAmount);
        }



    }
}
