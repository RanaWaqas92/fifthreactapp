import React, { useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import ParentComp from './ParentComp';
import CounterContxt from './CounterContxt';

function App() {
  let Counter = useState(0);
  return (
    <div className="App">
      <CounterContxt.Provider value={Counter}>
        <label>This Main Comp</label>
        <ParentComp></ParentComp>
      </CounterContxt.Provider>
    </div>
  );
}

export default App;
