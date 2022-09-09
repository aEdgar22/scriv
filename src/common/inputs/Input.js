import styled from "styled-components";

//funcion para tomar colores dinamicamente
const getColor = (defaultColor) => (props) =>
  props.colors
    ? props.theme.colors[props.colors]
    : props.theme.colors[defaultColor];

export const Input = styled.input`
  padding: 6px 16px;
  width: 342px;
  height: 42px;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  border: transparent;
  background-color: ${getColor("bgInputColor")};
  color: ${getColor("textInputColor")};
  &:focus{
    outline: none;
  }
`;
