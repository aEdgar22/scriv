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
import {
  loginUserEmailPassword,
  loginWithGoogle,
} from "../../../redux/thunks/authUserThunk";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoGoogle from "../../../assets/google-logo.svg";

export const LoginScreen = () => {
  const { uid } = useSelector((state) => state.auth);

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
    //enviando informacion usuario a thunk de login
    dispatch(loginUserEmailPassword(email, password));
  };

  const handleGoogleLogin = (e) =>{
    e.preventDefault();
    dispatch(loginWithGoogle())
  }

  //efecto que escucha si hay uid navega a home o login
  useEffect(() => {
    // consultar useMemo
    uid ? navigate("/") : navigate("/auth/login");
  }, [uid, navigate]);

  return (
    <>
      <Container>
        <LogoStyled sm></LogoStyled>
        <p>Where and when you want.</p>
      </Container>

      <form onSubmit={handleLogin} >
        <ContainerInput>
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

          <ContainerButton>
            <OutlinedButton onClick={handleGoogleLogin}>
              <img src={LogoGoogle} alt="" />
              Continue with Google
            </OutlinedButton>
            <LoginButton>Log in</LoginButton>
            <span id="labelSignUp">
              You don't have an account?{" "}
              <Link id="linkSignUp" to="/auth/register">
                Sign Up
              </Link>{" "}
            </span>
          </ContainerButton>
        </ContainerInput>
      </form>
    </>
  );
};
