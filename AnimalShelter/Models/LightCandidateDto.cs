namespace AnimalShelter.Models
{
    public class LightCandidateDto
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public LightCandidateRequirements CandidateRequirements { get; set; }
    }
}
