import React from "react";
import { useSelector } from "react-redux";
import { LogoStyled } from "../../common/logo/logo";
import { NothingMainContent } from "./styledComponents/NothinSelectedStyled";

export const NothingSelected = () => {
  const { userName } = useSelector((state) => state.auth);

  return (
    <NothingMainContent>
      <h2>
        Hello <span>{userName}</span> !
      </h2>
      <p>¿ What do you want to create today ?</p>
      <LogoStyled />
    </NothingMainContent>
  );
};
