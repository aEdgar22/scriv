import React from "react";
import { useDispatch } from "react-redux";
import { OutlinedButton } from "../../common/button/Button";
import {
  ContainerLeftSideBar,
  GroupChatContainer,
} from "../../common/container/container";
import { InputLeftSideBar } from "../../common/inputs/Input";
import { GroupChat } from "../../components/Groups/GroupChat";
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
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />
          <GroupChat />

        </GroupChatContainer> */}

        <OutlinedButton>Create new chat group</OutlinedButton>

        <button onClick={handleLogout}>log Out</button> 
      </ContainerLeftSideBar>
    </>
  );
};
