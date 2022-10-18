import React from "react";
import { useDispatch } from "react-redux";
import { LogOutButton, OutlinedButton } from "../../common/button/Button";
import NotesCard from "../../components/Notes/NotesCard";
import { logOut } from "../../redux/thunks/authUserThunk";
import { startNewNote } from "../../redux/thunks/notesThunk";

import { LefSideBarStyled } from "./sideBarStyles";

const SideBard = () => {
  /* const [activeModal, setActiveModal] = useState(false) */
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  const handleNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <>
      <LefSideBarStyled>
        <header>
          <h1>Scriv</h1>
          <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
        </header>

        <NotesCard />

        <OutlinedButton onClick={handleNewNote}>
          Create new Scriv
        </OutlinedButton>
      </LefSideBarStyled>
    </>
  );
};

export default React.memo(SideBard);
