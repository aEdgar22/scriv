import styled from "styled-components";

export const NotesAppBar = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.lilaColor};
    padding: 10px 20px;

    span{
        color: ${({ theme }) => theme.colors.mainColor};
        font-size: 24px;
    }

`;