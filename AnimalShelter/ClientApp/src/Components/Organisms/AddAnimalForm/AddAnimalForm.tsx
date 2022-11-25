import axios from "axios";
import { Formik } from "formik";
import { useState } from "react";
import {
  AddAnimalFormOptionsList,
  CreateAnimalDto,
  SelectOption,
} from "../../../Types/types";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import AddPhotoField from "../../Molecules/AddPhotoField/AddPhotoField";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import DependableSelectInputField from "../../Molecules/DependentSelectInputField/DependentSelectInputField";
import InputField from "../../Molecules/InputField/InputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import TextAreaField from "../../Molecules/TextAreaField/TextAreaField";
import {
  AddAnimalFormHeader,
  AddAnimalFormWrapper,
  AddPhotoWrapper,
  CheckboxGroupWrapper,
  LeftInputsWrapper,
  NumberFieldsWrapper,
  PhotoPreview,
  RightInputsWrapper,
  SubmitButtonWrapper,
} from "./AddAnimalForm.styles";
import dogPlaceholder from "../../../Assets/Images/dogPlaceholder.png";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";

export interface MyFormValues {
  name: string;
  age: number;
  weight: number;
  species: number;
  race: number;
  gender: number;
  box: number;
  den: number;
  characteristics: string[];
  description: string;
  //photo: File | "";
}

export type FormDependableValues = "species" | "box";

type Props = {
  optionsList: AddAnimalFormOptionsList;
};

const AddAnimalForm = (props: Props) => {
  const { optionsList } = props;
  const { options } = routes;
  const [image, setImage] = useState<string>("");
  const navigate = useNavigate();

  const initialValues: MyFormValues = {
    name: "",
    age: 0,
    weight: 0,
    species: 0,
    race: 0,
    gender: 0,
    box: 0,
    den: 0,
    characteristics: [],
    description: "",
    // photo: "",
  };

  const handleAddImage = (imageSrc: string) => {
    setImage(imageSrc);
  };

  const renderCheckboxes = (characteristicsList: SelectOption[]) => {
    return characteristicsList.map((characteristic) => {
      const { id, value } = characteristic;
      return (
        <CheckboxField
          name={"characteristics"}
          value={id.toString()}
          label={value}
          key={id}
        />
      );
    });
  };

  const validateForm = (values: MyFormValues) => {
    const entries = Object.values(values);
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i]) {
        return false;
      }
      if (values.age < 0 || values.weight < 0) {
        return false;
      }
      return true;
    }
  };

  const convertCharacteristics = (characteristics: string[]) => {
    const convertedCharacteristics: number[] = [];
    characteristics.forEach((ch) => {
      convertedCharacteristics.push(Number(ch));
    });
    return convertedCharacteristics;
  };

  const handleSubmit = async (values: MyFormValues) => {
    if (validateForm(values)) {
      const {
        species,
        race,
        gender,
        den,
        characteristics,
        description,
        name,
        age,
        weight,
      } = values;

      const createAnimalDto = {
        Name: name,
        Age: Number(age),
        Weight: Number(weight),
        SpeciesId: Number(species),
        RaceId: Number(race),
        GenderId: Number(gender),
        DenId: Number(den),
        Characteristics: convertCharacteristics(characteristics),
        Description: description,
      } as CreateAnimalDto;

      axios
        .post(`https://localhost:7121/Animal/AddAnimal`, createAnimalDto)
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
          navigate(options, { replace: true });
        });

        actions.setSubmitting(false);
      }}
    >
      <AddAnimalFormWrapper>
        <AddAnimalFormHeader>Dodaj lokatora</AddAnimalFormHeader>
        <LeftInputsWrapper>
          <SelectInputField
            label="Wybierz gatunek"
            name={"species"}
            options={optionsList.species}
            placeholder={"Wybierz"}
            disabled={false}
          />
          <DependableSelectInputField
            label="Wybierz Rasę"
            name={"race"}
            options={optionsList.races}
            placeholder={"Wybierz"}
            valueName={"species"}
          />

          <SelectInputField
            label="Wybierz płeć"
            name={"gender"}
            options={optionsList.genders}
            placeholder={"Wybierz"}
            disabled={false}
          />

          <DependableSelectInputField
            label="Wybierz boks"
            name={"box"}
            options={optionsList.boxes}
            placeholder={"Wybierz"}
            valueName={"species"}
          />

          <DependableSelectInputField
            label="Wybierz legowisko"
            name={"den"}
            options={optionsList.dens}
            placeholder={"Wybierz"}
            valueName={"box"}
          />
        </LeftInputsWrapper>
        <NumberFieldsWrapper>
          <InputField name={"name"} label={"Imię"} placeholder={"Podaj imie"} />

          <InputField
            type={"number"}
            name={"age"}
            label={"Wiek"}
            width={"100px"}
          />
          <InputField
            type={"number"}
            name={"weight"}
            label={"Waga"}
            width={"100px"}
          />
        </NumberFieldsWrapper>
        <RightInputsWrapper>
          <AddPhotoWrapper>
            {image ? (
              <PhotoPreview src={image} alt={"Zdjęcie swierzaka"} />
            ) : (
              <PhotoPreview src={dogPlaceholder} alt={"Narysowany piesek"} />
            )}
            <AddPhotoField
              name="photo"
              label="Wybierz zdjecie"
              handleAddImage={handleAddImage}
            />
          </AddPhotoWrapper>
          <TextAreaField name={"description"} label={"Opis zwierzęcia"} />
        </RightInputsWrapper>
        <CheckboxGroupWrapper>
          {optionsList.characteristics.length &&
            renderCheckboxes(optionsList.characteristics)}
        </CheckboxGroupWrapper>
        <SubmitButtonWrapper>
          <LongButton type={"submit"}>Zapisz</LongButton>
          <LongButton as={Link} to={options}>
            Powrót
          </LongButton>
        </SubmitButtonWrapper>
      </AddAnimalFormWrapper>
    </Formik>
  );
};

export default AddAnimalForm;
