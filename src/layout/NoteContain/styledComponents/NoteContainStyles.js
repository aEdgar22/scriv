import styled from "styled-components";

export const NoteContainer = styled.main`
  width: 70%;
  height: 100vh;
`;

export const NoteForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 90%;
  padding: 1rem;
  color: ${({ theme }) => theme.colors.inputTextColor};

  input,
  textarea {
    border: none;

    &:focus {
      outline: none;
    }
  }

  input {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.8rem;
  }

  textarea {
    font-size: 1.5rem;
    padding: 1rem;
    flex: 1 1 auto;
    resize: none;
  }
`;
