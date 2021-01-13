// my-theme.ts
import { DefaultTheme, createGlobalStyle } from "styled-components";

const myTheme: DefaultTheme = {
  borderRadius: "5px",

  colors: {
    gray: "#f7f9fc",
    yellow: "#f8d57e",
  },
};

export { myTheme };

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');
    body {
        font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }
`;
