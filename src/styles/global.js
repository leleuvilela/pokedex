import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
    }

    body, .App {
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

    #root {
      width: 100%;
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

    .link{
      display: inline-block;
      font-weight: 400;
      color: #212529;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      background-color: transparent;
      border: 1px solid transparent;
      padding: .375rem .75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: .25rem;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      font-weight: 400;
      color: #007bff;
      text-decoration: none;
    }
`;

export default GlobalStyle;
