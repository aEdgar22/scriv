import styled from "styled-components";

export const Container = styled.div`

    border: dashed darkgreen;

    display: flex;
    flex-direction: column;

    width: ${({ size }) =>
    size === "sizeContainerButton" ? "16rem" : "sizeContainerInput" ? "21.375" : "24.375"};

    height: ${({ size }) =>
    size === "sizeContainerButton" ? "8.375" : "sizeContainerInput" ? "12" : "27.375"};
`