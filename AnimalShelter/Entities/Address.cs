namespace AnimalShelter.Entities
{
    public class Address
    {
        public int Id { get; set; }
        public string City { get; set; } = string.Empty;
        public string Street { get; set; } = string.Empty ;
        public string Phone { get; set; } = string .Empty ;
        public string PostalCode { get; set; } = string.Empty;

        // Relations
        public Candidate Candidate { get; set; }
        public int CandidateId { get; set; }
    }
}
