import React, { useEffect } from "react";
import {
  ContainerButton,
  ContainerInput,
} from "../../../common/container/container";
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
import { Error } from "../../../components/errors/Error";
import { setError } from "../../../redux/slices/uiSlice";
import { Logo } from "../../../common/logo/Logo";

export const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { uid } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.ui);
  const { error, msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "",
    password: "",
  });
  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(loginUserEmailPassword(email, password));

    dispatch(
      setError({
        error: false,
        msgError: null,
      })
    );
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    dispatch(loginWithGoogle());
  };

  useEffect(() => {
    uid ? navigate("/") : navigate("/auth/login");
  }, [uid, navigate]);

  return (
    <>
      <Logo />

      <form onSubmit={handleLogin} className="animate__animated animate__fadeIn">
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

          {error && <Error>{msgError}</Error>}

          <ContainerButton>
            <OutlinedButton onClick={handleGoogleLogin}>
              <img src={LogoGoogle} alt="" />
              Continue with Google
            </OutlinedButton>
            <LoginButton disabled={isLoading}>Log in</LoginButton>
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
