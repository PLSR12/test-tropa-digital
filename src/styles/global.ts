import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Roboto';
        src: url('./fonts/Roboto-Regular.woff2') format('woff2');
        src: url('./fonts/Roboto-Regular.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url('./fonts/Roboto-Bold.woff2') format('woff2');
        src: url('./fonts/Roboto-Bold.woff') format('woff');
        font-weight: bold;
        font-style: normal;
    }

    body {
        font-weight: 400;
        font-size: 1rem;
    }

    button { 
        cursor: pointer;
    }

    * {
        padding: 0;
        border: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif !important;
    }

  .ant-form-item-label > label {
    color: #d96b2b !important;
    font-weight: 700 !important;
    font-family: 'Roboto', sans-serif !important;
    font-size: 13px !important;
    line-height:15px; /* Isso define a altura da fonte */
  }

`;
