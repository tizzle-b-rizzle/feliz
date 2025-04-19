import styled from "styled-components";

export const ClickableSquare = styled.div`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;
  z-index: 3;

  & img {
    height: 100%;
    width: 100%;
  }
`;
