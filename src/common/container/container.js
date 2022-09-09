import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;

    p{
        display: none;

    }

    @media (min-width: 768px) {
        p{
            display: block;
            font-weight: ${({theme}) => theme.fontWeight.weightBlack};
            font-size: 40px;
            background: linear-gradient(180deg, #8D9CF4 38.89%, #7BCDD1 62.78%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }
`

export const ContainerInput = styled(Container)`
  margin-top: 3rem;
  row-gap: 1.375rem;
  width: 100%;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    row-gap: 1.125rem;
  }
`;

export const ContainerButton = styled(Container)`
  margin-top: 3rem;
  row-gap: 0.75rem;

  @media (min-width: 768px) {
    row-gap: 1.25rem;
  }
`;
