import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: white;
    font-family: /*iOS*/ "AvenirNextCondensed-Bold", "Futura-CondensedExtraBold",
    /*MacOSX*/ HelveticaNeue-CondensedBold, /*Ubuntu*/ "Ubuntu Condensed",
    "Liberation Sans Narrow", /*Windows*/ "Franklin Gothic Demi Cond",
    "Arial Narrow", /*Android*/ sans-serif-condensed, /*Fallback*/ Arial,
    "Trebuchet MS", "Lucida Grande", Tahoma, Verdana, sans-serif;
  }
  h1 {
    line-height: 3.5rem;
  }
  html {

  }
`

export { GlobalStyles }
