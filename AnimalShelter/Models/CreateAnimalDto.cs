namespace AnimalShelter.Models
{
    public class CreateAnimalDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Weight { get; set; }
        public int Age { get; set; }
        public int RaceId { get; set; }
        public int GenderId { get; set; }
        public int DenId { get; set; }
        public int SpeciesId { get; set; }
        public List<int> Characteristics { get; set; }
        //public string Photo { get; set; }
    }
}
