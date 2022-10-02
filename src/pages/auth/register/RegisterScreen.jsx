import React, { useEffect } from "react";

import { useForm } from "../../../hooks/useForm";
import { registerUser } from "../../../redux/thunks/authUserThunk";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "../../../common/inputs/Input";
import { LoginButton } from "../../../common/button/Button";
import {
  ContainerInput,
  ContainerButton,
} from "../../../common/container/container";
import { Link, useNavigate } from "react-router-dom";
import { setError } from "../../../redux/slices/uiSlice";
import { validForm } from "../../../helpers/validForm";
import { Error } from "../../../components/errors/Error";
import { Logo } from "../../../common/logo/Logo";

export const RegisterScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { uid } = useSelector((state) => state.auth);

  const { error, msgError } = useSelector((state) => state.ui);

  //utiliza hook useForm para manejar state de los inputs
  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
    userName: "",
  });
  const { email, password, userName } = formValues;

  const { stateError, errorForm, messgError } = validForm(
    userName,
    email,
    password
  );

  const handleLogin = (e) => {
    e.preventDefault();

    //validacion campos del formulario
    if (stateError === false) {
      dispatch(
        setError({
          error: errorForm,
          msgError: messgError,
        })
      );
    } else {
      //enviando informacion usuario a thunk de registro
      dispatch(registerUser(email, password, userName));

      //pasando errores
      dispatch(
        setError({
          error: false,
          msgError: null,
        })
      );
    }
  };

  useEffect(() => {
    // consultar useMemo
    uid ? navigate("/") : navigate("/auth/register");
  }, [uid, navigate]);

  return (
    <>
      <Logo />

      <form onSubmit={handleLogin} className="animate__animated animate__fadeIn">
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
          {error && <Error>{msgError}</Error>}

          <ContainerButton size="sizeContainerButton">
           
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
