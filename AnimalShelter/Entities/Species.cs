namespace AnimalShelter.Entities
{
    public class Species
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;

        public List<Animal> Animals { get; set; } = new List<Animal>();
        public List<Box> Boxes { get; set; } = new List<Box>();
        public List<Race> Races { get; set; }
        public List<CandidateRequirement> CandidateRequirements { get; set; } = new List<CandidateRequirement>();


    }
}
