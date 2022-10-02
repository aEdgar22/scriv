import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, LogOutButton, OutlinedButton } from "../../common/button/Button";
import { InputLeftSideBar } from "../../common/inputs/Input";
import { Modal } from "../../components/modal/Modal";
import { NotesCard } from "../../components/Notes/NotesCard";
import { logOut } from "../../redux/thunks/authUserThunk";

import { LefSideBarStyled } from "./sideBarStyles";

export const SideBard = () => {

  const [activeModal, setActiveModal] = useState(false)
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
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

        <NotesCard/>
        <Modal
          active={activeModal}
          handleActive={setActiveModal}
        >
          <InputLeftSideBar placeholder="Title"/>
          <Button passcolor="red">Create</Button>
        </Modal>
        
        <OutlinedButton onClick={()=> setActiveModal(!activeModal)}>Create new Scriv</OutlinedButton>

     
      </LefSideBarStyled>
    </>
  );
};
