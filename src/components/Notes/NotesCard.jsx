import { useSelector } from "react-redux";
import { InputLeftSideBar } from "../../common/inputs/Input";
import { NoteItem } from "./NoteItem";
import { NotesContainer } from "./NotesStyled";
import { useForm } from "../../hooks/useForm";

export const NotesCard = () => {
  const { notes } = useSelector((state) => state.notes);

  const [formValues, handleInputChange] = useForm({
    searchNote: "",
  });

  const { searchNote } = formValues;

  const searchingNote = (searchNote) => {
    return function(note){
     return note.title.includes(searchNote) || !searchNote;
    }
  }

  return (
    <>
      <NotesContainer>
        { notes.length !== 0 && <InputLeftSideBar
          type="text"
          name="searchNote"
          value={searchNote}
          onChange={handleInputChange}
          placeholder="Search scriv"
        />}

        {notes.length === 0 ? (
          <>
            <p>Let's start creating great things!</p>
          </>
        ) : (
          notes.filter(searchingNote(searchNote)).map((note) => <NoteItem key={note.id} {...note} />)
        )}
      </NotesContainer>
    </>
  );
};
