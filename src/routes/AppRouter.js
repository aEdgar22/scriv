import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HomeChats } from "../pages/homeChats/HomeChats";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* rutas iniciales */}

        <Route path="/*" element={<AuthRouter />} />
        <Route path="/" element={<HomeChats />} />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </Router>
  );
};
