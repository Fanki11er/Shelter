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
  padding: 50px 50px;
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

export const MediumButtonWrapper = styled.div`
  display: grid;
  width: 50%;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-top: 20px;
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
