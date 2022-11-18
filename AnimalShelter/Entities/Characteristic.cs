namespace AnimalShelter.Entities
{
    public class Characteristic
    {
        public int Id { get; set; }
        public string Description { get; set; } = string.Empty;
        public List<AnimalFuture> AnimalsFutures { get; set; } = new List<AnimalFuture>();
        public List<AnimalCandidateRequirements> AnimalCandidateRequirements { get; set; }
    }
}
