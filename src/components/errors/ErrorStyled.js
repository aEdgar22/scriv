import styled from "styled-components";

export const ErrorStyled = styled.p`
    border: 1px solid red;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.errorColor};
    color: ${({ theme }) => theme.colors.mainColor};
    font-weight: 500;
    width: 100%;
    height: auto;
    padding: 0.4rem;
    text-align: center;
`;