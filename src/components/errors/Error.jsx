import React from "react";
import { ErrorStyled } from "./ErrorStyled";

export const Error = ({ children }) => {
  return (
    <ErrorStyled className="animate__animated animate__shakeX">
      {children}
    </ErrorStyled>
  );
};
