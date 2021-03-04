import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }
  .navbar {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.secondaryText};
  }
`;
