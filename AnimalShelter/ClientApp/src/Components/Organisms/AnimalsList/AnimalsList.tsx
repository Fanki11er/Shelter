import {
  AnimalsListElement,
  AnimalsListElementAnimalInfo,
  AnimalsListElementAnimalInfoWrapper,
  AnimalsListElementContent,
  AnimalsListElementHeader,
  AnimalsListElementPhoto,
  AnimalsListElementPhotoPlaceholder,
  AnimalsListWrapper,
} from "./AnimalsList.styles";

import DogPlaceholder from "../../../Assets/Images/DogPlaceholder.svg";
import CatPlaceholder from "../../../Assets/Images/CatPlaceholder.svg";
import { AnimalForAdoption } from "../../../Types/types";
import { Utils } from "../../../Utils/Utils";

type Props = {
  animalsList: AnimalForAdoption[];
};

const AnimalsList = (props: Props) => {
  const { animalsList } = props;

  const renderListElements = (animalsList: AnimalForAdoption[]) => {
    return animalsList.map((animal) => {
      const { id, name, description, weight, age, species, gender } = animal;
      return (
        <AnimalsListElement key={id}>
          <AnimalsListElementHeader>{name}</AnimalsListElementHeader>
          {!animal.photo ? (
            <AnimalsListElementPhotoPlaceholder
              src={species === "Pies" ? DogPlaceholder : CatPlaceholder}
              alt={"Animal image placeholder"}
            />
          ) : (
            <AnimalsListElementPhoto src={animal.photo} alt={"Animal photo"} />
          )}
          <AnimalsListElementAnimalInfoWrapper>
            <AnimalsListElementAnimalInfo>{`Płeć: ${gender}`}</AnimalsListElementAnimalInfo>
            <AnimalsListElementAnimalInfo>{`Waga: ${weight} Kg`}</AnimalsListElementAnimalInfo>
            <AnimalsListElementAnimalInfo>{`Wiek: ${age} ${Utils.getAgeEnding(
              age
            )}`}</AnimalsListElementAnimalInfo>
          </AnimalsListElementAnimalInfoWrapper>
          <AnimalsListElementContent>{description}</AnimalsListElementContent>
        </AnimalsListElement>
      );
    });
  };
  return (
    <AnimalsListWrapper>{renderListElements(animalsList)}</AnimalsListWrapper>
  );
};

export default AnimalsList;
