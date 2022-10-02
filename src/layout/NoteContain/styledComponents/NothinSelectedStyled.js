import styled from "styled-components";

export const NothingMainContent = styled.div`
        width: 70%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      
        h2{
            font-size: 60px;
            font-weight: 700;
            letter-spacing: 1px;
            span{
                color: ${({ theme}) => theme.colors.cyanColor};
            }
        }

        p{
            font-size: 20px;
            color: ${({ theme }) => theme.colors.textInputColor};
        }
        
`;