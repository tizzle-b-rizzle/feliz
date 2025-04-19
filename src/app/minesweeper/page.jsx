"use client";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar.component";
import NavItem from "@/components/NavItem/NavItem.component";
import RestOFPage from "@/components/RestOfPage/RestOfPage.component";
import { EntirePageContainer } from "../stylesheet";
import MinesweeperGridItem from "@/components/MinesweeperGridItem/MinesweeperGridItem.component";
import { GridContainer } from "./minesweeper.elements";
import { setIsLoseGame, setIsStartOfGame } from "@/redux/minesweeperSlice";
import dog from "../../../public/assets/dog.png";

export default function Page() {
  const dispatch = useDispatch();
  const handleStartClick = () => {
    dispatch(setIsLoseGame(false));
    dispatch(setIsStartOfGame(true));
  };
  return (
    <EntirePageContainer>
      <NavBar>
        <Link href="/">
          <NavItem>Home </NavItem>
        </Link>

        <Link href="/sudoku">
          <NavItem>Sudoku </NavItem>
        </Link>

        <Link href="/queens">
          <NavItem>Queens </NavItem>
        </Link>

        <Link href="/tango">
          <NavItem>Tango </NavItem>
        </Link>
      </NavBar>
      {/* <RestOFPage>
        <button onClick={handleStartClick}>Restart game</button>
        <GridContainer>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"4"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"4"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"3"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>

          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"2"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"B"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"1"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
          <MinesweeperGridItem value={"0"}></MinesweeperGridItem>
        </GridContainer>
      </RestOFPage> */}
      <RestOFPage>
        <p>Página em construção!</p>
        <br />
        <p>O primeiro número do código é 2</p>
        <Image
          alt="dog"
          src={dog}
          style={{
            height: "100%",
            maxHeight: "100%",
            width: "600px",
            maxWidth: "600px",
          }}
        ></Image>
      </RestOFPage>
    </EntirePageContainer>
  );
}
