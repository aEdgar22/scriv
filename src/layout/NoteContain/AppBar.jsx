import { useDispatch, useSelector } from "react-redux";
import { startSaveNote } from "../../redux/thunks/notesThunk";
import { NotesAppBar } from "./styledComponents/AppBarStyled";

export const AppBar = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const handleSave = () => {
    dispatch(startSaveNote(note));
  };

  return (
    <NotesAppBar>
      <span>22 September of 2022</span>

      <div>
        <button onClick={handleSave}>save scriv</button>
      </div>
    </NotesAppBar>
  );
};
