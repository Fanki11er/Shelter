namespace AnimalShelter.Entities
{
    public class Adoption
    {
        public int Id { get; set; }
       

        public DateTime Date { get; set; }

        // Relations

        public int Animal_Id { get; set; }
        public int Candidate_Id { get; set; }
        public Animal Animal { get; set; }
        public Candidate Candidate { get; set; }

    }

}

