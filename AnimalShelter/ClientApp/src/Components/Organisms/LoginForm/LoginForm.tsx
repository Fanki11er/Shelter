import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../../../Routes/Routes";
import {
  ButtonsWrapper,
  LoginFormWrapper,
  LoginHeader,
} from "./LoginForm.styles";
import { Formik } from "formik";
import { FormError } from "../../Atoms/FormError/FormError";
import InputField from "../../Molecules/InputField/InputField";
import { LongButton } from "../../Atoms/Buttons/Buttons";
import { AuthContext } from "../../../Providers/AuthProvider";
import axios from "../../../Api/axios";
import endpoints from "../../../Api/endpoints";
import { AuthUser } from "../../../Types/types";

interface MyFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const { options } = routes;
  const { loginEndpoint } = endpoints;

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { setAuth } = useContext(AuthContext);

  const handleSubmit = async (values: MyFormValues) => {
    setError("");

    axios
      .post(loginEndpoint, { email: values.email, password: values.password })
      .then((response) => {
        const user = response.data as AuthUser | null;
        if (user) {
          setAuth(user);
          navigate(options, { replace: true });
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, action) => {
        handleSubmit(values);

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
        <ButtonsWrapper>
          <LongButton type={"submit"}>Zaloguj</LongButton>
          <LongButton as={Link} to={options}>
            Powrót
          </LongButton>
        </ButtonsWrapper>
      </LoginFormWrapper>
    </Formik>
  );
};
export default LoginForm;
