import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../pages/auth/login/LoginScreen";
import { RegisterScreen } from "../pages/auth/register/RegisterScreen";
import { Wrapper } from "../styleComponents/components/authContainerStyled";
import 'animate.css';

export const AuthRouter = () => {
  return (
    <>
      <Wrapper className="animate__animated animate__fadeIn">
        <Routes>
          {/* rutas hijas */}
          <Route path="/auth/login" element={<LoginScreen />} />
          <Route path="/auth/register" element={<RegisterScreen />} />
          <Route path="*" element={<Navigate replace to="/auth/login" />} />
        </Routes>
      </Wrapper>
    </>
  );
};
