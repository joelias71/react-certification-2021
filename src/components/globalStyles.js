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
  .navbar-menu {
    background: ${({ theme }) => theme.navColor};
    color: ${({ theme }) => theme.secondaryText};
  }
  .searchBox {
    background: ${({ theme }) => theme.background};
  }
  .navbar-text:hover {
    background: ${({ theme }) => theme.background};
  }
`;
