import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    color: ${({ theme }) => theme.colors.gray200};
    font-family: Pretendard;
    font-size: 62.5%;
  }

  body {
    width: 144rem;
    height: 100%;
    margin: 0 auto;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;
  }

  button {
    padding: 0;
    cursor: pointer;
  }

  input {
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    appearance: none;

    &:focus {
      outline: none;
    }
  }

  textarea {
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
  }

  input:focus::-webkit-input-placeholder, 
  textarea:focus::-webkit-input-placeholder { 
    /* WebKit browsers */ 
    color:transparent; 
  } 
  input:focus:-moz-placeholder, 
  textarea:focus:-moz-placeholder { 
    /* Mozilla Firefox 4 to 18 */ 
    color:transparent; 
  } 
  input:focus::-moz-placeholder, 
  textarea:focus::-moz-placeholder { 
    /* Mozilla Firefox 19+ */ 
    color:transparent; 
  } 
  input:focus:-ms-input-placeholder, 
  textarea:focus:-ms-input-placeholder {
    /* Internet Explorer 10+ */ 
    color:transparent; 
  }
`;

export default GlobalStyle;
