import React from 'react';
import './App.css';
import Card from './Components/Card';
import Game from './Page/GamePage/Game';
import ParticleBg from './Components/ParticleBg';




function App() {
  return (
    <>
    <div>
      <ParticleBg/>
    <div className="App">
      
      <Game/>
    </div>
    </div>
    </>
  );
}

export default App;
