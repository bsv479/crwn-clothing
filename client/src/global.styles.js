import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 19px;
    padding: 40px 30px;

    @media screen and (max-width: 800px) {
      padding: 10px;
    }
  }

  a {
    text-decoration: none;
    color: #626767;
  }

  h1 {
    text-align: center;
    color: #626767;
  }
`;
