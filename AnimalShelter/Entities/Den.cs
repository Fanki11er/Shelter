namespace AnimalShelter.Entities
{
    public class Den
    {
        public int Id { get; set; }
        public int Box_Id { get; set; }
        public bool IsOccpied { get; set; } = false;
    }
}
