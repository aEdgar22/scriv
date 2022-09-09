import React from "react";
import { Container } from "../../../common/container/container";
import { LogoStyled } from "../../../common/logo/logo";
import { useForm } from "../../../hooks/useForm";


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
        <Container size="sizeContainerInput">
          <input
            type="email"
            name="email"
            value={email}
            placeholder="your_email@company.ltd"
            onChange={handleInputChange}
            autoComplete="off"
          />

          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleInputChange}
            autoComplete="off"
          />

          <Container size="sizeContainerButton">
            <button>Continue with Google</button>
            <button>Log in</button>
            <span>You don't have an account? Sign up </span>
          </Container>

        </Container>
      </form>
    </>
  );
};
