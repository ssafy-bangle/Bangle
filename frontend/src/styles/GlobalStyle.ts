import { createGlobalStyle } from 'styled-components';
import { ColorSystem } from './ColorSystems';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Bold.otf') format('otf');
  font-weight: 700;
}

@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Medium-.otf') format('otf');
  font-weight: 500;
}

@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Regular.otf') format('otf');
  font-weight: 400;
}

@font-face {
  font-family: 'NotoSansKR';
  font-style: normal;
  src: url('./fonts/NotoSansKR/NotoSansKR-Light.otf') format('otf');
  font-weight: 300;
}

${reset};
${ColorSystem};

html,
body {
  width: 100%;
  height: 100%;
  background-color: var(--BG_BLACK);
  color: var(--BG_WHITE);
  font-family: NotoSansKR;
}

#root {
  margin: 0 auto;
  font-size: 10px;
}

html {
  font-size: 54.8%;
}

* {
  box-sizing: border-box;
  font-family: NotoSansKR;
  color: var(--BG_WHITE);
}

button {
  cursor: pointer;
  border: none;
  outline: none;
  font-family: NotoSansKR;
}

a, a:visited {
  text-decoration: none;
  color: black;
}
`;

export default GlobalStyle;
