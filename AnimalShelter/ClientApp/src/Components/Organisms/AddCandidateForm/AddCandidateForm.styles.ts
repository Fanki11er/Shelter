import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AddCandidateFormWrapper = styled(Form)`
  width: 1100px;
  height: auto;
  display: grid;
  grid-template-columns: 500px 500px;
  grid-row-gap: 40px;
  padding: 50px;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  margin: 50px 0;
  border-radius: 15px;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const ColumnWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: auto;
  grid-row-gap: 30px;
  justify-items: center;
`;

export const CheckboxGroupWrapper = styled.div`
  width: 800px;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 5px;
  justify-items: flex-end;
  align-content: center;
  justify-self: center;
  padding: 15px 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  border-radius: 10px;
  grid-column: 1 /3;
`;

export const SubmitButtonWrapper = styled.div`
  width: 50%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
  justify-content: center;
  grid-column: 1/3;
  justify-self: center;
`;

export const AddCandidateFormHeader = styled.h2`
  grid-column: 1/4;
  justify-self: center;
`;
