import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { INITIAL_STATE } from './Reducer'

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={INITIAL_STATE} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);