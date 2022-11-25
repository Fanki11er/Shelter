namespace AnimalShelter.Models
{
    public class AddAnimalFormOptionsListDto
    {
        public List<SelectOptionDto> Species { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Races { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Genders { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Boxes { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Dens { get; set; } = new List<SelectOptionDto>();
        public List<SelectOptionDto> Characteristics { get; set; } = new List<SelectOptionDto>();
    }
}
