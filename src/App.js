import React, { useEffect, useReducer } from 'react'
import './App.css';

import Sara1 from './slides/Sara-1'
import Sara2 from './slides/Sara-2'

const App = () => {

  const INITIAL_STATE = { option: '' }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_OPTION':
        return { ...state, option: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const { option } = state;

  useEffect(() => {
    console.log(`this is the new option : ${option}`);
  }, [reducer])

  const setOption = option => ({
    type: 'SET_OPTION',
    payload: option
  })

  if (option === 'Hello') {
    return (
      <div className="App">
        <Sara2 hundleClick={e => dispatch(setOption(e.target.value))} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Sara1 hundleClick={e => dispatch(setOption(e.target.value))} />
      </div>
    );
  }

}

export default App;
