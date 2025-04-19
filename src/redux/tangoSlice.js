import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  grid: {
    r1c1: 0,
    r1c2: 0,
    r1c3: 0,
    r1c4: 0,
    r1c5: "fixedMoon",
    r1c6: 0,
    r2c1: "fixedSun",
    r2c2: 0,
    r2c3: "fixedSun",
    r2c4: "fixedSun",
    r2c5: 0,
    r2c6: 0,
    r3c1: 0,
    r3c2: 0,
    r3c3: 0,
    r3c4: 0,
    r3c5: 0,
    r3c6: "fixedSun",
    r4c1: 0,
    r4c2: "fixedMoon",
    r4c3: 0,
    r4c4: "fixedMoon",
    r4c5: 0,
    r4c6: 0,
    r5c1: 0,
    r5c2: "fixedMoon",
    r5c3: 0,
    r5c4: 0,
    r5c5: 0,
    r5c6: "fixedSun",
    r6c1: "fixedSun",
    r6c2: 0,
    r6c3: 0,
    r6c4: 0,
    r6c5: 0,
    r6c6: 0,
  },
};

const tangoSlice = createSlice({
  name: "tango",
  initialState: initialState,
  reducers: {
    updateGrid(state, { payload }) {
      state.grid[payload.location] = payload.value;
    },
    clearTangoSlice() {
      return initialState;
    },
  },
});

export const { updateGrid, clearTangoSlice } = tangoSlice.actions;
export default tangoSlice.reducer;
