import { createGlobalStyle } from 'styled-components';

export const AppStyles = createGlobalStyle`
body{
    --webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    margin: 0;
    font-family: 'Montserrat',sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: normal;
    color: #5E5863;
    min-width: 320px;
}
`;
