import styled from "styled-components";

export const InputSquare = styled.input`
  align-items: center;
  background-color: white;
  border: 1px solid black;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  /* Input type="number" */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;
