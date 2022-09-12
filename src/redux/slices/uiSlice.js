import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  error: false,
  msgError: "",
  loading: false,
};

const UI = createSlice({
  name: "UI",
  initialState,
  reducers: {
    startLoadingCountries(state) {
      state.isLoading = true;
    },
    setError(state, action) {
      state.error = action.payload.error;
      state.msgError = action.payload.msgError;
    },
  },
});

export const { startLoadingCountries, setError } = UI.actions;

export default UI.reducer;
