import styled from "styled-components";

export const NotesContainer = styled.div`
  width: 100%;
  height: 50%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1rem;
  padding: 1rem;
  border: solid 1px ${({ theme }) => theme.colors.borderBoxColor};
  border-radius: 8px;

  p {
    font-size: 24px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.textInputColor};
  }
`;

export const NoteItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem 0;
  width: 100%;
  border: solid 1px ${({ theme }) => theme.colors.lilaColor};
  border-radius: 10px;
  cursor: pointer;

  .note_body,
  .note_date {
    display: flex;
    flex-direction: column;
    width: 60%;
    flex-wrap: wrap;
    align-items: center;
    padding: 5px;
  }

  .note_body h4 {
    color: #3d3d3d;
  }

  .note_date {
    width: 20%;
    color: #3d3d3d;
  }
`;
