import styled from "styled-components";

export const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 80%;
  height: auto;
  background: #fff;
  position: relative;
  border-radius: 8px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 1rem;
`;

export const EncabezadoModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
  padding-bottom: 0.8rem;
  border-bottom: 2px solid #e8e8ee;

  h3 {
    font-weight: 500;
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.textInputColor };
  }
`;


export const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;