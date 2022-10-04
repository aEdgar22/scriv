import { createNewNote } from "../../services/notes/createNewNote";
import { loadNotes, setActiveNote } from "../slices/notesSlice";

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
            note: newNote,
          },
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
};

export const setCurrentNotes = (notes) => {
  return async (dispatch) => {
    dispatch(
      loadNotes({
        notes: notes,
      })
    );
  };
};
