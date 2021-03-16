import React, { useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { useGlobal } from '../../providers/Global';
import { CHANGE_THEME, SET_PARAM, SEARCH } from '../../actions/actions';
import {
  CustomSwitch,
  useStyles,
  SearchBox,
  NavbarMenu,
  NavbarHeader,
} from './Navbar.styles';

export default function Navbar() {
  const classes = useStyles();
  const { state, dispatch } = useGlobal();
  const [sidebar, setSidebar] = useState(false);

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
                  type: SEARCH,
                  payload: state,
                })
              }
            >
              <SearchIcon />
            </IconButton>
          </SearchBox>
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
