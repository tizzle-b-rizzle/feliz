import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(16, 1fr);
  height: 700px;
  width: 700px;

  @media (max-width: 900px) {
    height: 90vw;
    max-height: 90vw;
    margin-left: 0rem;
    width: 90vw;
    max-width: 90vw;
  }
`;
