import styled from "styled-components";

export const BigGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 540px;
  width: 540px;

  @media (max-width: 900px) {
    height: 90vw;
    max-height: 90vw;
    width: 90vw;
    max-width: 90vw;
  }
`;

export const SmallGridContainer = styled.div`
  align-items: center;
  border: 2px solid black;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100%;
  justify-content: center;
  width: 100%;
`;
