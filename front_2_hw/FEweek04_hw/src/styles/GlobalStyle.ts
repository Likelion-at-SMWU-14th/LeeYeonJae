import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  html, body, #root { min-height: 100%; }
  body {
    margin: 0;
    font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto,
      "Noto Sans KR", "Apple SD Gothic Neo", sans-serif;
    background: #f5f7fb;
    color: #182230;
  }
  button {
    font-family: inherit;
  }
`;

export default GlobalStyle;
