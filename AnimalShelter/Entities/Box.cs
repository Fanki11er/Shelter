namespace AnimalShelter.Entities
{
    public class Box
    {
        public int Id { get; set; }

        //Relations
        public int Species_id { get; set; }

        public Species Species { get; set; }

        public List<Den> Dens { get; set; } = new List<Den>();
    }
}
