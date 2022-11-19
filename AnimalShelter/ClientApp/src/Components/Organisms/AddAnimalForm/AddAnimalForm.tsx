import { Formik } from "formik";
import { AddAnimalFormOptionsList, SelectOption } from "../../../Types/types";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import AddPhotoField from "../../Molecules/AddPhotoField/AddPhotoField";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import DependableSelectInputField from "../../Molecules/DependentSelectInputField/DependentSelectInputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import TextAreaField from "../../Molecules/TextAreaField/TextAreaField";
import {
  AddAnimalFormHeader,
  AddAnimalFormWrapper,
  AddPhotoWrapper,
  CheckboxGroupWrapper,
  LeftInputsWrapper,
  PhotoPreviewPlaceholder,
  RightInputsWrapper,
  SubmitButtonWrapper,
} from "./AddAnimalForm.styles";

export interface MyFormValues {
  species: number;
  race: number;
  gender: number;
  box: number;
  den: number;
  characteristics: string[];
  description: string;
  photo: any;
}

export type FormDependableValues = "species" | "box";

type Props = {
  optionsList: AddAnimalFormOptionsList;
};

const AddAnimalForm = (props: Props) => {
  const { optionsList } = props;

  const initialValues: MyFormValues = {
    species: 0,
    race: 0,
    gender: 0,
    box: 0,
    den: 0,
    characteristics: [],
    description: "",
    photo: "",
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

  const handleSubmit = async (values: MyFormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);

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
        <RightInputsWrapper>
          <AddPhotoWrapper>
            <PhotoPreviewPlaceholder />
            <AddPhotoField name="photo" label="Wybierz zdjecie" />
          </AddPhotoWrapper>
          <TextAreaField name={"description"} label={"Opis zwierzęcia"} />
        </RightInputsWrapper>
        <CheckboxGroupWrapper>
          {optionsList.characteristics.length &&
            renderCheckboxes(optionsList.characteristics)}
        </CheckboxGroupWrapper>
        <SubmitButtonWrapper>
          <LongButton type={"submit"}>Submit</LongButton>
        </SubmitButtonWrapper>
      </AddAnimalFormWrapper>
    </Formik>
  );
};

export default AddAnimalForm;
