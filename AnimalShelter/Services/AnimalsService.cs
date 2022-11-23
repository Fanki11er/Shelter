using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AnimalShelter.Services
{

    public interface IAnimalsService
    {
        public AnimalsAmountDto GetAnimalsToAdoptionAmout();
        public IEnumerable<FullAnimalInfoDto> GetAnimalsList(string species);
        public AddAnimalFormOptionsListDto GetOptionsList();
        public int CreateAnimal(CreateAnimalDto dto);
        public void CreateAnimalFutures(List<int> characteristics, int Id);

    }

    public class AnimalsService: IAnimalsService
    {
        private readonly AnimalShelterDbContext _dbContext;
        private readonly IMapper _mapper;
        public AnimalsService(AnimalShelterDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext;
            _mapper = mapper;
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

        public  IEnumerable<FullAnimalInfoDto> GetAnimalsList(string species)
        {
            var animalsList = _dbContext.Animals
                .Include(r => r.Race)
                .Include(s => s.Species)
                .Include(g => g.Gender)
                .Where(a => a.Species.Value == species && a.Adoption == null);
           
            return _mapper.Map<List<FullAnimalInfoDto>>(animalsList);
           
        }

        public AddAnimalFormOptionsListDto GetOptionsList()
        {

            var freeDens = _dbContext.Dens.Include(a => a.Animal).Where(d => d.Animal == null);

            return new AddAnimalFormOptionsListDto()
            {
                Species = _mapper.Map<List<SelectOptionDto>>(_dbContext.Species),
                Races = _mapper.Map<List<SelectOptionDto>>(_dbContext.Races),
                Genders = _mapper.Map<List<SelectOptionDto>>(_dbContext.Genders),
                Boxes = _mapper.Map<List<SelectOptionDto>>(_dbContext.Boxes),
                Dens = _mapper.Map<List<SelectOptionDto>>(freeDens),
                Characteristics = _mapper.Map<List<SelectOptionDto>>(_dbContext.Characteristics)
            };
        }

        public int CreateAnimal(CreateAnimalDto dto)
        {
            var newAnimal = _mapper.Map<Animal>(dto);
            _dbContext.Animals.Add(newAnimal);
            _dbContext.SaveChanges();

            return newAnimal.Id;
           

        }

        public void CreateAnimalFutures(List<int> characteristics, int Id)
        {
           characteristics.ForEach(characteristic =>
            {
                _dbContext.AnimalFutures.Add(new AnimalFuture()
                {
                    Animal_Id = Id,
                    Characeristic_Id = characteristic
                });
            });

            _dbContext.SaveChanges();
        }
    }
}
