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

            if (!dbContext.Genders.Any())
            {
                var genders = GeneretaeGenders();
                dbContext.AddRange(genders);
                dbContext.SaveChanges();
            }

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
            if (!dbContext.Boxes.Any())
            {
                var boxes = GenerateBoxes(dbContext);
                dbContext.AddRange(boxes);
                dbContext.SaveChanges();

            }
            if (!dbContext.Characteristics.Any())
            {
                var characteristics = GenerateCharacteristics();
                dbContext.AddRange(characteristics);
                dbContext.SaveChanges();

            }

            if (!dbContext.Animals.Any())
            {
                var animals = GenerateAnimals(dbContext);
                dbContext.AddRange(animals);
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

        static private List<Gender> GeneretaeGenders()
        {
            var genders = new List<Gender>()
            {
                new Gender()
                {
                    Value = "Samica"
                },
                new Gender(){
                    Value = "Samiec"
                }

            };
            return genders;
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

        static private List<Box> GenerateBoxes(AnimalShelterDbContext dbContext)
        {
            var boxes = new List<Box>()
            {
                new Box()
                {
                   Species_id = dbContext.Species.FirstOrDefault(s => s.Value == "Kot").Id,
                   Dens = new List<Den>()
                   {
                       new Den(),
                       new Den(),
                       new Den(),
                       new Den(),
                       new Den(),                       
                   },

                },
                  new Box()
                {
                   Species_id = dbContext.Species.FirstOrDefault(s => s.Value == "Pies").Id,
                   Dens = new List<Den>()
                   {
                       new Den(),
                       new Den(),
                       new Den(),
                       new Den(),
                       new Den(),
                   },

                },
            };

            return boxes;
        }

        static private List<Characteristic> GenerateCharacteristics()
        {
            var characteristics = new List<Characteristic>()
            {
                new Characteristic()
                {
                    Description = "Reaktywność"
                },
                 new Characteristic()
                {
                    Description = "Lękliwość"
                },
                  new Characteristic()
                {
                    Description = "Socjalność"
                },
                   new Characteristic()
                {
                    Description = "Podatność na szkolenie"
                },
                    new Characteristic()
                {
                    Description = "Agresywność"
                },
                     new Characteristic()
                {
                    Description = "Ciekawość"
                },
                      new Characteristic()
                {
                    Description = "Ruchliwość"
                },
                       new Characteristic()
                {
                    Description = "Łagodnośc"
                },
                        new Characteristic()
                {
                    Description = "Towarzyskość"
                },
                         new Characteristic()
                {
                    Description = "Długa sierść"
                },
                          new Characteristic()
                {
                    Description = "Krótka siersć"
                },
                           new Characteristic()
                {
                    Description = "Lubi dzieci"
                },
            };
            return characteristics;
        }

        static private List<Animal> GenerateAnimals(AnimalShelterDbContext dbContext)
        {
            var animals = new List<Animal>()
            {
                new Animal()
                {
                    Name = "Misia",
                    Age = 3,
                    Weight = 10,
                    Race_id = 1,
                    Gender_id = 1,
                    Species_Id = 2,
                    Description = "To młoda, około 3 letnia sunia. Schroniskowy boks dzieli z psią koleżanką,z którą się dobrze dogaduje. Chętnie wychodzi na spacery i pewnie się na nich czuje.",
                    Den_Id =  dbContext.Dens.FirstOrDefault(d => d.Box.Species_id == 2 && d.Animal == null).Id,
                    AnimalFutures = new List<AnimalFuture>()
                    {
                        new AnimalFuture()
                        {
                            Characeristic_Id = 1,
                        },
                        new AnimalFuture()
                        {
                            Characeristic_Id = 4,
                        }
                    }


                }
            };
            return animals;
        }
    }
}
