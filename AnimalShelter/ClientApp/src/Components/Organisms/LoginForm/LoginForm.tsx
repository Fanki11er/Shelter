import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import { LoginFormWrapper, LoginHeader } from "./LoginForm.styles";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import InputField from "../../Molecules/InputField/InputField";
import { MediumButton } from "../../Atoms/Buttons/Buttons";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const { login } = routes;

  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (value: MyFormValues) => {
    console.log("test");
    setError("");
    navigate(login, { replace: true });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);
        console.log("Submit");

        action.setSubmitting(false);
      }}
    >
      <LoginFormWrapper>
        <LoginHeader>Logowanie</LoginHeader>
        {error ? (
          <FormError>
            Podane dane są nieprawidłowe. <br />
            Upewnij się, że podane email i hasło są poprawne
          </FormError>
        ) : null}

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
        <MediumButton type={"submit"}>Zaloguj</MediumButton>
      </LoginFormWrapper>
    </Formik>
  );
};
export default LoginForm;
