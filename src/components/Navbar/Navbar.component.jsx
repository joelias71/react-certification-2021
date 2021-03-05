import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {
  CustomSwitch,
  useStyles,
  SearchBox,
  NavbarMenu,
  NavbarHeader,
} from './Navbar.styles';

export default function Navbar({ setDarkMode, darkMode, setParam }) {
  const classes = useStyles();
  const themeToggler = (themeMode) => setDarkMode(!themeMode);
  const [sidebar, setSidebar] = useState(false);
  const [searchParam, setSearchParam] = useState('wizeline');

  return (
    <>
      <NavbarHeader>
        <div className="navbar">
          <IconButton
            className={classes.iconButton}
            aria-label="menu"
            onClick={() => setSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <SearchBox>
            <InputBase
              className={classes.inputSearch}
              placeholder="Search ..."
              value={searchParam}
              onChange={(e) => setSearchParam(e.target.value)}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={() => setParam(searchParam)}
            >
              <SearchIcon />
            </IconButton>
          </SearchBox>
        </div>
        <div>
          <FormControlLabel
            control={
              <CustomSwitch
                checked={darkMode}
                onChange={() => themeToggler(darkMode)}
                name="darkMode"
              />
            }
          />
        </div>
      </NavbarHeader>
      <NavbarMenu active={sidebar}>
        <ul className="navbar-menu__items">
          <li className="navbar-menu__items__toggle">
            <IconButton
              className={classes.iconButton}
              aria-label="menu"
              onClick={() => setSidebar(false)}
            >
              <CloseIcon className="navbar__menu-bars" />
            </IconButton>
          </li>
          <li key="home" className="navbar-text">
            Home
          </li>
        </ul>
      </NavbarMenu>
    </>
  );
}
