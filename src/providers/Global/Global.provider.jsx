import React, { useReducer, useContext } from 'react';
import reducer from '../../reducers/reducer';

const GlobalContext = React.createContext(null);

const initialState = {
  darkMode: true,
  param: 'wizeline',
  selectedVideo: {},
  listofVideos: [],
  error: null,
};

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useGlobal" without a GlobalProvider!`);
  }
  return context;
}

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export { useGlobal, GlobalContext };
export default GlobalProvider;
