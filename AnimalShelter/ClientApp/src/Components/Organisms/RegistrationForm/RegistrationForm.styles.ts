import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const RegistrationFormWrapper = styled(Form)`
  width: 600px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  padding: 50px 40px;
  display: grid;
  grid-auto-rows: 70px;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const RegistrationHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
`;
