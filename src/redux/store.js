import { combineReducers, configureStore } from "@reduxjs/toolkit";
import homeSlice from "./homeSlice";
import minesweeperSlice from "./minesweeperSlice";
import queensSlice from "./queensSlice";
import sudokuSlice from "./sudokuSlice";
import tangoSlice from "./tangoSlice";

const rootReducers = combineReducers({
  home: homeSlice,
  minesweeper: minesweeperSlice,
  queens: queensSlice,
  sudoku: sudokuSlice,
  tango: tangoSlice,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
