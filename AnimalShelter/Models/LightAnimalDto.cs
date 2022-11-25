namespace AnimalShelter.Models
{
    public class LightAnimalDto
    {
        public int Id { get; set; }
        public string Description { get; set; }
       public List<int> CharacteristicsIds { get; set; }
        public int GenderId { get; set; }
        public int SpeciesId { get; set; }
    }
}
