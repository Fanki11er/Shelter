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
};
