namespace AnimalShelter.Entities
{
    public class Race
    {
        public int Id { get; set; }
        public string Value { get; set; } = string.Empty;
        public int SpeciesId { get; set; }
        public Species Species { get; set; }

        public List<Animal> Animals { get; set; } = new List<Animal>();
    }
}
