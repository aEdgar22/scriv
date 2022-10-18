import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "./AppBar";
import { NoteContainer, NoteForm } from "./styledComponents/NoteContainStyles";
import { useForm } from "../../hooks/useForm";
import React, { useEffect, useRef } from "react";
import { setActiveNote } from "../../redux/slices/notesSlice";
import { DeleteButton } from "../../common/button/Button";
import { deleteNote } from "../../redux/thunks/notesThunk";
import { useCallback } from "react";

const NoteScreen = () => {
  const dispatch = useDispatch();

  const { active: note } = useSelector((state) => state.notes); 

  const [formValues, handleInputChange, reset] = useForm(note);

  const { title, body } = formValues;

  const activeId = useRef(note.id);

  const handleDelete = useCallback(() =>{
    dispatch(deleteNote(note.id))
  }, [dispatch, note.id])

  useEffect(() => {
    if (activeId.current !== note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);


    useCallback(
      () => {
        dispatch(setActiveNote({ activeNote: { ...formValues } }));
      },
      [formValues, dispatch],
    )
    
   


  return (
    <NoteContainer className="animate__animated animate__fadeIn">
      <AppBar />

      <NoteForm>
        <input
          type="text"
          placeholder="Some Awesome Title"
          autoComplete="off"
          name="title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          placeholder="What Happend Today?"
          value={body}
          name="body"
          onChange={handleInputChange}
        ></textarea>
      </NoteForm>
      <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
    </NoteContainer>
  );
};

export default React.memo(NoteScreen)
