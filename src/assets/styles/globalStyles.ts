import { createGlobalStyle } from 'styled-components';
import { SIZES } from './mediaQueries';

export const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.theme.font};
  }
  html {
    font-size: 14px;
    @media only screen and ${SIZES.tablet} {
      font-size: 16px;
    }
  }
  body{
    min-height: 100vh;
    width: 100%;
    background: ${props => props.theme.body};
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
  .MuiButton-label {
    color: #fff;
  }
`;
