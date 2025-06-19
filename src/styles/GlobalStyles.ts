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
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    margin: 0.5rem 0;
    font-weight: bold;
  }
  
  h4 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
    margin: 0.5rem 0;
    font-weight: bold;
  }

  h5 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 300;
  }

  h6 {
    font-size: 1.2rem;
    font-weight: bold;
  }


`;
