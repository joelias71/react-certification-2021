import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import ProtectedRoute from '../ProtectedRoute';
import { useGlobal } from '../../providers/Global';
import { GlobalStyles } from '../globalStyles';
import { lightTheme, darkTheme } from '../Themes';

import Home from '../../pages/Home';
import VideoDetail from '../../pages/VideoDetails';
import Favorites from '../../pages/Favorites';
import FourOhFour from '../../pages/FourOhFour';
import LoginPage from '../Login';

export default function App() {
  const { state } = useGlobal();
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={state.darkMode ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Switch>
            <ProtectedRoute exact path="/" Component={Home} />
            <ProtectedRoute path="/video" Component={VideoDetail} />
            <ProtectedRoute exact path="/favorites" Component={Favorites} />
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route path="*">
              <FourOhFour />
            </Route>
          </Switch>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
