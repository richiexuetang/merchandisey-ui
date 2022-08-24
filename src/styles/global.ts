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
        outline: 0;
        box-sizing: border-box;
        font-family: 'Suissintl', sans-serif;
    }
    #root{
        margin: 0 auto;
    }
`;
