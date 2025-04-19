"use client";
import Image from "next/image";
import Link from "next/link";
import NavBar from "@/components/NavBar/NavBar.component";
import NavItem from "@/components/NavItem/NavItem.component";
import RestOFPage from "@/components/RestOfPage/RestOfPage.component";
import SudokuGridItem from "@/components/SudokuGridItem/Sudoku.component";
import { BigGridContainer, SmallGridContainer } from "./sudoku.elements";
import { EntirePageContainer } from "../stylesheet";
import { getSudoku } from "sudoku-gen";
import capy from "../../../public/assets/capy.png";

export default function Page() {
  const s = getSudoku("medium");
  const initialPuzzleArray = [...s.puzzle];
  return (
    <EntirePageContainer>
      <NavBar>
        <Link href="/">
          <NavItem>Home </NavItem>
        </Link>

        <Link href="/minesweeper">
          <NavItem>Minesweeper </NavItem>
        </Link>

        <Link href="/queens">
          <NavItem> Queens </NavItem>
        </Link>

        <Link href="/tango">
          <NavItem>Tango </NavItem>
        </Link>
      </NavBar>
      {/* <RestOFPage>
        <BigGridContainer>
          <SmallGridContainer>
            <SudokuGridItem
              value={1}
              fixed={true}
              onChange={console.log("hello")}
            />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
          <SmallGridContainer>
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
            <SudokuGridItem value={1} />
          </SmallGridContainer>
        </BigGridContainer>
      </RestOFPage> */}
      <RestOFPage>
        <p>Página em construção!</p>
        <br />
        <p>O segundo número do código é 7</p>
        <Image
          alt="capy"
          src={capy}
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
