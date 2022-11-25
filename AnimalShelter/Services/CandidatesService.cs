using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;

namespace AnimalShelter.Services
{

    public interface ICandidatesService
    {
      
        public AddCandidateFormOptionsListDto GetOptionsList();
        public int CreateCandidate(CreateCandidateDto dto);
        public void CreateAnimalCandidateRequirements(List<int> characteristics, int Id);

    }
    public class CandidatesService: ICandidatesService
    {
        private readonly AnimalShelterDbContext _dbContext;
        private readonly IMapper _mapper;


        public CandidatesService(AnimalShelterDbContext dbContext, IMapper mapper)
        {
            _mapper = mapper;
            _dbContext = dbContext;
        }

        public AddCandidateFormOptionsListDto GetOptionsList()
        {
            return new AddCandidateFormOptionsListDto()
            {
                Species = _mapper.Map<List<SelectOptionDto>>(_dbContext.Species),
                Genders = _mapper.Map<List<SelectOptionDto>>(_dbContext.Genders),
                Characteristics = _mapper.Map<List<SelectOptionDto>>(_dbContext.Characteristics)
            };

        }
        public int CreateCandidate(CreateCandidateDto dto)
        {
            var newCandidate = _mapper.Map<Candidate>(dto);
            _dbContext.Candidates.Add(newCandidate);
            _dbContext.SaveChanges();

            return newCandidate.CandidateRequirement.Id;

        }

        public void CreateAnimalCandidateRequirements(List<int> characteristics, int Id)
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
        }
    }
}
