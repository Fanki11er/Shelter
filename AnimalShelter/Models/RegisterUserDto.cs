using System.ComponentModel.DataAnnotations;

namespace AnimalShelter.Models
{
    public class RegisterUserDto
    {
        [Required]
        public string Email { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        [MinLength(6)]
        public string UserPassword { get; set; } 
    }
}
