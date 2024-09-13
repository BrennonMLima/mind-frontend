import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #fff;
}
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: var(--preto);
}

*, button, input {
border: 0;
outline: 0;
font-family: 'Roboto', sans-serif;
}

:root {
--preto: #161a1d;
--cinza-escuro: #212528;
--azul-escuro: #011936;
--azul-claro: #3772FF;
}

.link{
    color: var(--azul-claro);
    text-decoration: none;
}
    h1,h2,h3,span,p,svg{
        background-color: transparent;
    }

.action-icon{
    cursor: pointer;
    margin-left: 10px;
    font-size: 18px;
    &:hover {
        color: var(--azul-escuro);
    }
}
`;

