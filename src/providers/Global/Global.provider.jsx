import React, { useReducer, useContext } from 'react';
import reducer from '../../reducers/reducer';

const GlobalContext = React.createContext(null);

const initialState = {
  darkMode: true,
  param: 'wizeline',
  selectedVideo: {},
  listofVideos: [],
  error: null,
  seeVideoDetail: false,
};

function useGlobal() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(`Can't use "useVideo" without a VideoProvider!`);
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

export { useGlobal };
export default GlobalProvider;
