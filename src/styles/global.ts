import { createGlobalStyle } from 'styled-components';
import Suisseintl from '../assets/fonts/SuisseintlRegular.woff2';

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-family: 'Suissintl';
        font-style: normal;
        font-weight: 400;
        src: url(${Suisseintl});
    }

    *{
        margin: 0;
        padding: 0;
        font-family: 'Suissintl', sans-serif;
    }

    body {
        outline: 0;
        color: #242424;
        transition-property: background-color;
        transition-duration: 200ms;
        line-height: 1.5;
        position: relative;
        display: block;
        font-feature-settings: 'kern';
    }

    #root{
        margin: 0 auto;
    }
`;
