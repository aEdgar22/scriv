import React from "react";
import { useForm } from "../../../hooks/useForm";
import { registerUser } from "../../../redux/thunks/authUserThunk";
import { useDispatch } from "react-redux";
import { Input } from "../../../common/inputs/Input";
/* import { LoginButton, OutlinedButton } from "../../../common/button/Button"; */

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  //utiliza hook useForm para manejar state de los inputs
  const [formValues, handleInputChange] = useForm({
    email: "edgar2@gmail.com",
    password: "1234252",
    userName: "edgar",
  });

  //destructuro valores de formValues
  const { email, password, userName } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //enviando informacion usuario a thunk de registro
    dispatch(registerUser(email, password, userName));
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="your_email@company.ltd"
          onChange={handleInputChange}
          autoComplete="off"
        />


        <Input
          type="password"
          name="password"
          value={password}
          placeholder="password"
          onChange={handleInputChange}
          autoComplete="off"
        />

        <Input
          type="text"
          name="userName"
          value={userName}
          placeholder="User Name"
          onChange={handleInputChange}
          autoComplete="off"
        />

        {/*    <LoginButton size="lg">Sign In</LoginButton>
        <OutlinedButton size="lg">continue with Google</OutlinedButton> */}
      </form>
    </>
  );
};
