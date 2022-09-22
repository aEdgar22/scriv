import React from "react";
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
import { NoChats } from "../../components/noChats/NoChats";
import { logOut } from "../../redux/thunks/authUserThunk";
import { LeftSideBarTitle } from "./LeftSideBarStyled";

export const LeftSideBar = () => {
  /*   const { userName } = useSelector((state) => state.auth); */
  /*   const navigate = useNavigate(); */
  const dispatch = useDispatch();

  const handleLogout = () => {
    //handle del logout de la app
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
          <OutlinedButton>Create new chat group</OutlinedButton>

          <Button onClick={handleLogout}>log Out</Button>
        </ContainerButton>
      </ContainerLeftSideBar>
    </>
  );
};
