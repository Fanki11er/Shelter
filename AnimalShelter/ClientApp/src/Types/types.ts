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
