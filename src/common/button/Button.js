import styled from "styled-components";

//funcion para tomar colores dinamicamente
const getColor = (defaultColor) => (props) =>
  props.colors
    ? props.theme.colors[props.colors]
    : props.theme.colors[defaultColor];

//estilos por defecto Button
export const Button = styled.button`
  border-radius: 16px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 18px;
  width: ${({ size }) =>
    size === "sm" ? "16rem" : "lg" ? "16.5rem" : "10rem"};
  height: ${({ size }) =>
    size === "sm" ? "2.375rem" : "lg" ? "2.375rem" : "8rem"};
  padding: 6px 16px;
  text-align: center;
  transition-duration: 300ms;
`;

//estilos boton login y registro
export const LoginButton = styled(Button)`
  background-color: ${getColor("lilaColor")};
  color: ${getColor("mainColor")};

  &:active{
    background-color: ${({theme}) => theme.colors.activeButtonColor};
  }
`;

//estilos boton login con Google
export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor("lilaColor")};
  background: transparent;
  color: ${getColor("lilaColor")};
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
`;
