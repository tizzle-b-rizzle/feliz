import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  left: 0;
  height: 80vh;
  max-height: auto;
  justify-content: flex-start;
  position: absolute;
  top: 20%;
  width: 99vw;

  & p {
    font-size: 20px;
  }

  @media (max-width: 900px) {
    align-items: center;
    left: 2%;
    justify-content: flex-start;
    top: 15%;
  }
`;
