namespace AnimalShelter.Models
{
    public class CreateCandidateDto
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string Street { get; set; }
        public string PostalCode { get; set; }
        public string Phone { get; set; }
        public int SpeciesId { get; set; }
        public int GenderId { get; set; }
        public List<int> Characteristics { get; set; }

    }
}
