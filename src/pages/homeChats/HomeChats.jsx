import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../../redux/thunks/authUserThunk";

export const HomeChats = () => {
  const { userName, uid } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  useEffect(() => {
    !uid && navigate("/auth/login");
  }, [uid, navigate]);

  return (
    <div>
      <h1>hola {userName}</h1>
      <button onClick={handleLogout}>log Out</button>
    </div>
  );
};
