namespace AnimalShelter.Entities
{
    public class Adoption
    {
        public int Id { get; set; }
        public int Animal_Id { get; set; }
        public int Candidate_Id { get; set; }

        public DateTime Date { get; set; }
    }

}

