import styled from "styled-components";

export const LefSideBarStyled = styled.aside`
  width: 30%;
  height: 100%;
  padding: 1rem 3rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
  border-right: 2px solid ${({ theme }) => theme.colors.lilaColor};
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 1px 0px 15px 1px ${({ theme }) => theme.colors.lilaColor};
  

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;

  /*   &::after {
      content: "";
      position: absolute;
      top: 18px;
      left: 0;
      width: 30%;
      height: 4rem;
      border-bottom: 2px solid #3D3D3D3D;
    } */
  }
  h1 {
    font-weight: 700;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.cyanColor};
  }

  h3 {
    font-weight: 600;
    line-height: 36px;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
