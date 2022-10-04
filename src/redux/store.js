import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";
import notesSlice from "./slices/notesSlice";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    ui: uiSlice,
    notes: notesSlice
  },
});
