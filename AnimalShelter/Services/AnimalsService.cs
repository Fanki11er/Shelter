using AnimalShelter.Entities;
using AnimalShelter.Models;

namespace AnimalShelter.Services
{

    public interface IAnimalsService
    {
        public AnimalsAmountDto GetAnimalsToAdoptionAmout();

    }

    public class AnimalsService: IAnimalsService
    {
        private readonly AnimalShelterDbContext _dbContext;
        public AnimalsService(AnimalShelterDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public AnimalsAmountDto GetAnimalsToAdoptionAmout()
        {
            var catsNumber = _dbContext.Animals.Where(a => a.Species.Id == 1 && a.Adoption == null).Count();
            var dogsNumber = _dbContext.Animals.Where(a => a.Species.Id == 2 && a.Adoption == null).Count();

            return new AnimalsAmountDto()
            {
                DogsAmount = dogsNumber,
                CatsAmount = catsNumber,
            };
        }
    }
}
