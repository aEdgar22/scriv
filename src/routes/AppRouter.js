import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AuthRouter } from "./AuthRouter";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { ProtectedRoute } from "./ProtectedRoute";
import "animate.css";
import { LoadingApp } from "../components/loadings/LoadingApp";
import { HomeScreen } from "../pages/home/HomeScreen";
import { loadNotesFirestore } from "../services/notes/loadNotes";
import { setCurrentNotes } from "../redux/thunks/notesThunk";

export const AppRouter = () => {
  const [checking, setChecking] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        const notes = await loadNotesFirestore(user.uid);
        dispatch(setCurrentNotes(notes));
        
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
              <HomeScreen />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate replace to="/auth/login" />} />
      </Routes>
    </Router>
  );
};
