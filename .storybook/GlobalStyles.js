import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Mulish&display=swap');
  *,*::after, *::before {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  :root {
    --primary-font: 'Mulish', sans-serif;
    --primary-color: #8200ff;
    --white-color: #fff;
    --font-color: #000000aa;
    
    box-sizing: border-box;
  }
  
  body {
    font-family: var(--primary-font);
  }
  
`;

export default GlobalStyles;
