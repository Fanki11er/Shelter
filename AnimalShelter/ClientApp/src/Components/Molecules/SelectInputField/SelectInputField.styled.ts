import styled from "styled-components";
import { Field } from "formik";
import { StyledTheme } from "../../../GlobalStyles/theme";
import Arrow from "../../../Assets/Images/Arrow.svg";

export const SelectInputFieldWrapper = styled.div`
  width: 200px;
  height: auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40px 40px;
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const SelectInputFieldLabel = styled.label`
  width: 100%;
  text-align: start;
  font-weight: bold;
`;

export const StyledSelect = styled(Field)`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  outline: none;
  appearance: none;
  border-radius: 10px;
  border: none;
  appearance: none;
  text-align: center;
  padding: 10px;
  font-weight: bold;
  background-image: url(${Arrow});
  background-repeat: no-repeat;
  background-position: 90% 50%;
  background-size: 8%;
`;

export const StyledOption = styled.option`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HiddenStyledOption = styled(StyledOption)`
  display: none;
`;
