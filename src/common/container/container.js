import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
`;

export const RowFlexContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: ${(props) =>
    props.sb ? "space-between" : props.sa ? "space-around" : "space-evenly"};
`;

export const ContainerInput = styled(Container)`
  margin-top: 3rem;
  row-gap: 1.375rem;
  padding-bottom: 2rem;

  @media (min-width: 768px) {
    border: solid 1px ${({ theme }) => theme.colors.borderBoxColor};
    border-radius: 8px;
    row-gap: 1.125rem;
    padding: 1.5rem;
    margin-top: 6rem;
  }
`;

export const ContainerButton = styled(Container)`

  row-gap: 0.75rem;

  @media (min-width: 768px) {
    padding: 1.5rem;
    row-gap: 1.25rem;
  }
`;
