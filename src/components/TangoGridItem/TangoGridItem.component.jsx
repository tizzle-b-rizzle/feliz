import { useState } from "react";
import { useDispatch } from "react-redux";
import Image from "next/image";
import { ClickableSquare } from "./TangoGridItem.elements";
import sun from "../../../public/assets/sun.png";
import moon from "../../../public/assets/moon.png";
import { updateGrid } from "@/redux/tangoSlice";

export default function TangoGridItem({ pictureValue, fixed, position }) {
  const dispatch = useDispatch();
  const [gridItemValue, setGridItemValue] = useState(pictureValue);
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
      default:
        console.log("update rows and columns broken");
        break;
    }
  };
  const handleOnClick = () => {
    if (fixed === true) {
      return false;
    } else if (gridItemValue === 0) {
      setGridItemValue(1);
      updateRowsAndCols(position, 1);
    } else if (gridItemValue === 1) {
      setGridItemValue(2);
      updateRowsAndCols(position, 2);
    } else if (gridItemValue === 2) {
      setGridItemValue(0);
      updateRowsAndCols(position, 0);
    }
  };
  return (
    <ClickableSquare
      onClick={handleOnClick}
      fixed={fixed === true ? "true" : "false"}
    >
      {gridItemValue === 0 ? (
        "empty"
      ) : gridItemValue === 1 || gridItemValue === "fixedSun" ? (
        <Image
          alt="sun"
          src={sun}
          style={{
            height: "100%",
            maxHeight: "100%",
            width: "100%",
            maxWidth: "100%",
          }}
        ></Image>
      ) : gridItemValue === 2 || gridItemValue === "fixedMoon" ? (
        <Image
          alt="moon"
          src={moon}
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
  );
}
