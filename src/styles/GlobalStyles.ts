'use client';

import styled, { createGlobalStyle } from 'styled-components';

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
`;

export const Paragraph = styled.h6<{ title?: boolean; whiteTheme?: boolean }>`
  font-size: ${({ title }) => (title ? '2rem' : '1rem')};
  color: ${({ theme, whiteTheme }) =>
    whiteTheme ? theme.colors.primary : theme.colors.text};
  margin: 0.5rem 0;
  font-weight: ${({ title }) => (title ? 'bold' : 'normal')};
`;
