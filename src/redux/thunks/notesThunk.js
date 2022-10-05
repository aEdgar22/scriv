import Swal from "sweetalert2";
import { createNewNote } from "../../services/notes/createNewNote";
import { deleteNoteFromFirestore } from "../../services/notes/deleteNoteFromFirestore";
import { loadNotesFirestore } from "../../services/notes/loadNotes";
import { saveNote } from "../../services/notes/saveNote";
import {
  deleteNoteReducer,
  loadNotes,
  setActiveNote,
} from "../slices/notesSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    try {
      const uid = getState().auth.uid;

      const newNote = {
        title: "",
        body: "",
        createdAt: new Date().getTime(),
      };

      const respDoc = await createNewNote(newNote, uid);

      dispatch(
        setActiveNote({
          activeNote: {
            id: respDoc.id,
            ...newNote,
          },
        })
      );
    } catch (error) {
      Promise.reject(error);
    }
  };
};

export const setCurrentNotes = (notes) => {
  return (dispatch) => {
    dispatch(
      loadNotes({
        notes: notes,
      })
    );
  };
};

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const noteToFirebase = { ...note };
    delete noteToFirebase.id;
    const resp = await saveNote(note.id, uid, noteToFirebase);

    Swal.fire("Saved Scriv", note.title, "success");

    if (resp) {
      const notes = await loadNotesFirestore(uid);
      dispatch(setCurrentNotes(notes));
    }
  };
};

export const deleteNote = (noteId) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const resp = await deleteNoteFromFirestore(noteId, uid);
    Swal.fire("Deleted Scriv", "success");

    if (resp) {
      const notes = await loadNotesFirestore(uid);
      dispatch(setCurrentNotes(notes));
      dispatch(deleteNoteReducer());
    }
  };
};
