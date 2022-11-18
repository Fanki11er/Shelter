namespace AnimalShelter.Entities
{
    public class AnimalCandidateRequirements
    {
        public int Id { get; set; }
        public int CandidateRequirementId { get; set; }
        public int CharacteristicId { get; set; }
        public CandidateRequirement CandidateRequirement { get; set; }
        public Characteristic Characteristic { get; set; }


    }
}
