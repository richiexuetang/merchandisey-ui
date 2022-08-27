import { createGlobalStyle } from 'styled-components';
import Suisseintl from '../assets/fonts/SuisseintlRegular.woff2';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    neutral: {
      black: '#0f0f0f',
      white: '#ffffff',
      200: '#ededed',
      600: '#393939',
      700: '#242424',
    },
  },
  fonts: {
    body: `'SuisseIntl-Regular', sans-serif`,
  },
});

export const GlobalStyle = createGlobalStyle`
    :root {
        // Colors
        --colors-neutral-200: #ededed;
        --colors-neutral-400: #a1a5a4;
        --colors-neutral-600: #393939;
        --colors-neutral-500: #5f5f5f;
        --colors-neutral-200: #ededed;
        --colors-neutral-black: #0f0f0f;
        --colors-neutral-white: #ffffff;
        --colors-transparent: #00000000;

        // Fonts
        --fontSizes-xs: 0.75rem;
        --fontSizes-sm: 0.875rem;
        --fontSizes-md: 1rem;
        --fontSizes-lg: 1.125rem;

        --space-8: 2.0rem;
        --space-10: 2.5rem;

        --fontWeights-semibold: 600;
        --transition-property-common: background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;
        --transition-duration-normal: 200ms;
        --fonts-suisseIntlRegular: "SuisseIntl-Regular",sans-serif;
    }

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
        font-family: 'Suissintl', sans-serif;
    }
    #root{
        margin: 0 auto;
        min-height: 100vh;
    }
`;
