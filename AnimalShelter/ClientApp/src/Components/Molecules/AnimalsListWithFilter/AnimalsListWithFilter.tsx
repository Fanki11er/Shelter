import { useFormikContext } from "formik";
import { useEffect, useState } from "react";
import {
  LightAnimalDto,
  LightCandidateDto,
  LightCandidateRequirements,
} from "../../../Types/types";
import { MyFormValues } from "../../Organisms/AnimalAdoptionForm/AnimalAdoptionForm";
import CheckboxField from "../CheckboxField/CheckboxField";
import {
  AnimalsCheckboxLabel,
  AnimalsListWithFilterPlaceholder,
  AnimalsListWithFilterRow,
  AnimalsListWithFilterWrapper,
} from "./AnimalsListWithFilter.styles";

type Props = {
  animalsList: LightAnimalDto[];
  candidatesList: LightCandidateDto[];
};

const AnimalsListWithFilter = (props: Props) => {
  const { animalsList, candidatesList } = props;

  const { values } = useFormikContext<MyFormValues>();

  const [animals, setAnimals] = useState<LightAnimalDto[]>([]);

  useEffect(() => {
    const candidateId = values["candidateId"];

    const filter = values["filter"].length;
    if (candidateId === 0) {
    } else {
      const candidate = candidatesList.find((candidate) => {
        return candidate.id === Number(candidateId);
      });
      if (candidate) {
        filterAnimals(filter, candidate.candidateRequirements, animalsList);
      }
    }
    /* eslint-disable */
  }, [values, animalsList]);

  const filterAnimals = (
    filter: number,
    candidateRequirements: LightCandidateRequirements,
    animalsList: LightAnimalDto[]
  ) => {
    if (!filter) {
      return setAnimals(animalsList);
    } else {
      setAnimals(getFilteredAnimalsList(candidateRequirements, animalsList));
    }
  };

  const getFilteredAnimalsList = (
    candidateRequirements: LightCandidateRequirements,
    animalsList: LightAnimalDto[]
  ) => {
    const filteredAnimalsList: LightAnimalDto[] = [];
    for (let i = 0; i < animalsList.length; i++) {
      if (animalsList[i].genderId !== candidateRequirements.genderId) {
        break;
      }
      if (animalsList[i].speciesId !== candidateRequirements.speciesId) {
        break;
      }
      for (
        let j = 0;
        j < candidateRequirements.characteristicsIds.length;
        j++
      ) {
        if (
          animalsList[i].characteristicsIds.includes(
            candidateRequirements.characteristicsIds[j]
          )
        ) {
          filteredAnimalsList.push(animalsList[i]);
          break;
        }
      }
    }
    return filteredAnimalsList;
  };

  const renderRows = (animals: LightAnimalDto[]) => {
    return animals.map((animal) => {
      return (
        <AnimalsListWithFilterRow key={animal.id}>
          <AnimalsCheckboxLabel>{animal.description}</AnimalsCheckboxLabel>
          <CheckboxField
            name={"adoptedAnimals"}
            value={animal.id.toString()}
            label={"Dodaj"}
          />
        </AnimalsListWithFilterRow>
      );
    });
  };
  return (
    <>
      {animals.length ? (
        <AnimalsListWithFilterWrapper>
          {renderRows(animals)}
        </AnimalsListWithFilterWrapper>
      ) : (
        <AnimalsListWithFilterPlaceholder>
          Brak zwierząt do wyświetlenia
        </AnimalsListWithFilterPlaceholder>
      )}
    </>
  );
};

export default AnimalsListWithFilter;
