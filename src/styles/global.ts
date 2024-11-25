import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
     outline: none;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;

     &::-webkit-scrollbar {
       width: 8px;
       border-radius: 10px;
     }

     &::-webkit-scrollbar-thumb {
       border-radius: 10px;
       background-color: ${theme.colors.gray.light};
     }

     &::-webkit-scrollbar-track {
       border-radius: 10px;
       background-color: ${theme.colors.gray.background};
     }
   }
 `}

  html {
    font-size: 62.5%;

    button {
      border: none;
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default GlobalStyles;
