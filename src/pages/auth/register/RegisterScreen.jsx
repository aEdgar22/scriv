import React from "react";
import { useForm } from "../../../hooks/useForm";
import { registerUser } from "../../../redux/thunks/authUserThunk";
import { useDispatch } from "react-redux";
import { Input } from "../../../common/inputs/Input";
import { LoginButton, OutlinedButton } from "../../../common/button/Button";
import { LogoStyled } from "../../../common/logo/logo";
import {
  Container,
  ContainerInput,
  ContainerButton,
} from "../../../common/container/container";

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  //utiliza hook useForm para manejar state de los inputs
  const [formValues, handleInputChange] = useForm({
    email: "abel@gmail.com",
    password: "123456",
    userName: "abel",
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
      <Container>
        <LogoStyled sm></LogoStyled>
        <p>Where and when you want.</p>
      </Container>

      <form onSubmit={handleLogin}>
        <ContainerInput size="sizeContainerInput">
          <Input
            type="text"
            name="userName"
            value={userName}
            placeholder="User Name"
            onChange={handleInputChange}
            autoComplete="off"
          />

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

          <ContainerButton size="sizeContainerButton">
            <OutlinedButton>Continue with Google</OutlinedButton>
            <LoginButton>Sign Up</LoginButton>
            <span>You don't have an account? Sign up </span>
          </ContainerButton>
        </ContainerInput>
      </form>
    </>
  );
};
