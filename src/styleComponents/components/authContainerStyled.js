import styled from "styled-components"

export const Wrapper = styled.div`
    
    border: dashed darkred;
    
    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.mainColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
