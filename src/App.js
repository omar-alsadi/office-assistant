import React from 'react'
import './App.css';

import Sara1 from './slides/Sara-1'
import Sara2 from './slides/Sara-2'

import { useStateValue } from './StateProvider'


const App = () => {

  const [{ option }] = useStateValue();


  console.log(option);

  if ({ option } === 'Hello') {
    return (
      <div className="App">
        <Sara2 />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Sara1 />
      </div>
    );
  }

}

export default App;
