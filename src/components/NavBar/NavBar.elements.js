import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid black;
  display: ${({ showNav }) => (showNav === true ? "flex" : "flex")};
  height: 10%;
  gap: 10px;
  left: 0%;
  padding: 10px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;

  a {
    color: black;
    height: 100%;
    text-decoration: none;
    width: 100%;
  }

  @media (max-width: 900px) {
  }
`;

export const BurgerMenu = styled.div`
  background-color: green;
  display: none;
  flex-direction: column;
  height: 50px;
  gap: 10%;
  width: 30px;
  z-index: 10;

  @media (max-width: 900px) {
    display: flex;
  }
`;

export const BurgerMenuBar = styled.div`
  background-color: black;
  height: 5px;
  right: 0%;
  top: 0;
  width: 30px;
`;
