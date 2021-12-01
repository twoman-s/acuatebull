import styled from "styled-components";

// const GlobalStyle = createGlobalStyle`

// `

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 70px;
  padding-left: 70px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
