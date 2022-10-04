import { AppBar } from "./AppBar";
import { NoteContainer, NoteForm } from "./styledComponents/NoteContainStyles";

export const NoteScreen = () => {
  return (
    <NoteContainer className="animate__animated animate__fadeIn">
      <AppBar />

      <NoteForm>
        <input
          type="text"
          placeholder="Some Awesome Title"
          autoComplete="off"
        />

        <textarea placeholder="What Happend Today?"></textarea>
      </NoteForm>
    </NoteContainer>
  );
};
