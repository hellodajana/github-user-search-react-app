import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        --blue: hsl(212, 100%, 50%);
        --theme-icon: hsl(0, 0%, 10%);
        --active-theme-icon: #90a4d4;
        --text: hsl(0, 0%, 100%);
        --bold-text: hsl(0, 0%, 100%);
        --stats-menu: hsl(220, 40%, 13%);
        --container-background: hsl(222, 41%, 20%);
        --background: hsl(220, 40%, 13%);
    }`;

export default GlobalStyles;
