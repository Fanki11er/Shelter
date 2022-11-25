import { Formik } from "formik";
import { Link } from "react-router-dom";
import endpoints from "../../../Api/endpoints";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { routes } from "../../../Routes/Routes";
import {
  AddCandidateFormOptionsList,
  CreateCandidateDto,
  SelectOption,
} from "../../../Types/types";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import InputField from "../../Molecules/InputField/InputField";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import {
  AddCandidateFormHeader,
  AddCandidateFormWrapper,
  CheckboxGroupWrapper,
  ColumnWrapper,
  SubmitButtonWrapper,
} from "./AddCandidateForm.styles";

export interface MyFormValues {
  firstName: string;
  lastName: string;
  city: string;
  street: string;
  phone: string;
  postalCode: string;
  characteristics: string[];
  species: number;
  gender: number;
}

type Props = {
  optionsList: AddCandidateFormOptionsList;
};

const AddCandidateForm = (props: Props) => {
  const { optionsList } = props;
  const { options } = routes;
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    city: "",
    street: "",
    phone: "",
    postalCode: "",
    species: 0,
    gender: 0,
    characteristics: [],
  };

  const { addCandidate } = endpoints;
  const axiosPrivate = useAxiosPrivate();

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
        characteristics,
        firstName,
        lastName,
        city,
        street,
        postalCode,
        phone,
        gender,
        species,
      } = values;

      const createCandidateDto = {
        Characteristics: convertCharacteristics(characteristics),
        Name: `${firstName} ${lastName}`,
        City: city,
        Street: street,
        PostalCode: postalCode,
        Phone: phone,
        GenderId: Number(gender),
        SpeciesId: Number(species),
      } as CreateCandidateDto;

      axiosPrivate
        .post(addCandidate, createCandidateDto)
        .then((response) => {})
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
      <AddCandidateFormWrapper>
        <AddCandidateFormHeader>Dodaj kandydata</AddCandidateFormHeader>
        <ColumnWrapper>
          <InputField
            name={"firstName"}
            placeholder={"Imię"}
            label={"Podaj imię"}
          />
          <InputField
            name={"city"}
            placeholder={"Miasto"}
            label={"Podaj miasto"}
          />
          <InputField
            name={"postalCode"}
            placeholder={"Kod pocztowy"}
            label={"Podaj kod pocztowy"}
          />
          <SelectInputField
            label="Wybierz gatunek"
            name={"species"}
            options={optionsList.species}
            placeholder={"Wybierz"}
            disabled={false}
          />
        </ColumnWrapper>

        <ColumnWrapper>
          <InputField
            name={"lastName"}
            placeholder={"Nazwisko"}
            label={"Podaj nazwisko"}
          />
          <InputField
            name={"street"}
            placeholder={"Ulica"}
            label={"Podaj ulicę"}
          />
          <InputField
            name={"phone"}
            placeholder={"Telefon"}
            label={"Podaj nr telefonu"}
            type={"tel"}
          />
          <SelectInputField
            label="Wybierz płeć"
            name={"gender"}
            options={optionsList.genders}
            placeholder={"Wybierz"}
            disabled={false}
          />
        </ColumnWrapper>

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
      </AddCandidateFormWrapper>
    </Formik>
  );
};

export default AddCandidateForm;
