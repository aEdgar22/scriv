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

    deleteNoteReducer(state) {
      state.active = null;
    },

    logoutCleaning(state) {
      state.active = null;
      state.notes = [];
    },
  },
});

export const { setActiveNote, loadNotes, updateNotes, logoutCleaning, deleteNoteReducer } = notesSlice.actions;

export default notesSlice.reducer;
