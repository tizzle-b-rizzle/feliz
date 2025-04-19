import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { ClickableSquare } from "./QueenGridItem.elements";
import cross from "../../../public/assets/cross.svg";
import maia from "../../../public/assets/maia.png";
import { updateGrid } from "@/redux/queensSlice";

export default function QueensGridItem({ colour, position }) {
  const dispatch = useDispatch();
  const [gridItemValue, setGridItemValue] = useState(0);
  const updateRowsAndCols = (rowCol, value) => {
    switch (rowCol) {
      case "row1col1":
        dispatch(updateGrid({ location: "r1c1", value: value }));
        break;
      case "row1col2":
        dispatch(updateGrid({ location: "r1c2", value: value }));
        break;
      case "row1col3":
        dispatch(updateGrid({ location: "r1c3", value: value }));
        break;
      case "row1col4":
        dispatch(updateGrid({ location: "r1c4", value: value }));
        break;
      case "row1col5":
        dispatch(updateGrid({ location: "r1c5", value: value }));
        break;
      case "row1col6":
        dispatch(updateGrid({ location: "r1c6", value: value }));
        break;
      case "row1col7":
        dispatch(updateGrid({ location: "r1c7", value: value }));
        break;
      case "row1col8":
        dispatch(updateGrid({ location: "r1c8", value: value }));
        break;
      case "row1col9":
        dispatch(updateGrid({ location: "r1c9", value: value }));
        break;
      case "row2col1":
        dispatch(updateGrid({ location: "r2c1", value: value }));
        break;
      case "row2col2":
        dispatch(updateGrid({ location: "r2c2", value: value }));
        break;
      case "row2col3":
        dispatch(updateGrid({ location: "r2c3", value: value }));
        break;
      case "row2col4":
        dispatch(updateGrid({ location: "r2c4", value: value }));
        break;
      case "row2col5":
        dispatch(updateGrid({ location: "r2c5", value: value }));
        break;
      case "row2col6":
        dispatch(updateGrid({ location: "r2c6", value: value }));
        break;
      case "row2col7":
        dispatch(updateGrid({ location: "r2c7", value: value }));
        break;
      case "row2col8":
        dispatch(updateGrid({ location: "r2c8", value: value }));
        break;
      case "row2col9":
        dispatch(updateGrid({ location: "r2c9", value: value }));
        break;
      case "row3col1":
        dispatch(updateGrid({ location: "r3c1", value: value }));
        break;
      case "row3col2":
        dispatch(updateGrid({ location: "r3c2", value: value }));
        break;
      case "row3col3":
        dispatch(updateGrid({ location: "r3c3", value: value }));
        break;
      case "row3col4":
        dispatch(updateGrid({ location: "r3c4", value: value }));
        break;
      case "row3col5":
        dispatch(updateGrid({ location: "r3c5", value: value }));
        break;
      case "row3col6":
        dispatch(updateGrid({ location: "r3c6", value: value }));
        break;
      case "row3col7":
        dispatch(updateGrid({ location: "r3c7", value: value }));
        break;
      case "row3col8":
        dispatch(updateGrid({ location: "r3c8", value: value }));
        break;
      case "row3col9":
        dispatch(updateGrid({ location: "r3c9", value: value }));
        break;
      case "row4col1":
        dispatch(updateGrid({ location: "r4c1", value: value }));
        break;
      case "row4col2":
        dispatch(updateGrid({ location: "r4c2", value: value }));
        break;
      case "row4col3":
        dispatch(updateGrid({ location: "r4c3", value: value }));
        break;
      case "row4col4":
        dispatch(updateGrid({ location: "r4c4", value: value }));
        break;
      case "row4col5":
        dispatch(updateGrid({ location: "r4c5", value: value }));
        break;
      case "row4col6":
        dispatch(updateGrid({ location: "r4c6", value: value }));
        break;
      case "row4col7":
        dispatch(updateGrid({ location: "r4c7", value: value }));
        break;
      case "row4col8":
        dispatch(updateGrid({ location: "r4c8", value: value }));
        break;
      case "row4col9":
        dispatch(updateGrid({ location: "r4c9", value: value }));
        break;
      case "row5col1":
        dispatch(updateGrid({ location: "r5c1", value: value }));
        break;
      case "row5col2":
        dispatch(updateGrid({ location: "r5c2", value: value }));
        break;
      case "row5col3":
        dispatch(updateGrid({ location: "r5c3", value: value }));
        break;
      case "row5col4":
        dispatch(updateGrid({ location: "r5c4", value: value }));
        break;
      case "row5col5":
        dispatch(updateGrid({ location: "r5c5", value: value }));
        break;
      case "row5col6":
        dispatch(updateGrid({ location: "r5c6", value: value }));
        break;
      case "row5col7":
        dispatch(updateGrid({ location: "r5c7", value: value }));
        break;
      case "row5col8":
        dispatch(updateGrid({ location: "r5c8", value: value }));
        break;
      case "row5col9":
        dispatch(updateGrid({ location: "r5c9", value: value }));
        break;
      case "row6col1":
        dispatch(updateGrid({ location: "r6c1", value: value }));
        break;
      case "row6col2":
        dispatch(updateGrid({ location: "r6c2", value: value }));
        break;
      case "row6col3":
        dispatch(updateGrid({ location: "r6c3", value: value }));
        break;
      case "row6col4":
        dispatch(updateGrid({ location: "r6c4", value: value }));
        break;
      case "row6col5":
        dispatch(updateGrid({ location: "r6c5", value: value }));
        break;
      case "row6col6":
        dispatch(updateGrid({ location: "r6c6", value: value }));
        break;
      case "row6col7":
        dispatch(updateGrid({ location: "r6c7", value: value }));
        break;
      case "row6col8":
        dispatch(updateGrid({ location: "r6c8", value: value }));
        break;
      case "row6col9":
        dispatch(updateGrid({ location: "r6c9", value: value }));
        break;
      case "row7col1":
        dispatch(updateGrid({ location: "r7c1", value: value }));
        break;
      case "row7col2":
        dispatch(updateGrid({ location: "r7c2", value: value }));
        break;
      case "row7col3":
        dispatch(updateGrid({ location: "r7c3", value: value }));
        break;
      case "row7col4":
        dispatch(updateGrid({ location: "r7c4", value: value }));
        break;
      case "row7col5":
        dispatch(updateGrid({ location: "r7c5", value: value }));
        break;
      case "row7col6":
        dispatch(updateGrid({ location: "r7c6", value: value }));
        break;
      case "row7col7":
        dispatch(updateGrid({ location: "r7c7", value: value }));
        break;
      case "row7col8":
        dispatch(updateGrid({ location: "r7c8", value: value }));
        break;
      case "row7col9":
        dispatch(updateGrid({ location: "r7c9", value: value }));
        break;
      case "row8col1":
        dispatch(updateGrid({ location: "r8c1", value: value }));
        break;
      case "row8col2":
        dispatch(updateGrid({ location: "r8c2", value: value }));
        break;
      case "row8col3":
        dispatch(updateGrid({ location: "r8c3", value: value }));
        break;
      case "row8col4":
        dispatch(updateGrid({ location: "r8c4", value: value }));
        break;
      case "row8col5":
        dispatch(updateGrid({ location: "r8c5", value: value }));
        break;
      case "row8col6":
        dispatch(updateGrid({ location: "r8c6", value: value }));
        break;
      case "row8col7":
        dispatch(updateGrid({ location: "r8c7", value: value }));
        break;
      case "row8col8":
        dispatch(updateGrid({ location: "r8c8", value: value }));
        break;
      case "row8col9":
        dispatch(updateGrid({ location: "r8c9", value: value }));
        break;
      case "row9col1":
        dispatch(updateGrid({ location: "r9c1", value: value }));
        break;
      case "row9col2":
        dispatch(updateGrid({ location: "r9c2", value: value }));
        break;
      case "row9col3":
        dispatch(updateGrid({ location: "r9c3", value: value }));
        break;
      case "row9col4":
        dispatch(updateGrid({ location: "r9c4", value: value }));
        break;
      case "row9col5":
        dispatch(updateGrid({ location: "r9c5", value: value }));
        break;
      case "row9col6":
        dispatch(updateGrid({ location: "r9c6", value: value }));
        break;
      case "row9col7":
        dispatch(updateGrid({ location: "r9c7", value: value }));
        break;
      case "row9col8":
        dispatch(updateGrid({ location: "r9c8", value: value }));
        break;
      case "row9col9":
        dispatch(updateGrid({ location: "r9c9", value: value }));
        break;
      default:
        console.log("update rows and columns broken");
        break;
    }
  };
  const handleOnClick = () => {
    if (gridItemValue === 0) {
      setGridItemValue(1);
      dispatch(updateGrid({ location: colour, value: 0 }));
      updateRowsAndCols(position, 0);
    } else if (gridItemValue === 1) {
      setGridItemValue(2);
      dispatch(updateGrid({ location: colour, value: 1 }));
      updateRowsAndCols(position, 1);
    } else if (gridItemValue === 2) {
      setGridItemValue(0);
      dispatch(updateGrid({ location: colour, value: 0 }));
      updateRowsAndCols(position, 0);
    }
  };
  return (
    <>
      <ClickableSquare onClick={handleOnClick} colour={colour}>
        {gridItemValue === 0 ? (
          ""
        ) : gridItemValue === 1 ? (
          <Image
            alt="cross"
            src={cross}
            style={{
              height: "100%",
              maxHeight: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
          ></Image>
        ) : gridItemValue === 2 ? (
          <Image
            alt="maia"
            src={maia}
            style={{
              height: "100%",
              maxHeight: "100%",
              width: "100%",
              maxWidth: "100%",
            }}
          ></Image>
        ) : (
          "error"
        )}
      </ClickableSquare>
    </>
  );
}
