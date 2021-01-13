import React from "react";
import { ThemeProvider } from "styled-components";
import { myTheme, GlobalStyle } from "./../src/styled.theme";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}; // .storybook/preview.js

export const decorators = [
  (Story) => (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];
