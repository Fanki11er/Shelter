import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const PortalToAnimalsListWrapper = styled.div`
  width: 800px;
  display: grid;
  grid-template-rows: 30px 50px;
  padding: 20px 40px;
  background-image: linear-gradient(
    ${(props: StyledTheme) => props.theme.gradients.mainPinkGRadient}
  );
  border-radius: 10px;
  grid-row-gap: 15px;
  align-self: center;
  justify-self: center;
  align-items: center;
`;

export const PortalToAnimalsListHeader = styled.h2`
  margin: 0;
  justify-self: flex-start;
  align-self: center;
`;

export const PortalToAnimalsListButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
