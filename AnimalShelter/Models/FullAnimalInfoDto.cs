using AnimalShelter.Entities;

namespace AnimalShelter.Models
{
    public class FullAnimalInfoDto
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Weight { get; set; }
        public int Age { get; set; }
        public string Description { get; set; } = string.Empty;
        public string Species { get; set; }
        public string Race { get; set; }
        public string Gender { get; set; }
        public string Photo { get; set; }
    }
}
