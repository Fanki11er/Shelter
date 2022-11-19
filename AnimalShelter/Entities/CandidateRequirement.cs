namespace AnimalShelter.Entities
{
    public class CandidateRequirement
    {
        public int Id { get; set; }
        public int SpeciesId { get; set; }
        public int GenderId { get; set; }
        public int CandidateId { get; set; }
        public Species Species { get; set; }
        public Gender Gender { get; set; }
        public Candidate Candidate { get; set; }
        public List<AnimalCandidateRequirements> AnimalCandidateRequirements { get; set; }

    }
}
