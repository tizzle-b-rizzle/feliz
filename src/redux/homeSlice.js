import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showMessage: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    setShowMessage(state, { payload }) {
      state.showMessage = payload;
    },
    clearHomeSlice() {
      return initialState;
    },
  },
});

export const { setShowMessage, clearHomeSlice } = homeSlice.actions;
export default homeSlice.reducer;
