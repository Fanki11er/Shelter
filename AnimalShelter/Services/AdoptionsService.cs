using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;
using Microsoft.EntityFrameworkCore;

namespace AnimalShelter.Services
{
    
        public interface IAdoptionsService
        {

            public AddAdoptionFormOptionsListDto GetOptionsList();
        public bool CreateAdoption(CreateAdoptionDto dto);
            

    }
        public class AdoptionsService : IAdoptionsService
        {
            private readonly AnimalShelterDbContext _dbContext;
            private readonly IMapper _mapper;


            public AdoptionsService(AnimalShelterDbContext dbContext, IMapper mapper)
            {
                _mapper = mapper;
                _dbContext = dbContext;
            }

        public AddAdoptionFormOptionsListDto GetOptionsList()
        {
            return new AddAdoptionFormOptionsListDto()
            {
                Candidates = _dbContext.Candidates.Select(c => new LightCandidateDto()
                {
                    Id = c.Id,
                    Name = c.Name,
                    CandidateRequirements = new LightCandidateRequirements()
                    {
                        GenderId = c.CandidateRequirement.GenderId,
                        SpeciesId = c.CandidateRequirement.SpeciesId,
                        CharacteristicsIds = c.CandidateRequirement.AnimalCandidateRequirements.Select(r => r.CharacteristicId).ToList(),
                    },


                }).ToList(),
                Animals = _dbContext.Animals
                .Include(i => i.Gender)
                .Include(i => i.Species)
                .Include(i => i.Den)
                .Include(i => i.Adoption)
                .Where(a => a.Adoption == null)
                .Select(a => new LightAnimalDto()
                {
                    Id=a.Id,
                    Description = $"{a.Name} {a.Race.Value} Wiek: {a.Age} {a.Gender.Value} Box: {a.Den.Box_Id} Legowisko: {a.Den_Id}",
                    GenderId = a.Gender_id,
                    SpeciesId = a.Species_Id,
                    CharacteristicsIds = a.AnimalFutures.Select(af => af.Characeristic_Id).ToList(),
                }).ToList(),

            };
           
          
        }
        public bool CreateAdoption(CreateAdoptionDto dto)
        {
            
            var adoptions = dto.AdoptedAnimals.Select(aa => new Adoption()
            {
                Candidate_Id = dto.CandidateId,
                Animal_Id = aa,
                Date = DateTime.Now,
            }).ToList();

            _dbContext.Adoptions.AddRange(adoptions);
            adoptions.ForEach(ad =>
            {
                var animal = _dbContext.Animals.FirstOrDefault(an => an.Id == ad.Animal_Id);

            if (animal != null)
                {
                    animal.Den_Id = null;
                    
                }
               
            });

            _dbContext.SaveChanges();
            return adoptions.Count == dto.AdoptedAnimals.Count;
           

        }

    }
}
