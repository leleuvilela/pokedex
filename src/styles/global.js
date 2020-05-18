import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

    * {
        box-sizing: border-box;
    }

    body {
        background: #EFEFBB;
        background: -webkit-linear-gradient(to right, #D4D3DD, #EFEFBB);
        background: linear-gradient(to right, #D4D3DD, #EFEFBB);

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Lato';
        margin: 0;
    }


    h1 {
        letter-spacing: 3px;
        text-align: center;
    }

    a {
      color: inherit;
      text-decoration: none;
      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }
`;

export default GlobalStyle;
