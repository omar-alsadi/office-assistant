import React, { useState } from 'react'
import './App.css';


import Sara1 from './slides/Sara-1'
import Sara2 from './slides/Sara-2'

// import sara1 from './assest/sara-1.png';
// import Sara from './slides/Sara';

const App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     option: ''
  //   }
  //   this.hundleClick = this.hundleClick.bind(this)
  // }

  // hundleClick(event) {
  //   const option = event.target;
  //   this.setState({ option: option.value })
  // }

  const [option, setOption] = useState('');

  console.log(`this is the new option : ${option}`);


  if (option === '') {
    return (
      <div className="App">
        <Sara1 hundleClick={e => setOption(e.target.option)} />
      </div>
    );
  } else if (option === 'Hello') {
    return (
      <div className="App">
        <Sara2 />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Sara1 />
      </div>
    );
  }

}

export default App;
