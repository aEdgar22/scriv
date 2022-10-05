import { useDispatch, useSelector } from "react-redux";
import { startSaveNote   } from "../../redux/thunks/notesThunk";
import { NotesAppBar } from "./styledComponents/AppBarStyled";
import moment from "moment";

export const AppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);

  const noteDate = moment(note.createdAt);

  const handleSave = () => {
    dispatch(startSaveNote(note));

  };

  return (
    <NotesAppBar>
      <span>{noteDate.format( "D MMMM YYYY")}</span>

      <div>
        <button onClick={handleSave}>save scriv</button>
      </div>
    </NotesAppBar>
  );
};
