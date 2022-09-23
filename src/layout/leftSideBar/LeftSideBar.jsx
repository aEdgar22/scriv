import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, OutlinedButton } from "../../common/button/Button";
import {
  ContainerButton,
  ContainerLeftSideBar,
  GroupChatContainer,
} from "../../common/container/container";
import { InputLeftSideBar } from "../../common/inputs/Input";
import { GroupChat } from "../../components/Groups/GroupChat";
import { Modal } from "../../components/modal/Modal";
import { Contenido } from "../../components/modal/modalStyled";
import { NoChats } from "../../components/noChats/NoChats";
import { logOut } from "../../redux/thunks/authUserThunk";
import { LeftSideBarTitle } from "./LeftSideBarStyled";

export const LeftSideBar = () => {
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <ContainerLeftSideBar>
        <LeftSideBarTitle>Scriv</LeftSideBarTitle>
        <InputLeftSideBar placeholder="Search" />

        <NoChats />

        {/*  <GroupChatContainer>
          <GroupChat />
        </GroupChatContainer> */}

        <ContainerButton>
          <OutlinedButton
            onClick={() => setModalActive(!modalActive)}
            
          >Create new chat group</OutlinedButton>

          <Button onClick={handleLogout}>log Out</Button>
        </ContainerButton>

        <Modal
          active={modalActive}
          handleActive={setModalActive}
        >
          <Contenido>
            <InputLeftSideBar type="text" placeholder="Nombre" />
            <OutlinedButton>aceptar</OutlinedButton>
          </Contenido>
        </Modal>
      </ContainerLeftSideBar>
    </>
  );
};
