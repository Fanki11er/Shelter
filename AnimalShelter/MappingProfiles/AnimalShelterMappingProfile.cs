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

            CreateMap<Species, SelectOptionDto>();
            CreateMap<Gender, SelectOptionDto>();
            CreateMap<Race, SelectOptionDto>()
                .ForMember(so => so.AdditionalValue, m => m.MapFrom(r => r.SpeciesId));

            CreateMap<Box, SelectOptionDto>()
                .ForMember(so => so.AdditionalValue, m => m.MapFrom(b => b.Species_id))
            .ForMember(so => so.Value, m => m.MapFrom(b => b.Species_id));
            CreateMap<Den, SelectOptionDto>()
               .ForMember(so => so.AdditionalValue, m => m.MapFrom(b => b.Box_Id))
           .ForMember(so => so.Value, m => m.MapFrom(b => b.Id));

        }
    }
}
