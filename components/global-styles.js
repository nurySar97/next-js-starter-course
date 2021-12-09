import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: "Roboto", sans-serif;
      width: 100%;
      height: 100%;
      background-color: #252835;
      color: #fff;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    *, ::after, ::before {
      box-sizing: border-box;
    }
  `;
