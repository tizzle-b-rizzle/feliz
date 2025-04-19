"use client";
import Link from "next/link";
import { useSelector } from "react-redux";
import NavBar from "@/components/NavBar/NavBar.component";
import NavItem from "@/components/NavItem/NavItem.component";
import RestOFPage from "@/components/RestOfPage/RestOfPage.component";
import QueensGridItem from "@/components/QueensGridItem/QueensGridItem.component";
import { GridContainer } from "./Queens.elements";
import { EntirePageContainer } from "../stylesheet";

export default function Page() {
  let gridOfQueenValues = useSelector((state) => state.queens.grid);
  let arrayOfValues = [...Object.values(gridOfQueenValues)];
  let noOfOrange =
    arrayOfValues[0] + arrayOfValues[1] + arrayOfValues[9] + arrayOfValues[10];
  let noOfGreen =
    arrayOfValues[2] +
    arrayOfValues[3] +
    arrayOfValues[4] +
    arrayOfValues[11] +
    arrayOfValues[12] +
    arrayOfValues[13] +
    arrayOfValues[19] +
    arrayOfValues[20] +
    arrayOfValues[21];
  let noOfLightBlue =
    arrayOfValues[5] +
    arrayOfValues[6] +
    arrayOfValues[7] +
    arrayOfValues[8] +
    arrayOfValues[14] +
    arrayOfValues[16] +
    arrayOfValues[17] +
    arrayOfValues[22] +
    arrayOfValues[23] +
    arrayOfValues[24] +
    arrayOfValues[25] +
    arrayOfValues[26] +
    arrayOfValues[31] +
    arrayOfValues[32] +
    arrayOfValues[33] +
    arrayOfValues[34] +
    arrayOfValues[35] +
    arrayOfValues[40] +
    arrayOfValues[41] +
    arrayOfValues[42] +
    arrayOfValues[43] +
    arrayOfValues[44] +
    arrayOfValues[52];
  let noOfRed = arrayOfValues[15];
  let noOfPink =
    arrayOfValues[18] +
    arrayOfValues[27] +
    arrayOfValues[28] +
    arrayOfValues[29] +
    arrayOfValues[30] +
    arrayOfValues[36] +
    arrayOfValues[37] +
    arrayOfValues[38] +
    arrayOfValues[39] +
    arrayOfValues[45] +
    arrayOfValues[46] +
    arrayOfValues[47] +
    arrayOfValues[54] +
    arrayOfValues[55] +
    arrayOfValues[56] +
    arrayOfValues[63] +
    arrayOfValues[72];
  let noOfDarkBlue =
    arrayOfValues[48] +
    arrayOfValues[49] +
    arrayOfValues[50] +
    arrayOfValues[57] +
    arrayOfValues[58] +
    arrayOfValues[59] +
    arrayOfValues[64] +
    arrayOfValues[65] +
    arrayOfValues[66] +
    arrayOfValues[67] +
    arrayOfValues[68] +
    arrayOfValues[73] +
    arrayOfValues[74] +
    arrayOfValues[75];
  let noOfPurple = arrayOfValues[53] + arrayOfValues[62];
  let noOfGrey =
    arrayOfValues[51] +
    arrayOfValues[60] +
    arrayOfValues[61] +
    arrayOfValues[69] +
    arrayOfValues[70] +
    arrayOfValues[71] +
    arrayOfValues[77] +
    arrayOfValues[78] +
    arrayOfValues[79] +
    arrayOfValues[80] +
    arrayOfValues[81];
  let noOfYellow = arrayOfValues[76];
  console.log(noOfGrey);
  let noOfTotalPlaced = arrayOfValues
    .slice(0, 81)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow1 = arrayOfValues
    .slice(0, 9)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow2 = arrayOfValues
    .slice(9, 18)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow3 = arrayOfValues
    .slice(18, 27)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow4 = arrayOfValues
    .slice(27, 36)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow5 = arrayOfValues
    .slice(36, 45)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow6 = arrayOfValues
    .slice(45, 54)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow7 = arrayOfValues
    .slice(54, 63)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow8 = arrayOfValues
    .slice(63, 72)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInRow9 = arrayOfValues
    .slice(72, 81)
    .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let noInCol1 =
    arrayOfValues[0] +
    arrayOfValues[9] +
    arrayOfValues[18] +
    arrayOfValues[27] +
    arrayOfValues[36] +
    arrayOfValues[45] +
    arrayOfValues[54] +
    arrayOfValues[63] +
    arrayOfValues[72];
  let noInCol2 =
    arrayOfValues[1] +
    arrayOfValues[10] +
    arrayOfValues[19] +
    arrayOfValues[28] +
    arrayOfValues[37] +
    arrayOfValues[46] +
    arrayOfValues[55] +
    arrayOfValues[64] +
    arrayOfValues[73];
  let noInCol3 =
    arrayOfValues[2] +
    arrayOfValues[11] +
    arrayOfValues[20] +
    arrayOfValues[29] +
    arrayOfValues[38] +
    arrayOfValues[47] +
    arrayOfValues[56] +
    arrayOfValues[65] +
    arrayOfValues[74];
  let noInCol4 =
    arrayOfValues[3] +
    arrayOfValues[12] +
    arrayOfValues[21] +
    arrayOfValues[30] +
    arrayOfValues[39] +
    arrayOfValues[48] +
    arrayOfValues[57] +
    arrayOfValues[66] +
    arrayOfValues[75];
  let noInCol5 =
    arrayOfValues[4] +
    arrayOfValues[13] +
    arrayOfValues[22] +
    arrayOfValues[31] +
    arrayOfValues[40] +
    arrayOfValues[49] +
    arrayOfValues[58] +
    arrayOfValues[67] +
    arrayOfValues[76];
  let noInCol6 =
    arrayOfValues[5] +
    arrayOfValues[14] +
    arrayOfValues[23] +
    arrayOfValues[32] +
    arrayOfValues[41] +
    arrayOfValues[50] +
    arrayOfValues[59] +
    arrayOfValues[68] +
    arrayOfValues[77];
  let noInCol7 =
    arrayOfValues[6] +
    arrayOfValues[15] +
    arrayOfValues[24] +
    arrayOfValues[33] +
    arrayOfValues[42] +
    arrayOfValues[51] +
    arrayOfValues[60] +
    arrayOfValues[69] +
    arrayOfValues[78];
  let noInCol8 =
    arrayOfValues[7] +
    arrayOfValues[16] +
    arrayOfValues[25] +
    arrayOfValues[34] +
    arrayOfValues[43] +
    arrayOfValues[52] +
    arrayOfValues[61] +
    arrayOfValues[70] +
    arrayOfValues[79];
  let noInCol9 =
    arrayOfValues[8] +
    arrayOfValues[17] +
    arrayOfValues[26] +
    arrayOfValues[35] +
    arrayOfValues[44] +
    arrayOfValues[53] +
    arrayOfValues[62] +
    arrayOfValues[71] +
    arrayOfValues[80];

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

        <Link href="/tango">
          <NavItem>Tango </NavItem>
        </Link>
      </NavBar>
      <RestOFPage>
        <GridContainer>
          <QueensGridItem
            colour={"orange"}
            position={"row1col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"orange"}
            position={"row1col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row1col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row1col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row1col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row1col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row1col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row1col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row1col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"orange"}
            position={"row2col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"orange"}
            position={"row2col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row2col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row2col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row2col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row2col6"}
          ></QueensGridItem>
          <QueensGridItem colour={"red"} position={"row2col7"}></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row2col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row2col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row3col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row3col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row3col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"green"}
            position={"row3col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row3col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row3col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row3col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row3col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row3col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row4col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row4col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row4col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row4col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row4col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row4col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row4col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row4col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row4col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row5col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row5col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row5col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row5col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row5col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row5col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row5col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row5col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row5col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row6col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row6col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row6col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row6col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row6col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row6col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row6col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"lightBlue"}
            position={"row6col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"purple"}
            position={"row6col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row7col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row7col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row7col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row7col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row7col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row7col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row7col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row7col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"purple"}
            position={"row7col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row8col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row8col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row8col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row8col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row8col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row8col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row8col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row8col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row8col9"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"pink"}
            position={"row9col1"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row9col2"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row9col3"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"darkBlue"}
            position={"row9col4"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"yellow"}
            position={"row9col5"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row9col6"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row9col7"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row9col8"}
          ></QueensGridItem>
          <QueensGridItem
            colour={"grey"}
            position={"row9col9"}
          ></QueensGridItem>
        </GridContainer>
        {noOfOrange > 1 ||
        noOfGreen > 1 ||
        noOfLightBlue > 1 ||
        noOfRed > 1 ||
        noOfPink > 1 ||
        noOfDarkBlue > 1 ||
        noOfYellow > 1 ||
        noOfPurple > 1 ? (
          <p>Há mais de uma rainha da mesma cor!</p>
        ) : (
          <></>
        )}
        {noInRow1 > 1 ||
        noInRow2 > 1 ||
        noInRow3 > 1 ||
        noInRow4 > 1 ||
        noInRow5 > 1 ||
        noInRow6 > 1 ||
        noInRow7 > 1 ||
        noInRow8 > 1 ||
        noInRow9 > 1 ? (
          <p>Há mais de uma rainha na mesma linha!</p>
        ) : (
          <></>
        )}
        {noInCol1 > 1 ||
        noInCol2 > 1 ||
        noInCol3 > 1 ||
        noInCol4 > 1 ||
        noInCol5 > 1 ||
        noInCol6 > 1 ||
        noInCol7 > 1 ||
        noInCol8 > 1 ||
        noInCol9 > 1 ? (
          <p>Há mais de uma rainha na mesma coluna!</p>
        ) : (
          <></>
        )}

        {noOfTotalPlaced === 9 &&
          noOfOrange < 2 &&
          noOfGreen < 2 &&
          noOfLightBlue < 2 &&
          noOfRed < 2 &&
          noOfPink < 2 &&
          noOfDarkBlue < 2 &&
          noOfYellow < 2 &&
          noOfPurple < 2 &&
          noInRow1 < 2 &&
          noInRow2 < 2 &&
          noInRow3 < 2 &&
          noInRow4 < 2 &&
          noInRow5 < 2 &&
          noInRow6 < 2 &&
          noInRow7 < 2 &&
          noInRow8 < 2 &&
          noInRow9 < 2 &&
          noInCol1 < 2 &&
          noInCol2 < 2 &&
          noInCol3 < 2 &&
          noInCol4 < 2 &&
          noInCol5 < 2 &&
          noInCol6 < 2 &&
          noInCol7 < 2 &&
          noInCol8 < 2 &&
          noInCol9 < 2 && <p>Tu ganha! O terceiro número 1</p>}
      </RestOFPage>
    </EntirePageContainer>
  );
}
