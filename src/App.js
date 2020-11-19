import React from 'react'
import './App.css';

import Sara from './slides/Sara'
import SaraEn from './slides/Sara.English/SaraEn'
import SaraEn1A from './slides/Sara.English/SaraEn.website'
import SaraEn1B from './slides/Sara.English/SaraEn.meet'
import SaraEn2B from './slides/Sara.English/SaraEn.contact'
import SaraEn3 from './slides/Sara.English/SaraEn.contact-info'
import SaraEn4 from './slides/Sara.English/SaraEn.website-info';
import SaraEnBye from './slides/Sara.English/SaraEn.bye'

import ResetButton from './slides/ResetButton'

import SaraFr from './slides/Sara.French/SaraFr'

import { useStateValue } from './StateProvider'


const App = () => {

  const [state] = useStateValue();


  console.log(state);

  if (state.option === 'Hello') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn />
      </div>
    );
  } else if (state.option === 'I’m looking for a website' || state.option === 'Yes, I’m looking for a website') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn1A />
      </div>
    )
  } else if (state.option === 'I wanna meet Mr.Omar Alsadi') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn1B />
      </div>
    )
  } else if (state.option === 'Can I contact with him directly?') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn2B />
      </div>
    )
  } else if (state.option === 'By Phone') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn3 info={' ( 514 ) 664-9779'} />
      </div>
    )
  } else if (state.option === 'By Email') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn3 info={'omar_alsadi@outlook.com'} />
      </div>
    )
  } else if (state.option === 'A Single-application page' || state.option === 'An E-commerce page') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn4 />
      </div>
    )
  } else if (state.option === 'No, thanks') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEnBye />
      </div>
    )
  } else if (state.option === 'Bonjour') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr />
      </div>
    );
  } else {
    return (
      <div className="App">
        <ResetButton />
        <Sara />
      </div>
    );
  }

}

export default App;
