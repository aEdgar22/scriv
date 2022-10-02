import { NoteItem } from "./NoteItem";
import { NotesContainer } from "./NotesStyled";

export const NotesCard = () => {
  const notes = [];

  return (
    <>
      <NotesContainer>
        {notes.length === 0 ? (
          <>
 
            <p>Let's start creating great things!</p>
          </>
        ) : (
          notes.map((note) => <NoteItem key={note} />)
        )}
      </NotesContainer>
    </>
  );
};
