import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: #000;
  }
  html {
    font-size: 16px;
  }
  body{
    min-height: 100vh;
    width: 100vw;
    background-color: ${({ theme }) => theme.body};
  }
  .App, #root {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
  a {
    color: inherit;
    border: none;
  }
`