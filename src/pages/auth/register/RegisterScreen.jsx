import React, { useEffect } from "react";
import { useForm } from "../../../hooks/useForm";
import { registerUser } from "../../../redux/thunks/authUserThunk";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../common/inputs/Input";
import { LoginButton, OutlinedButton } from "../../../common/button/Button";
import { LogoStyled } from "../../../common/logo/logo";
import {
  Container,
  ContainerInput,
  ContainerButton,
} from "../../../common/container/container";
import LogoGoogle from "../../../assets/google-logo.svg";
import { Link, useNavigate } from "react-router-dom";

export const RegisterScreen = () => {
  const { uid } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  useEffect(() => {
    // consultar useMemo
    uid ? navigate("/") : navigate("/auth/register");
  }, [uid, navigate]);

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
            placeholder="Email"
            onChange={handleInputChange}
            autoComplete="off"
          />

          <Input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleInputChange}
            autoComplete="off"
          />

          <ContainerButton size="sizeContainerButton">
            <OutlinedButton>
              <img src={LogoGoogle} alt="" />
              Continue with Google
            </OutlinedButton>
            <LoginButton>Sign Up</LoginButton>
            <span id="labelSignUp">
              Already have an account?{" "}
              <Link id="linkSignUp" to="/auth/login">
                Log In
              </Link>{" "}
            </span>
          </ContainerButton>
        </ContainerInput>
      </form>
    </>
  );
};
