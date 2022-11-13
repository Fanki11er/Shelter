namespace AnimalShelter.Entities
{
    public class Animal
    {
        public int Id { get; set; }
        public int Species_Id { get; set; }
        public int Race_id { get; set; }
        public int Gender_id { get; set; }
        public int Den_Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Weight { get; set; }
        public int Age { get; set; }
        public string Description { get; set; } = string.Empty ;

    }
}
