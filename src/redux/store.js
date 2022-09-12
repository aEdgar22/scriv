import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    ui: uiSlice,
  },
});
