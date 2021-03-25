import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useHistory } from 'react-router';
import { AUTH_STORAGE_KEY, VALID_USERNAME, VALID_PASSWORD } from '../../utils/constants';
import { storage } from '../../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

function AuthProvider({ children }) {
  const history = useHistory();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(
    (user, pwd) => {
      if ((user && pwd && user !== VALID_USERNAME) || pwd !== VALID_PASSWORD) {
        throw new Error('Oops, you have an invalid username or password');
      } else {
        setAuthenticated(true);
        storage.set(AUTH_STORAGE_KEY, true);
        history.push('/');
      }
    },
    [history]
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
    history.push('/login');
  }, [history]);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
