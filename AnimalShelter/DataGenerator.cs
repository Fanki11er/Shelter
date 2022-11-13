using AnimalShelter.Entities;
using Bogus;

namespace AnimalShelter
{
    public  class DataGenerator
    {

        public static void  Seed(AnimalShelterDbContext dbContext)
        {
            var locale = "pl";

            Randomizer.Seed = new Random(1983);

            if (!dbContext.Species.Any())
            {
                var species = GenerateSpecies();
                dbContext.AddRange(species);
                dbContext.SaveChanges();

            }
            if (!dbContext.Races.Any())
            {
               var races =  GenerateRaces(dbContext);
                dbContext.AddRange(races);
                dbContext.SaveChanges();

            }
          
        }

        static private List<Species> GenerateSpecies()
        {
            var species = new List<Species>()
            {
                new Species()
                {
                    Value = "Kot"
                },
                new Species()
                {
                    Value = "Pies"
                }
            };

            return species;
        }

        static private List<Race> GenerateRaces(AnimalShelterDbContext dbContext)
        {
            var races = new List<Race>()
            {
                //Psy
                new Race()
                {
                    Value = "Kundel",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id               
                },
                new Race()
                {
                    Value = "Dalmatyńczyk",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                new Race()
                {
                    Value = "Jamnik",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                 new Race()
                {
                    Value = "Beagle",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                  new Race()
                {
                    Value = "Pudel",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                   new Race()
                {
                    Value = "Owczarek Niemiecki",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                    new Race()
                {
                    Value = "Chou chou",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                     new Race()
                {
                    Value = "Chihuahua",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                      new Race()
                {
                    Value = "Inna",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id
                },
                      // Koty
                      new Race()
                {
                    Value = "Dachowiec",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                new Race()
                {
                    Value = "Syjamski",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                new Race()
                {
                    Value = "Syberyjski",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                 new Race()
                {
                    Value = "Perski",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                  new Race()
                {
                    Value = "Sfinks",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                   new Race()
                {
                    Value = "Bengalski",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                    new Race()
                {
                    Value = "Brytyjski",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                     new Race()
                {
                    Value = "Inna",
                    SpeciesId = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id
                },
                      
            };
            return races;
        }
    }
}
