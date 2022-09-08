import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

:root {
    /* Color */
    --aquamarine-color: #7BCDD1;
    --border-box-color: rgba(95, 95, 95, 0.2);
    --border-input-color-warning: #E63946;
    --bg-input-color: rgba(0, 0, 0, 0.02);
    --cyan-color: #04A6C2;
    --lila-color: #8D9CF4;
    --main-color: #fff;
    --text-color: #262626;
    --text-input-color: #8E8E93;

    /* FontWeight */
    --weight-regular: 400;
    --weight-medium: 500;
    --weight-semibold: 600;
    --weight-bold: 700;
}

body {
    background-color: var(--main-color);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    height: 100vh;
    width: 100%;
}
`;
