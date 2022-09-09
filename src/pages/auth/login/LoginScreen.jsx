import React from "react";
import { Container, ContainerButton, ContainerInput } from "../../../common/container/container";
import { LogoStyled } from "../../../common/logo/logo";
import { useForm } from "../../../hooks/useForm";
import {Input} from "../../../common/inputs/Input"
import { LoginButton, OutlinedButton } from "../../../common/button/Button";

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
