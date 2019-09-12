import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuToggle from './MenuToggle';


function App () {
  return (
    <div className="App">
      <header className="App-header">
        <MenuToggle />
        <p>
          Toggle the icon.
        </p>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
