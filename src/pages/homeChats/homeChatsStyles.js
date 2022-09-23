import styled from "styled-components";

export const HomeChatsWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;

  .home {
    width: 60%;
    height: 100vh;
    background-color: green;
    display: none;
  }
  .right {
    width: 30%;
    height: 100vh;
    background-color: grey;
    display: none;
  }

  @media (min-width: 768px) {
    .home {
      display: block;
    }
    .right {
      display: block;
    }
  }
`;
