import styled from "styled-components"

export const Wrapper = styled.div`
    align-items: center;
    background-color: ${({theme}) => theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 7rem 1rem 0px;
    width: 100vw;


    @media (min-width: 768px) {
        column-gap: 224px;
        flex-direction: row;
        justify-content: center;
        padding: 0px 1rem 8rem;
    }
`
