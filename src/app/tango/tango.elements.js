import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  height: 500px;
  width: 500px;

  @media (max-width: 900px) {
    height: 90vw;
    max-height: 90vw;
    width: 90vw;
    max-width: 90vw;
  }
`;
