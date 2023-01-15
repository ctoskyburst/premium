import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
import { colors } from "./utils/styles";

const GlobalStyle = createGlobalStyle`
${normalize}

*,*::after,*::before{
    box-sizing: border-box;
}

  body {
    background-color: ${colors.black};
    font-family: 'Poppins', Helvetica, Arial, sans-serif;
    overflow-x: hidden;
    max-width: 2000px;
    margin: auto;
  }

  a{
    text-decoration: none;
    color: white;
  }

  li{
    list-style: none;
  }

  input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

  img{
    width: 100%;
  }
`;

export default GlobalStyle;
