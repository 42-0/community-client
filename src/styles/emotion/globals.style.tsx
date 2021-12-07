import { Global, css } from '@emotion/react';

const style = css`
  @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont,'Nanum Gothic', Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
`;

const GlobalsStyle = () => <Global styles={style} />;

export default GlobalsStyle;
