import styled from "styled-components";
import { Form } from "formik";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const LoginFormWrapper = styled(Form)`
  width: 600px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  padding: 50px 40px;
  display: grid;
  grid-auto-rows: 70px;
  grid-template-columns: 1fr;
  grid-row-gap: 15px;
  align-self: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

export const LoginHeader = styled.h2`
  display: flex;
  justify-content: center;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  font-weight: normal;
`;

export const ButtonsWrapper = styled.div`
  width: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
