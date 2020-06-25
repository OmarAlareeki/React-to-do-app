import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppList from './AppList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>React To do App</h2>
        <AppList />
      </header>
    </div>
  );
}

export default App;
