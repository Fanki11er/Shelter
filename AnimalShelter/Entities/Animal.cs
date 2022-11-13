namespace AnimalShelter.Entities
{
    public class Animal
    {
        public int Id { get; set; }
       
        
        
        public string Name { get; set; } = string.Empty;
        public int Weight { get; set; }
        public int Age { get; set; }
        public string Description { get; set; } = string.Empty ;

        //Relations

        public Adoption? Adoption { get; set; }
        public int Species_Id { get; set; }
        public Species Species { get; set; }
        public int Race_id { get; set; }
        public Race Race { get; set; }
        public int Gender_id { get; set; }
        public Gender Gender { get; set; }
        public int Den_Id { get; set; }
        public Den Den { get; set; }

        public List<AnimalFuture> AnimalFutures { get; set; } = new List<AnimalFuture>();

    }
}
