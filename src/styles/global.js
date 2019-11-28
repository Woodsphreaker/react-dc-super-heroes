import { createGlobalStyle } from 'styled-components'

// import Image from '../assets/224562.jpg'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box
  }

  body, html, #root {
    max-height: 100%
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #000;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif
  }

  button {
    cursor: pointer
  }
`
