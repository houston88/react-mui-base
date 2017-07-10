import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: Roboto, 'Open Sans', sans-serif;
  }

  body.fontLoaded {
    font-family: Roboto, 'Open Sans', sans-serif;
  }

  #app {
    // background-color: #fafafa;
    background-color: #424242
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Roboto, 'Open Sans', sans-serif;
    line-height: 1.5em;
  }
`;
