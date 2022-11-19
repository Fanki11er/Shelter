namespace AnimalShelter.Entities
{
    public class Gender
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;

        public List<Animal> Animals { get; set; } = new List<Animal>();
        public List<CandidateRequirement> CandidateRequirements { get; set; } = new List<CandidateRequirement>();
    }
}
