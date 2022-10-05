import { NoteItemStyled } from "./NotesStyled";
import moment from "moment";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../redux/slices/notesSlice";

export const NoteItem = ({ id, title, body, createdAt }) => {
  const dispatch = useDispatch();
  const textContent = body.substring(0, 15);

  const noteDate = moment(createdAt);

  const note = {
    id,
    title,
    body,
    createdAt,
  }

  const hanldeActive = () => {
    dispatch(
      setActiveNote({
        activeNote: note,
      })
    );
  };

  return (
    <NoteItemStyled onClick={hanldeActive}>
      <div className="note_body">
        <h4>{title}</h4>
        <span>{textContent}...</span>
      </div>

      <div className="note_date">
        <span>{noteDate.format("MMM")}</span>
        <h4>{noteDate.format("D")}</h4>
      </div>
    </NoteItemStyled>
  );
};
