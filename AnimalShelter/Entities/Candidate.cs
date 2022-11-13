namespace AnimalShelter.Entities
{
    public class Candidate
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        //Relations
        public int Address_Id { get; set; }
        public Address Address { get; set; }

        public List<Adoption> Adoprions { get; set; } = new List<Adoption>();
    }
}
