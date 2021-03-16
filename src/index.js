import React from 'react';
import ReactDOM from 'react-dom';
import GlobalProvider from './providers/Global';
import App from './components/App';
import './global.css';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
