import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root{
      --white: #fff;
      --background: #f2f3f5;
      --gray-line: #dcdde0;
      --text: #666666;
      --text-highlight: #b3b9ff;
      --title: #2e384d;
      --red: #e83f5b;
      --green: #4cd62b;
      --blue: #5965e0;
      --blue-dark: #4953b8;
      --blue-twitter: #2aa9e0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    &::-webkit-scrollbar {
      display: none;
    }

    @media(max-width: 1080px){
      body{
        min-width: 820px;
      }
      html{
          font-size: 93.75%;
      }
    }
    @media(max-width: 720px){
      html{
          font-size: 87.5%;
      }
    }
    @media(max-height: 670px){
      body{
        min-height: 663px;
      }
    }
  }

  body {
    font-family: "Inter", sans-serif;
    background: var(--background);
    color: var(--text);
  }

  body, input, textarea, button {
    font: 400 1rem "Inter" sans-serif;
  }

  button{
      cursor: pointer;
  }

  a {
      color: inherit;
      text-decoration: none;
  }
`;
