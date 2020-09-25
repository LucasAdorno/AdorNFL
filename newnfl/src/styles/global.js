import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Poppins', sans-serif;
  }
  body {
    -webkit-font-smoothing: antialiased;
    background: #fafafa;
  }
  button {
    cursor: pointer;
  }
`;