import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HomeChats } from "../pages/homeChats/HomeChats";
import { AuthRouter } from "./AuthRouter";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { ProtectedRoute } from "./ProtectedRoute";
import "animate.css";
import { LoadingApp } from "../components/loadings/LoadingApp";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(
          setUser({
            uid: user.uid,
            userName: user.displayName,
          })
        );
      }
      setChecking(false);
    });
  }, [dispatch]);

  if (checking) {
    return <LoadingApp />;
  }

  return (
    <Router>
      <Routes>
        {/* rutas iniciales */}

        <Route path="/*" element={<AuthRouter />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomeChats />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </Router>
  );
};
