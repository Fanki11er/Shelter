namespace AnimalShelter.Entities
{
    public class AnimalFuture
    {
        public int Id { get; set; }

        // Relations
        public int Characeristic_Id { get; set; }
        public Characteristic Characteristic { get; set; }

        public int Animal_Id { get; set; }

        public Animal Animal { get; set; }
    }
}
