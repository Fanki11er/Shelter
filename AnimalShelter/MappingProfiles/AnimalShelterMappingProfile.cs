using AnimalShelter.Entities;
using AnimalShelter.Models;
using AutoMapper;

namespace AnimalShelter.MappingProfiles
{
    public class AnimalShelterMappingProfile: Profile
    {

        public AnimalShelterMappingProfile()
        {
            CreateMap<Animal, FullAnimalInfoDto>()
                .ForMember(fa => fa.Race, m => m.MapFrom( m=> m.Race.Value))
                .ForMember(fa => fa.Gender, m => m.MapFrom(y => y.Gender.Value))
                .ForMember(fa => fa.Species, m => m.MapFrom(z => z.Species.Value));
        }
    }
}
