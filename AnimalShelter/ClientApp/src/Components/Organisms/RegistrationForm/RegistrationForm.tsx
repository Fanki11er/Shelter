import InputField from "../../Molecules/InputField/InputField";
import {
  ButtonsWrapper,
  RegistrationFormWrapper,
  RegistrationHeader,
} from "./RegistrationForm.styles";
import { Formik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { routes } from "../../../Routes/Routes";
import { FormError } from "../../Atoms/FormError/FormError";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import axios from "../../../Api/axios";
import endpoints from "../../../Api/endpoints";
import { RegisterWorkerDto } from "../../../Types/types";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const RegistrationForm = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const { registerEndpoint } = endpoints;
  const { /*registration,*/ options } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const validateForm = (values: MyFormValues) => {
    const entries = Object.values(values);
    for (let i = 0; i < entries.length; i++) {
      if (!entries[i]) {
        return false;
      }
      if (values.password !== values.repeatPassword) {
        return false;
      }

      return true;
    }
  };

  const handleSubmit = async (values: MyFormValues) => {
    console.log(values);
    setError("");
    try {
      await axios.post(
        registerEndpoint,
        JSON.stringify({
          Email: values.email,
          Name: `${values.firstName} ${values.lastName}`,
          UserPassword: values.password,
        } as RegisterWorkerDto),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      navigate(options);
    } catch (error: any) {
      console.log(error);
      setError("Error");
    }

    //(registration, { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        console.log(values);
        if (validateForm(values)) {
          handleSubmit(values);
        }

        action.setSubmitting(false);
      }}
    >
      <RegistrationFormWrapper>
        <RegistrationHeader>Rejestracja</RegistrationHeader>
        {error ? (
          <FormError>
            Podane dane s?? nieprawid??owe. <br />
            Upewnij si??, ??e podane email i has??o s?? poprawne
          </FormError>
        ) : null}

        <InputField name="firstName" placeholder="Imi??" label="Imi??" />
        <InputField name="lastName" placeholder="Nazwisko" label="Nazwisko" />
        <InputField
          name="email"
          placeholder="Email"
          label="Email"
          type="email"
        />
        <InputField
          name="password"
          placeholder="Has??o"
          label="Has??o"
          type="password"
        />
        <InputField
          name="repeatPassword"
          placeholder="Powt??rz has??o"
          label="Powt??rz has??o"
          type="password"
        />
        <ButtonsWrapper>
          <LongButton type={"submit"}>Zarejestruj</LongButton>
          <LongButton as={Link} to={options}>
            Powr??t
          </LongButton>
        </ButtonsWrapper>
      </RegistrationFormWrapper>
    </Formik>
  );
};

export default RegistrationForm;
