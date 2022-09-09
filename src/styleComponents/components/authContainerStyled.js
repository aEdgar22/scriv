import styled from "styled-components"

export const Wrapper = styled.div`
    height: auto;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7rem;
    padding: 7rem 1rem 0px;
`
