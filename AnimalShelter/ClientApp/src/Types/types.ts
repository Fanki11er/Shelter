export type Species = "Kot" | "Pies";

export type AnimalsToAdoptionAmount = {
  dogsAmount: number;
  catsAmount: number;
};

export type AnimalForAdoption = {
  id: number;
  name: string;
  description: string;
  photo: any;
  species: Species;
  weight: number;
  age: number;
  gender: string;
  race: string;
};

export type AddAnimalFormOptionsList = {
  species: SelectOption[];
  races: SelectOption[];
  genders: SelectOption[];
  boxes: SelectOption[];
  dens: SelectOption[];
  characteristics: SelectOption[];
};

export type SelectOption = {
  id: number;
  value: string;
  additionalValue: number;
};

export type CreateAnimalDto = {
  Name: string;
  Weight: number;
  Age: number;
  SpeciesId: number;
  RaceId: number;
  GenderId: number;
  DenId: number;
  Characteristics: number[];
  Description: string;
};

export type CreateCandidateDto = {
  Name: string;
  City: string;
  Street: string;
  Phone: string;
  PostalCode: string;
  Characteristics: number[];
  SpeciesId: number;
  GenderId: number;
};

export type AddCandidateFormOptionsList = {
  species: SelectOption[];
  genders: SelectOption[];
  characteristics: SelectOption[];
};

export type AdoptionOptionsList = {
  candidates: LightCandidateDto[];
  animals: LightAnimalDto[];
};

export type LightCandidateDto = {
  id: number;
  name: string;
  candidateRequirements: LightCandidateRequirements;
};

export type LightAnimalDto = {
  id: number;
  description: string;
  characteristicsIds: number[];
  genderId: number;
  speciesId: number;
};

export type LightCandidateRequirements = {
  genderId: number;
  speciesId: number;
  characteristicsIds: number[];
};

export type CreateAdoptionDto = {
  AdoptedAnimals: number[];
  CandidateId: number;
};

export type BoxesStatisticsDto = {
  information: string;
  allDens: number;
  usedDens: number;
};

export type AdoptionsHistoryDto = {
  information: string;
};
