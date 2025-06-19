'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h3 {
    font-size: ${({ theme }) => theme.sizes.title};
    color: ${({ theme }) => theme.colors.text};
    margin: 0.5rem 0;
    font-weight: bold;
    text-align: center;
  }
  
  h4 {
    font-size: ${({ theme }) => theme.sizes.title};
    color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem 0;
    text-align: center;
    font-weight: bold;
  }

  h5 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    text-align: center;
    font-weight: 300;
  }

  h6 {
    font-size: 1.2rem;
    text-align: center;
    font-weight: bold;
  }


`;
