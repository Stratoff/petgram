import { createGlobalStyle, keyframes, css } from 'styled-components'

export const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity: 0;
    }

    to {
        filter: blur(0);
        opacity: 1;
    }
`

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) => css`
    animation: ${time} ${fadeInKeyframes} ${type};
`

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *::before, *::after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
        margin: 0;
    }

    ul {
        list-style: none;
        padding:0;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: #fefefe;
        height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overscroll-behavior: none;
        width: 100%;
    }

    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
`
