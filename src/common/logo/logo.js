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

export const TextLogo = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: block;
    text-align: center;
    letter-spacing: 2px;
    width: 16rem;

    
    height: fit-content;
    font-weight: ${({ theme }) => theme.fontWeight.weightBlack};
    font-size: 40px;
    background: linear-gradient(180deg, #8d9cf4 38.89%, #7bcdd1 62.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

LogoStyled.defaultProps = {
  src: urlLogo,
};
