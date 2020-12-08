import React from 'react'
import './App.css';

import Sara from './slides/Sara'
import SaraEn from './slides/Sara.English/SaraEn'
import SaraEnV from './slides/Sara.English/SaraEn.version'
import SaraEnSB from './slides/Sara.English/SaraEn.storybook'
import SaraEn1A from './slides/Sara.English/SaraEn.website'
import SaraEn1B from './slides/Sara.English/SaraEn.meet'
import SaraEn2B from './slides/Sara.English/SaraEn.contact'
import SaraEn3 from './slides/Sara.English/SaraEn.contact-info'
import SaraEn4 from './slides/Sara.English/SaraEn.website-info'
import SaraEnBye from './slides/Sara.English/SaraEn.bye'

import ResetButton from './slides/ResetButton'

import SaraFr from './slides/Sara.French/SaraFr'
import SaraFr1A from './slides/Sara.French/SaraFr.website'
import SaraFr1B from './slides/Sara.French/SaraFr.meet'
import SaraFr2B from './slides/Sara.French/SaraFr.contact'
import SaraFr3 from './slides/Sara.French/SaraFr.contact-info'
import SaraFr4 from './slides/Sara.French/SaraFr.website-info'
import SaraFrBye from './slides/Sara.French/SaraFr.bye'

import { useStateValue } from './StateProvider'


const App = () => {

  const [{ option }] = useStateValue();

  console.log(option);

  if (option === 'Hello') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEnV />
      </div>
    );
  } else if (option === 'Tell me more about Storybook verison please') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEnSB />
      </div>
    )
  } else if (option === 'I want to continue on this version') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn />
      </div>
    )
  } else if (option === 'I’m looking for a website' || option === 'Yes, I’m looking for a website') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn1A />
      </div>
    )
  } else if (option === 'I wanna meet Mr.Omar Alsadi') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn1B />
      </div>
    )
  } else if (option === 'Can I contact with him directly?') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn2B />
      </div>
    )
  } else if (option === 'By Phone') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn3 info={' ( 514 ) 664-9779'} />
      </div>
    )
  } else if (option === 'By Email') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn3 info={'omar_alsadi@outlook.com'} />
      </div>
    )
  } else if (option === 'A Single-application page' || option === 'An E-commerce page') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEn4 />
      </div>
    )
  } else if (option === 'No, thanks') {
    return (
      <div className="App">
        <ResetButton />
        <SaraEnBye />
      </div>
    )      ///////////////// FRANCE /////////////////
  } else if (option === 'Je recherche un site Web' || option === 'Oui, je cherche le site web') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr1A />
      </div>
    )
  } else if (option === 'Je veux rencontrer Monsieur Omar Alsadi') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr1B />
      </div>
    )
  } else if (option === 'Puis-je le contacter directement?') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr2B />
      </div>
    )
  } else if (option === 'Par téléphone') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr3 info={' ( 514 ) 664-9779'} />
      </div>
    )
  } else if (option === 'Par courriel') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr3 info={'omar_alsadi@outlook.com'} />
      </div>
    )
  } else if (option === 'Une seul page d\'application' || option === 'Une page e-commerce') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFr4 />
      </div>
    )
  } else if (option === 'Non, Merci') {
    return (
      <div className="App">
        <ResetButton />
        <SaraFrBye />
      </div>
    )
  } else if (option === 'Bonjour') {
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
