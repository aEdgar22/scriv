import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../common/container/container";
import { Input } from "../common/inputs/Input";
import { GroupChat } from "../components/Groups/GroupChat";
import { logOut } from "../redux/thunks/authUserThunk";

export const LeftSideBar = () => {
/*   const { userName } = useSelector((state) => state.auth); */
  /*   const navigate = useNavigate(); */
  const dispatch = useDispatch();

  const handleLogout = () => {
    //handle del logout de la app
    dispatch(logOut());
  };
  return (
    <>
      <h1>Scriv</h1>

      <Input placeholder="Search" />

      <Container>
        <GroupChat/>
      </Container>
      <button onClick={handleLogout}>log Out</button>
    </>
  );
};
