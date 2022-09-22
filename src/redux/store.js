import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import uiSlice from "./slices/uiSlice";
import chatGroupsSlices from "./slices/chatGroupsSlices";

export const store = configureStore({
  reducer: {
    auth: userSlice,
    ui: uiSlice,
    chatGroups: chatGroupsSlices
  },
});
