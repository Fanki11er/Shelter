namespace AnimalShelter.Models
{
    public class AddAdoptionFormOptionsListDto
    {
        public List<LightCandidateDto> Candidates { get; set; }
        public List<LightAnimalDto> Animals { get; set; }
    }
}
