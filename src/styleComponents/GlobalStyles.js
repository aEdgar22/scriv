import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: ${({ theme }) => theme.colors.mainColor};
    color: ${({ theme }) => theme.colors.textColor};
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    height: auto;
    width: 100%;
}

img{
    height: 18px;
    width: 18px;
}

#labelSignUp{
    color: ${({ theme }) => theme.colors.textInputColor};
}

#linkSignUp{
    color: ${({ theme }) => theme.colors.lilaColor};
    font-weight: ${({ theme }) => theme.fontWeight.weightBold};
    text-decoration: none;
    transition-duration: 300ms;

    &:hover{
        color: ${({ theme }) => theme.colors.activeButtonColor};
    }
}
`;
