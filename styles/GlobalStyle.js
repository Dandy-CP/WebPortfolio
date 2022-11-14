import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
  padding: 0;
  margin: 0;
  background-color: #000A1F;
  color: white;
  font-family: 'Be Vietnam Pro', sans-serif;
  scroll-behavior: smooth;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1200px;

  @media screen and (min-width: 767px) and (max-width: 1023px) {
    width: auto;
  }

  @media screen and (max-width: 766px) {
    width: 100%;
  }
`;
