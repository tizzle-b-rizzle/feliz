import { useState } from "react";
import { InputSquare } from "./Sudoku.elements";
export default function SudokuGridItem(props) {
  const [inputValue, setInputValue] = useState(props.value);
  const handleChange = () => {
    console.log("hi");
  };
  // const handleChange = (number) => {
  //   if (props.fixed === true) {
  //     console.log("fixed is true");
  //     return false;
  //   } else {
  //     console.log("fixed is false");
  //     setInputValue(4);
  //   }
  // };
  return (
    <InputSquare
      type="number"
      inputMode="numeric"
      value={inputValue}
      onChange={props.onChange}
    />
  );
}
