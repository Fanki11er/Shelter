using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;

namespace AnimalShelter.Services
{
    
        public interface IAdoptionsService
        {

            public AddAdoptionFormOptionsListDto GetOptionsList();
            //public int CreateCandidate(CreateCandidateDto dto);
            //public void CreateAnimalCandidateRequirements(List<int> characteristics, int Id);

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
                        CharacterisicsIds = c.CandidateRequirement.AnimalCandidateRequirements.Select(r => r.CharacteristicId).ToList(),
                    },


                }).ToList()

            };
            /*public int CreateCandidate(CreateCandidateDto dto)
            {
                var newCandidate = _mapper.Map<Candidate>(dto);
                _dbContext.Candidates.Add(newCandidate);
                _dbContext.SaveChanges();

                return newCandidate.CandidateRequirement.Id;

            }
            */
            /*public void CreateAnimalCandidateRequirements(List<int> characteristics, int Id)
            {
                characteristics.ForEach(characteristic =>
                {
                    _dbContext.AnimalCandidateRequirements.Add(new AnimalCandidateRequirements()
                    {
                        CandidateRequirementId = Id,
                        CharacteristicId = characteristic
                    });
                });

                _dbContext.SaveChanges();
            }*/
        }

    }
}
