import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  active: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setActiveNote(state, action) {
      state.active = action.payload.activeNote;
    },
    loadNotes(state, action) {
      state.notes = action.payload.notes;
    },
    /* updateNotes(state, action) {
      state.notes = state.notes.map((note) => {
        note.id === action.payload.noteId ? action.payload.note : note;
      });
    }, */
    deleteNotes(state, action) {},

    logoutCleaning(state, action) {},
  },
});

export const { setActiveNote, loadNotes, updateNotes } = notesSlice.actions;

export default notesSlice.reducer;
