import React, { useEffect } from "react";
import {
  Container,
  ContainerButton,
  ContainerInput,
} from "../../../common/container/container";
import { LogoStyled } from "../../../common/logo/logo";
import { useForm } from "../../../hooks/useForm";
import { Input } from "../../../common/inputs/Input";
import { LoginButton, OutlinedButton } from "../../../common/button/Button";
import { loginUserEmailPassword } from "../../../redux/thunks/authUserThunk";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const LoginScreen = () => {
  const { login, msgError } = useSelector((state) => state.user);
/* 
  console.log("login:" + login); */

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //utiliza hook useForm para manejar state de los inputs
  const [formValues, handleInputChange] = useForm({
    email: "abel@gmail.com",
    password: "123456",
  });

  //destructuro valores de formValues
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    //enviando informacion usuario a thunk de registro
    dispatch(loginUserEmailPassword(email, password));
  };

  useEffect(() => { // consultar useMemo
    login ? navigate("/") : navigate("/auth/login");

    console.log(msgError);
  }, [login, msgError, navigate]);

  return (
    <>
      <Container>
        <LogoStyled sm></LogoStyled>
        <p>Where and when you want.</p>
      </Container>

      <form onSubmit={handleLogin}>
        <ContainerInput>
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

          <ContainerButton>
            <OutlinedButton>Continue with Google</OutlinedButton>
            <LoginButton>Log in</LoginButton>
            <span>You don't have an account? Sign up </span>
          </ContainerButton>
        </ContainerInput>
      </form>
    </>
  );
};
