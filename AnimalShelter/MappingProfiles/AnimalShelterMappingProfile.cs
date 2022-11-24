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

            CreateMap<Characteristic, SelectOptionDto>()
                .ForMember(so => so.Value, m => m.MapFrom(ch => ch.Description));
            CreateMap<CreateAnimalDto, Animal>()
                .ForMember(sp => sp.Species_Id, m => m.MapFrom(s => s.SpeciesId))
                .ForMember(ge => ge.Gender_id, m => m.MapFrom(g => g.GenderId))
                .ForMember(ra => ra.Race_id, m => m.MapFrom(r => r.RaceId))
                .ForMember(de => de.Den_Id, m => m.MapFrom(d => d.DenId));

            CreateMap<CreateCandidateDto, Candidate>()
                .ForMember(c => c.Address, m => m.MapFrom(dto => new Address()
                {
                    City = dto.City,
                    Street = dto.Street,
                    PostalCode = dto.PostalCode,
                    Phone = dto.Phone,
                }))
                .ForMember(c => c.CandidateRequirement, m => m.MapFrom(dto => new CandidateRequirement()
                {
                   GenderId = dto.GenderId,
                   SpeciesId = dto.SpeciesId,
                   
                }));
            CreateMap<Box, BoxesStatisticsDto>()
                .ForMember(bs => bs.Information, m => m.MapFrom(b => $"Box: {b.Id} Gatunek: {b.Species.Value}y Zajęte miejsca:"))
                .ForMember(bs => bs.AllDens, m => m.MapFrom(d => d.Dens.Count()))
                .ForMember(bs => bs.UsedDens, m => m.MapFrom(d => d.Dens.Where(dn => dn.Animal != null).Count()));


        }
    }
}
