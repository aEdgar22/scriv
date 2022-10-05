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
  color: #3d3d3d;
  font-weight: 600;
  font-size: 18px;
  width: 100%;
  padding: 6px 16px;
  text-align: center;
  transition-duration: 300ms;

`;

//estilos boton login y registro
export const LoginButton = styled(Button)`
  background-color: ${getColor("lilaColor")};
  color: ${getColor("mainColor")};

  &:active {
    background-color: ${({ theme }) => theme.colors.activeButtonColor};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeButtonColor};
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

export const BotonCerrar = styled(Button)`
  position: absolute;
  top: 0.8rem;
  right: 1.25rem;
  width: 1.875rem;
  height: 1.875rem;
  color: ${getColor("textInputColor")};
  background: none;
`;

export const DeleteButton = styled(Button)`
  background-color: #E63946;
  border-radius: 0px;
  color: ${({theme}) => theme.colors.mainColor};
  

`;

export const LogOutButton = styled(OutlinedButton)`
  width: 50%;
  max-width: 7.5rem;
  &:hover {
    background-color: ${({ theme }) => theme.colors.activeButtonColor};
    color: ${({ theme }) => theme.colors.mainColor};
  }
`;
