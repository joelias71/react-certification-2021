import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
import { useAuth } from '../../providers/Auth';
import { useGlobal } from '../../providers/Global';
import { CHANGE_THEME, SET_PARAM } from '../../actions/actions';
import {
  CustomSwitch,
  useStyles,
  SearchBox,
  NavbarMenu,
  NavbarHeader,
} from './Navbar.styles';

export default function Navbar() {
  const classes = useStyles();
  const { logout } = useAuth();
  const { state, dispatch } = useGlobal();
  const [sidebar, setSidebar] = useState(false);
  const { pathname } = window.location;
  const disabledSearchBar = pathname !== '/video/favorites' && pathname !== '/favorites';
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
          {disabledSearchBar && (
            <SearchBox>
              <InputBase
                className={classes.inputSearch}
                placeholder="Search ..."
                value={state.param}
                onChange={(e) =>
                  dispatch({
                    type: SET_PARAM,
                    payload: { ...state, param: e.target.value },
                  })
                }
              />
              <IconButton
                type="submit"
                className={classes.iconButton}
                aria-label="search"
                onClick={() =>
                  dispatch({
                    type: SET_PARAM,
                    payload: state,
                  })
                }
              >
                <SearchIcon />
              </IconButton>
            </SearchBox>
          )}
        </div>
        <div>
          <FormControlLabel
            control={
              <CustomSwitch
                checked={state.darkMode}
                onChange={() => dispatch({ type: CHANGE_THEME })}
                name="darkMode"
              />
            }
          />
          <Fab variant="extended" aria-label="Log out" onClick={() => logout()}>
            Log out
          </Fab>
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
            <Link to="/">Home</Link>
          </li>
          <li key="favorites" className="navbar-text">
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </NavbarMenu>
    </>
  );
}
