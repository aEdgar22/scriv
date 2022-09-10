import styled from "styled-components";

//funcion para tomar colores dinamicamente
const getColor = (defaultColor) => (props) =>
  props.colors
    ? props.theme.colors[props.colors]
    : props.theme.colors[defaultColor];

export const Input = styled.input`
  background-color: ${getColor("bgInputColor")};
  border: transparent;
  border-radius: 16px;
  font-weight: 400;
  font-size: 16px;
  height: 52px;
  line-height: 22px;
  padding: 6px 16px;
  width: 80vw;
  color: ${getColor("textInputColor")};
  &:focus{
    outline: none;
  }

  @media (min-width: 768px) {
    width: 342px;
  }
`;
