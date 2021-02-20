import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import './Navbar.styles.css';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

const CustomSwitch = withStyles({
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

const useStyles = makeStyles({
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

export default function Navbar({ setDarkMode, darkMode }) {
  const classes = useStyles();
  const themeToggler = (themeMode) => setDarkMode(!themeMode);
  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <header className="navbar">
        <div className="navbar">
          <IconButton
            className={classes.iconButton}
            aria-label="menu"
            onClick={() => setSidebar(true)}
          >
            <MenuIcon />
          </IconButton>
          <div className="searchBox">
            <InputBase className={classes.inputSearch} placeholder="Search ..." />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </div>
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
            label="Dark mode"
          />
        </div>
      </header>
      <nav className={sidebar ? 'navbar-menu active' : 'navbar-menu'}>
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
      </nav>
    </>
  );
}
