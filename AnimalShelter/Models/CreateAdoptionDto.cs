namespace AnimalShelter.Models
{
    public class CreateAdoptionDto
    {
        public List<int> AdoptedAnimals { get; set; }
        public int CandidateId { get; set; }

    }
}
