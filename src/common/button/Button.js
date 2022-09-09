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
  font-weight: 600;
  font-size: 1.125rem;
  width: ${({ size }) =>
    size === "sm" ? "16rem" : "lg" ? "16.5rem" : "10rem"};
  height: ${({ size }) =>
    size === "sm" ? "2.375rem" : "lg" ? "2.375rem" : "8rem"};
  padding: 6px 16px;
  text-align: center;
`;

//estilos boton login y registro
export const LoginButton = styled(Button)`
  background-color: ${getColor("lilaColor")};
  color: ${getColor("mainColor")};
`;

//estilos boton login con Google
export const OutlinedButton = styled(Button)`
  border: 2px solid ${getColor("lilaColor")};
  background: transparent;
  color: ${getColor("lilaColor")};
`;
