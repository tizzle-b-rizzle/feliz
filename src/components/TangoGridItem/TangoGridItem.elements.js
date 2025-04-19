import styled from "styled-components";

export const ClickableSquare = styled.div`
  align-items: center;
  background-color: ${({ fixed }) => (fixed === "true" ? "gray" : "white")};
  border: 1px solid black;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;
`;
