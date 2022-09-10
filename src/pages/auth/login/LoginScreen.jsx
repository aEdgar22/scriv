import React from "react";
import { Container, ContainerButton, ContainerInput } from "../../../common/container/container";
import { LogoStyled } from "../../../common/logo/logo";
import { useForm } from "../../../hooks/useForm";
import {Input} from "../../../common/inputs/Input"
import { LoginButton, OutlinedButton } from "../../../common/button/Button";
import LogoGoogle from "../../../assets/google-logo.svg";
import {Link} from 'react-router-dom';

export const LoginScreen = () => {

    //utiliza hook useForm para manejar state de los inputs
    const [formValues, handleInputChange] = useForm({
      email: "edgar2@gmail.com",
      password: "1234252",
      userName: "edgar",
    });

    //destructuro valores de formValues
    const { email, password} = formValues;


  return (
    <>
      <Container>
        <LogoStyled sm></LogoStyled>
        <p>Where and when you want.</p>
      </Container>

      <form>
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
            <OutlinedButton>
              <img src={LogoGoogle} alt=""/>
              Continue with Google
              </OutlinedButton>
            <LoginButton>Log in</LoginButton>
            <span id="labelSignUp">You don't have an account? <Link id="linkSignUp" to='/auth/register'>Sign Up</Link> </span>
          </ContainerButton>

        </ContainerInput>
      </form>
    </>
  );
};
