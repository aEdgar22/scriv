import React, { useEffect } from "react";
import validator from "validator";
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
import { setError } from "../../../redux/slices/uiSlice";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //tomando valores del store
  const { uid } = useSelector((state) => state.auth);
  const { error, msgError } = useSelector((state) => state.ui);

  //utiliza hook useForm para manejar state de los inputs
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
    userName: "",
  });
  const { email, password, userName } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    //validacion campos del formulario
    if (validForm()) {
      //enviando informacion usuario a thunk de registro
      dispatch(registerUser(email, password, userName));
      dispatch(
        setError({
          error: false,
          msgError: null,
        })
      );
    }
  };

  const validForm = () => {
    if (userName.trim().length === 0) {
      dispatch(
        setError({
          error: true,
          msgError: "name is required",
        })
      );
      return false;
    }

    if (!validator.isEmail(email)) {
      dispatch(
        setError({
          error: true,
          msgError: "email is invalid",
        })
      );
      return false;
    }

    if (password.length < 5) {
      dispatch(
        setError({
          error: true,
          msgError: "password should be at least 6 characters",
        })
      );
      return false;
    }

    return true;
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
