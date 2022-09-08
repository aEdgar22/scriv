import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { LoginScreen } from "../pages/auth/login/LoginScreen";
import { RegisterScreen } from "../pages/auth/register/RegisterScreen";

export const AuthRouter = () => {
  return (
    <>
      <Routes>
        {/* rutas hijas */}
        <Route path="/auth/login" element={<LoginScreen />} />
        <Route path="/auth/register" element={<RegisterScreen />} />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </>
  );
};
