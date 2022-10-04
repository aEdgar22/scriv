import styled from "styled-components";

export const NotesAppBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.lilaColor};
  padding: 10px 40px;

  span {
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 24px;
  }

  button {
    width: 8rem;
    height: 2rem;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.mainColor};
    font-size: 1.5rem;
    font-weight: 600;
    cursor: pointer;
  }
`;
