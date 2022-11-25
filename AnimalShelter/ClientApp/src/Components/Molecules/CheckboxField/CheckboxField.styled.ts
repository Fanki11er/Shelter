import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const CheckBoxFieldWrapper = styled.div`
  width: fit-content;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-column-gap: 5px;
  align-items: center;
`;

export const CheckboxFieldLabel = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const CheckboxInput = styled(Field)`
  width: 20px;
  height: 20px;
  display: flex;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
`;
