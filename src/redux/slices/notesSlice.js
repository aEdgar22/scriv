import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  active: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNewNote(state, action) {},
    setActiveNote(state, action) {
      state.active = action.payload.activeNote;
    },
    loadNotes(state, action) {
      state.notes = action.payload.notes;
    },
    updateNotes(state, action) {},
    deleteNotes(state, action) {},
    logoutCleaning(state, action) {},
  },
});

export const {setActiveNote, loadNotes} = notesSlice.actions;

export default notesSlice.reducer;
