import React from "react";
import { LogoStyled } from "../../common/logo/logo";
import { LoadingAppContainer } from "./LoadingAppStyles";

export const LoadingApp = () => {
  return (
    <LoadingAppContainer className="animate__animated animate__fadeIn">
      <LogoStyled />
      <p>Where and when you want.</p>
    </LoadingAppContainer>
  );
};
