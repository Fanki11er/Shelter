namespace AnimalShelter.Entities
{
    public class Den
    {
        public int Id { get; set; }

        //Relations
        public Animal? Animal { get; set; }

        public int Box_Id { get; set; }

        public Box Box { get; set; }

    }
}
