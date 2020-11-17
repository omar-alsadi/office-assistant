import React from 'react'
import './App.css';

import Sara from './slides/Sara'
import SaraEn from './slides/Sara.English/SaraEn'
import SaraEn1A from './slides/Sara.English/SaraEn.website'
import SaraEn1B from './slides/Sara.English/SaraEn.meet'
import SaraEn2B from './slides/Sara.English/SaraEn.contact'

import SaraFr from './slides/Sara.French/SaraFr'

import { useStateValue } from './StateProvider'


const App = () => {

  const [state] = useStateValue();


  console.log(state);

  if (state.option === 'Hello') {
    return (
      <div className="App">
        <SaraEn />
      </div>
    );
  } else if (state.option === 'I’m looking for a website' || state.option === 'Yes, I’m looking for a website') {
    return (
      <div className="App">
        <SaraEn1A />
      </div>
    )
  } else if (state.option === 'I wanna meet Mr.Omar Alsadi') {
    return (
      <div className="App">
        <SaraEn1B />
      </div>
    )
  } else if (state.option === 'Can I contact with him directly?') {
    return (
      <div className="App">
        <SaraEn2B />
      </div>
    )
  } else if (state.option === 'Bonjour') {
    return (
      <div className="App">
        <SaraFr />
      </div>
    );
  } else {
    return (
      <div className="App">
        <Sara />
      </div>
    );
  }

}

export default App;
