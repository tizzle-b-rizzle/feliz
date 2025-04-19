import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWorking: true,
};

const sudokuSlice = createSlice({
  name: "sudoku",
  initialState: initialState,
  reducers: {
    setIsWorking(state, { payload }) {
      state.isWorking = payload;
    },
    clearSudokuSlice() {
      return initialState;
    },
  },
});

export const { setIsWorking, clearSudokuSlice } = sudokuSlice.actions;
export default sudokuSlice.reducer;
