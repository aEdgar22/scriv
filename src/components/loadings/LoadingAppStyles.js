import styled from "styled-components";

export const LoadingAppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
 

  p {
    text-align: center;
    width: 270px;
    height: fit-content;
    font-weight: ${({ theme }) => theme.fontWeight.weightBlack};
    font-size: 40px;
    background: linear-gradient(180deg, #8d9cf4 38.89%, #7bcdd1 62.78%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;
