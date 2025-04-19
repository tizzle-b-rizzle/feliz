"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import NavBar from "@/components/NavBar/NavBar.component";
import NavItem from "@/components/NavItem/NavItem.component";
import RestOFPage from "@/components/RestOfPage/RestOfPage.component";
import TangoGridItem from "@/components/TangoGridItem/TangoGridItem.component";
import { EntirePageContainer } from "../stylesheet";
import { GridContainer } from "./tango.elements";

export default function Page() {
  const gridObject = useSelector((state) => state.tango.grid);
  const gridValues = Object.values(gridObject);
  const winObject = {
    r1c1: 2,
    r1c2: 1,
    r1c3: 2,
    r1c4: 1,
    r1c5: "fixedMoon",
    r1c6: 1,
    r2c1: "fixedSun",
    r2c2: 2,
    r2c3: "fixedSun",
    r2c4: "fixedSun",
    r2c5: 2,
    r2c6: 2,
    r3c1: 2,
    r3c2: 1,
    r3c3: 2,
    r3c4: 2,
    r3c5: 1,
    r3c6: "fixedSun",
    r4c1: 1,
    r4c2: "fixedMoon",
    r4c3: 1,
    r4c4: "fixedMoon",
    r4c5: 1,
    r4c6: 2,
    r5c1: 2,
    r5c2: "fixedMoon",
    r5c3: 1,
    r5c4: 1,
    r5c5: 2,
    r5c6: "fixedSun",
    r6c1: "fixedSun",
    r6c2: 1,
    r6c3: 2,
    r6c4: 2,
    r6c5: 1,
    r6c6: 2,
  };
  const winObjectValues = Object.values(winObject);

  console.log("hello", gridValues, winObjectValues);

  return (
    <EntirePageContainer>
      <NavBar>
        <Link href="/">
          <NavItem>Home </NavItem>
        </Link>

        <Link href="/minesweeper">
          <NavItem>Minesweeper </NavItem>
        </Link>

        <Link href="/sudoku">
          <NavItem>Sudoku </NavItem>
        </Link>

        <Link href="/queens">
          <NavItem>Queens </NavItem>
        </Link>
      </NavBar>
      <RestOFPage>
        <GridContainer>
          <TangoGridItem
            pictureValue={gridValues[0]}
            fixed={false}
            position={"row1col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[1]}
            fixed={false}
            position={"row1col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[2]}
            fixed={false}
            position={"row1col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[3]}
            fixed={false}
            position={"row1col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[4]}
            fixed={true}
            position={"row1col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[5]}
            fixed={false}
            position={"row1col6"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[6]}
            fixed={true}
            position={"row2col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[7]}
            fixed={false}
            position={"row2col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[8]}
            fixed={true}
            position={"row2col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[9]}
            fixed={true}
            position={"row2col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[10]}
            fixed={false}
            position={"row2col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[11]}
            fixed={false}
            position={"row2col6"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[12]}
            fixed={false}
            position={"row3col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[13]}
            fixed={false}
            position={"row3col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[14]}
            fixed={false}
            position={"row3col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[15]}
            fixed={false}
            position={"row3col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[16]}
            fixed={false}
            position={"row3col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[17]}
            fixed={true}
            position={"row3col6"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[18]}
            fixed={false}
            position={"row4col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[19]}
            fixed={true}
            position={"row4col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[20]}
            fixed={false}
            position={"row4col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[21]}
            fixed={true}
            position={"row4col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[22]}
            fixed={false}
            position={"row4col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[23]}
            fixed={false}
            position={"row4col6"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[24]}
            fixed={false}
            position={"row5col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[25]}
            fixed={true}
            position={"row5col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[26]}
            fixed={false}
            position={"row5col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[27]}
            fixed={false}
            position={"row5col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[28]}
            fixed={false}
            position={"row5col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[29]}
            fixed={true}
            position={"row5col6"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[30]}
            fixed={true}
            position={"row6col1"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[31]}
            fixed={false}
            position={"row6col2"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[32]}
            fixed={false}
            position={"row6col3"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[33]}
            fixed={false}
            position={"row6col4"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[34]}
            fixed={false}
            position={"row6col5"}
          ></TangoGridItem>
          <TangoGridItem
            pictureValue={gridValues[35]}
            fixed={false}
            position={"row6col6"}
          ></TangoGridItem>
        </GridContainer>
        {JSON.stringify(gridValues) === JSON.stringify(winObjectValues) ? (
          <p>Tu ganha! O quarto número 1</p>
        ) : (
          <></>
        )}
      </RestOFPage>
    </EntirePageContainer>
  );
}
