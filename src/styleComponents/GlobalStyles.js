import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--main-color);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    height: 100vh;
    width: 100%;
}
`;
