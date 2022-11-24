import { LongButton } from "../../Atoms/Buttons/Buttons";
import {
  AnimalAdoptionFormWrapper,
  AnimalAdoptionHeader,
  AnimalAdoptionImg,
  LeftPositionInputWrapper,
  MediumButtonWrapper,
} from "./AnimalAdoptionForm.styles";
import ImgAnimalAdoption from "../../../Assets/Images/AnimalAdoption.svg";
import { Formik } from "formik";
import axios from "axios";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import {
  AdoptionOptionsList,
  CreateAdoptionDto,
  LightCandidateDto,
  SelectOption,
} from "../../../Types/types";
import AnimalsListWithFilter from "../../Molecules/AnimalsListWithFilter/AnimalsListWithFilter";
import { Link } from "react-router-dom";
import { routes } from "../../../Routes/Routes";

export interface MyFormValues {
  candidateId: number;
  adoptedAnimals: string[];
  filter: string;
}

type Props = {
  optionsList: AdoptionOptionsList;
};

const AnimalAdoptionForm = (props: Props) => {
  const { optionsList } = props;
  const { options } = routes;
  const initialValues: MyFormValues = {
    candidateId: 0,
    adoptedAnimals: [],
    filter: "",
  };

  const convertToOptions = (candidates: LightCandidateDto[]) => {
    const optionsList = candidates.map((candidate) => {
      return {
        id: candidate.id,
        value: candidate.name,
      } as SelectOption;
    });
    return optionsList;
  };

  const validateForm = (values: MyFormValues) => {
    const entries = Object.values(values);
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i]) {
        return false;
      }
      return true;
    }
  };

  const convertAnimals = (animals: string[]) => {
    const convertedAnimals: number[] = [];
    animals.forEach((animal) => {
      convertedAnimals.push(Number(animal));
    });
    return convertedAnimals;
  };

  const handleSubmit = async (values: MyFormValues) => {
    if (validateForm(values)) {
      const { adoptedAnimals, candidateId } = values;

      const createAdoptionDto: CreateAdoptionDto = {
        AdoptedAnimals: convertAnimals(adoptedAnimals),
        CandidateId: Number(candidateId),
      };

      axios
        .post(`https://localhost:7121/Adoption/Adopt`, createAdoptionDto)
        .then((response) => {
          console.log(response);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values).then(() => {
          actions.resetForm();
        });

        actions.setSubmitting(false);
      }}
    >
      <AnimalAdoptionFormWrapper>
        <AnimalAdoptionHeader>Adopcja zwierząt</AnimalAdoptionHeader>
        <LeftPositionInputWrapper>
          <SelectInputField
            label="Wybierz kandydata"
            name={"candidateId"}
            options={convertToOptions(optionsList.candidates)}
            placeholder={"Wybierz"}
            disabled={false}
          />
        </LeftPositionInputWrapper>
        <LeftPositionInputWrapper>
          <CheckboxField
            name={"filter"}
            value={"filter"}
            label={"Filtruj według cech"}
          />
        </LeftPositionInputWrapper>
        <AnimalsListWithFilter
          animalsList={optionsList.animals}
          candidatesList={optionsList.candidates}
        />
        <MediumButtonWrapper>
          <LongButton type={"submit"}>Zatwierdź</LongButton>
          <LongButton as={Link} to={options}>
            Powrót
          </LongButton>
        </MediumButtonWrapper>
        <AnimalAdoptionImg src={ImgAnimalAdoption} alt="ImgAnimalAdoption" />
      </AnimalAdoptionFormWrapper>
    </Formik>
  );
};

export default AnimalAdoptionForm;
