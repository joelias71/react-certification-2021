import Switch from '@material-ui/core/Switch';
import styled from 'styled-components';
import { withStyles, makeStyles } from '@material-ui/core/styles';

export const CustomSwitch = withStyles({
  switchBase: {
    color: '#fff',
  },
  checked: {
    color: '#f2575d',
  },
  track: {
    backgroundColor: '#f2575d',
  },
})(Switch);

export const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  inputSearch: {
    flex: 1,
    color: '#fff',
  },
  iconButton: {
    padding: 12,
    color: '#fff',
    marginRight: 10,
    marginTop: 0,
    height: 50,
  },
});

export const SearchBox = styled.div`
  background: ${({ theme }) => theme.background};
  padding-left: 1rem;
  border-radius: 15px;
`;

export const NavbarHeader = styled.header`
  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.secondaryText};
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  .navbar {
    display: flex;
    justify-content: space-between;
  }
`;

export const NavbarMenu = styled.nav`
  background: ${({ theme }) => theme.navColor};
  color: ${({ theme }) => theme.secondaryText};
  width: 350px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: -100%;
  transition: 850ms;
  z-index: 10;

  ${({ active }) =>
    active &&
    `
    left: 0;
    transition: 350ms;
  `}

  .navbar-menu__items {
    width: 100%;
  }

  .navbar-menu__items__toggle {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    padding-top: 1rem;
  }

  .navbar-menu__menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    cursor: pointer;
  }

  .navbar-text {
    display: block;
    align-items: center;
    height: 80px;
    list-style: none;
    cursor: pointer;
    text-align: center;
    line-height: 80px;
    cursor: pointer;
    &:hover {
      background: ${({ theme }) => theme.background};
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.secondaryText};
    }
  }
`;
