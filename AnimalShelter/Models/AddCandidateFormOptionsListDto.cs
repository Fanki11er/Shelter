namespace AnimalShelter.Models
{
    public class AddCandidateFormOptionsListDto
    {
        public List<SelectOptionDto> Species { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Genders { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Characteristics { get; set; } = new List<SelectOptionDto>();
    }
}
