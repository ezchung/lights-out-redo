import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board";

const NUM_ROWS = 5;
const NUM_COLS = 5;
const CHANCE_LIGHTS_ON = .5;

function App() {
  return (
    <div className="App">
      <div className="App">
        <Board nrows={NUM_ROWS} ncols={NUM_COLS} chanceLightStartsOn={CHANCE_LIGHTS_ON}/>
      </div>
    </div>
  );
}

export default App;
