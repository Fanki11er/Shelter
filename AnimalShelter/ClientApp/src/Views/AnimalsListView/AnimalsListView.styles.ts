import styled from "styled-components";

export const AnimalsListViewWrapper = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  grid-row-gap: 20px;
  justify-items: center;
`;

export const AnimalsListViewHeader = styled.h2`
  display: flex;
  width: fit-content;
  height: fit-content;
  margin: 40px 0;
`;

export const NoAnimalsInformation = styled.h2``;
