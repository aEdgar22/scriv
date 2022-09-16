import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  msgError: null,
  isLoading: false,
};

const UI = createSlice({
  name: "UI",
  initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
    setError(state, action) {
      state.error = action.payload.error;
      state.msgError = action.payload.msgError;
    },
  },
});

export const { startLoading, finishLoading, setError } = UI.actions;

export default UI.reducer;
