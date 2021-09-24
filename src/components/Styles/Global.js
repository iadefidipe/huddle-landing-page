import { createGlobalStyle } from "styled-components";

const GlobalStyles =  createGlobalStyle`

     @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&family=Poppins:wght@600&display=swap');

     *{
         box-sizing: border-box;
         margin: 0;
         padding: 0;
         font-size: 100%;
     }

     body{
         background: ${ ({theme}) => theme.colors.body };
         color: ${ ({theme}) => theme.colors.darkCyan };
         font-family: ${ ({theme}) => theme.font.openSans };
         font-size: 1.15em;
         margin: 0;
        }
    p{
            opacity: 0.6;
            line-height: 1.5;
        }

    img{
            max-width: 100%;
        }

`

export default GlobalStyles