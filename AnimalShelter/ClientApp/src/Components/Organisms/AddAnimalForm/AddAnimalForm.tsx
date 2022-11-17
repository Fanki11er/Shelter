import { Formik } from "formik";
import { AddAnimalFormOptionsList } from "../../../Types/types";
import DependableSelectInputField from "../../Molecules/DependentSelectInputField/DependentSelectInputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import {
  AddAnimalFormWrapper,
  LeftInputsWrapper,
} from "./AddAnimalForm.styles";

export interface MyFormValues {
  species: number;
  race: number;
  gender: number;
  box: number;
  den: number;
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
      </AddAnimalFormWrapper>
    </Formik>
  );
};

export default AddAnimalForm;
