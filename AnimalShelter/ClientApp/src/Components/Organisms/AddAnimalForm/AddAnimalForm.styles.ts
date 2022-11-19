import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AddAnimalFormWrapper = styled(Form)`
  width: 1000px;
  height: auto;
  display: grid;
  grid-template-columns: 600px 300px;
  padding: 50px;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  margin: 50px 0;
  border-radius: 15px;
`;

export const LeftInputsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 15px;
  justify-items: flex-start;
`;
