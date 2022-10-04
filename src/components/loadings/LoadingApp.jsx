import React from "react";
import { Logo } from "../../common/logo/Logo";
import { LogoStyled } from "../../common/logo/logo";
import { LoadingAppContainer } from "./LoadingAppStyles";

export const LoadingApp = () => {
  return (
    <LoadingAppContainer className="animate__animated animate__fadeIn">
      <Logo />
    </LoadingAppContainer>
  );
};
