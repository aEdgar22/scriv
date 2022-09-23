import styled from "styled-components";
import urlLogo from "../../assets/logo.svg";

export const LogoStyled = styled.img`
  height: ${(props) => (props.sm ? "8rem" : "12rem")};
  width: ${(props) => (props.sm ? "8rem" : "12rem")};

  @media (min-width: 768px) {
    height: ${(props) => props.sm && "14rem"};
    width: ${(props) => props.sm && "14rem"};
  }
`;

LogoStyled.defaultProps = {
  src: urlLogo,
};
