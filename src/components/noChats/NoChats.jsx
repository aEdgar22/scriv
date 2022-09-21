import React from "react";
import { LogoStyled } from "../../common/logo/logo";
import { NoChatsContainer } from "./NoChatsStyles";

export const NoChats = () => {
  return (
    <NoChatsContainer>
      <LogoStyled />
      <h3>¡Let's start chatting!</h3>
    </NoChatsContainer>
  );
};
