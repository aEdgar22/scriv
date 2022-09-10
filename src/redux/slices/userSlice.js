import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: null,
  userName: null,
  login: false,
  error: false,
  msgError: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.uid = action.payload.uid;
      state.userName = action.payload.userName;
      state.error = action.payload.error;
      state.msgError = action.payload.msgError;
      state.login = action.payload.login;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
