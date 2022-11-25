import InputField from "../../Molecules/InputField/InputField";
import {
  RegistrationFormWrapper,
  RegistrationHeader,
} from "./RegistrationForm.styles";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
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
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane email i hasło są poprawne
          </FormError>
        ) : null}

        <InputField name="firstName" placeholder="Imię" label="Imię" />
        <InputField name="lastName" placeholder="Nazwisko" label="Nazwisko" />
        <InputField
          name="email"
          placeholder="Email"
          label="Email"
          type="email"
        />
        <InputField
          name="password"
          placeholder="Hasło"
          label="Hasło"
          type="password"
        />
        <InputField
          name="repeatPassword"
          placeholder="Powtórz hasło"
          label="Powtórz hasło"
          type="password"
        />
        <LongButton type={"submit"}>Zarejestruj</LongButton>
      </RegistrationFormWrapper>
    </Formik>
  );
};

export default RegistrationForm;
