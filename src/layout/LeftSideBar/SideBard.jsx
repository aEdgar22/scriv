import { useDispatch } from "react-redux";
import { LogOutButton, OutlinedButton } from "../../common/button/Button";
import { InputLeftSideBar } from "../../common/inputs/Input";
import { NotesCard } from "../../components/Notes/NotesCard";
import { logOut } from "../../redux/thunks/authUserThunk";
import { startNewNote } from "../../redux/thunks/notesThunk";

import { LefSideBarStyled } from "./sideBarStyles";

export const SideBard = () => {
  /* const [activeModal, setActiveModal] = useState(false) */
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleNewNote = () => {
    dispatch( startNewNote());
  };

  return (
    <>
      <LefSideBarStyled>
        <header>
          <h1>Scriv</h1>
          <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
        </header>

        <InputLeftSideBar
          type="text"
          name="searchNote"
          placeholder="Search scriv"
        />

        <NotesCard />

        {/*   
        <Modal
          active={activeModal}
          handleActive={setActiveModal}
        >
          <InputLeftSideBar placeholder="Title"/>
          <Button passcolor="red">Create</Button>
        </Modal> */}

        <OutlinedButton onClick={handleNewNote}>
          Create new Scriv
        </OutlinedButton>
      </LefSideBarStyled>
    </>
  );
};
