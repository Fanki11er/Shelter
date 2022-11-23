import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const AnimalAdoptionFormWrapper = styled(Form)`
  width: 1000px;
  height: auto;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  padding: 40px 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 40px;
  justify-content: center;
  position: relative;
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const AnimalAdoptionHeader = styled.h2`
  display: flex;
  justify-self: center;
  margin: 0 auto;
`;

export const LeftPositionInputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-items: flex-start;
`;

/*export const LabelChooseCandidate = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
  display: flex;
`;

export const SelectCandidateForAdoption = styled.div`
  width: 300px;
  height: 50px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundLightGray};
  display: flex;
  justify-self: center;
  border-radius: 10px;
`;

export const SelectAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

export const LabelAndCheckboxAnimalAdoptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const LabelAnimalAdoption = styled.label`
  font-family: ${(props: StyledTheme) => props.theme.fontFamily.inter};
`;

export const CheckboxAnimalAdoption = styled.input`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin: 0 20px;
  border-radius: 5px;
`;*/

export const MediumButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const AnimalAdoptionImg = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  display: flex;
  justify-self: flex-end;
  align-self: flex-start;
  margin: 50px 70px;
`;
