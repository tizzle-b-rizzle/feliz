import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import bomb from "../../../public/assets/bomb.png";
import { ClickableSquare } from "./Minesweeper.elements";
import { setIsLoseGame, setIsStartOfGame } from "@/redux/minesweeperSlice";

export default function MinesweeperGridItem({ value }) {
  const dispatch = useDispatch();
  const isGameLost = useSelector((state) => state.minesweeper.gameLost);
  const isStartOfGame = useSelector((state) => state.minesweeper.startOfGame);
  const [isClicked, setIsClicked] = useState(false);

  const handleOnClick = (e) => {
    if (isStartOfGame === true) {
      dispatch(setIsStartOfGame(false));
    }
    setIsClicked(true);
    if (value === "B") {
      dispatch(setIsLoseGame());
    }
  };
  return (
    <>
      <ClickableSquare onClick={handleOnClick}>
        {isGameLost ? (
          <Image
            alt="bomb"
            src={bomb}
            style={{
              height: "100%",
              maxHeight: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
          ></Image>
        ) : isStartOfGame ? (
          ""
        ) : !isClicked ? (
          ""
        ) : isClicked && value !== "B" ? (
          <p>{value}</p>
        ) : (
          "Bomb"
        )}
      </ClickableSquare>
    </>
  );
}
