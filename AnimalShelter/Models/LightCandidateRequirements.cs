namespace AnimalShelter.Models
{
    public class LightCandidateRequirements
    {
        public int GenderId { get; set; }
        public int SpeciesId { get; set; }

        public List<int> CharacterisicsIds { get; set; }
    }
}
