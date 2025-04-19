import styled from "styled-components";

export const CodeInput = styled.input`
  height: 20px;
  width: 100px;

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

export const MessageWrapper = styled.div`
  display: ${({ show }) => (show === "true" ? "flex" : "none")};
  height: auto;
  padding: 0 0 20px 0;
  width: 500px;

  & p {
    color: #4287f5;
    font-family: cursive;
  }

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const FlexColumnContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
`;

export const WelcomeContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  width: 400px;
  max-width: 400px;

  @media (max-width: 900px) {
    width: 90%;
  }
`;

export const Button = styled.div`
  align-items: center;
  border: 1px solid black;
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 300px;
`;
