import styled from "styled-components";

export const ClickableSquare = styled.div`
  align-items: center;
  background-color: ${({ colour }) =>
    colour === "orange"
      ? "#e8891c"
      : colour === "green"
      ? "#63d444"
      : colour === "lightBlue"
      ? "#4fcbdb"
      : colour === "red"
      ? "#e6412c"
      : colour === "pink"
      ? "#f783cb"
      : colour === "darkBlue"
      ? "#1e25e8"
      : colour === "purple"
      ? "#8524e0"
      : colour === "grey"
      ? "#adabb0"
      : colour === "yellow"
      ? "#edd93e"
      : "#FFFFFF"};
  border: 1px solid black;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  width: 100%;
  max-width: 100%;

  & img {
    height: 100%;
    width: 100%;
  }
`;
