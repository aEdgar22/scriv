import styled from "styled-components";

export const NoChatsContainer = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    color: ${({ theme }) => theme.colors.textInputColor};
  }
`;
