import React from 'react';
import './App.css';
import Card from './Components/Card';
import Game from './Page/GamePage/Game';
import ParticleBg from './Components/ParticleBg';
import Homepage from './Page/HomePage/homepage';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <>
     <div>
      <ParticleBg/>
    <div className="App">
    <Routes>
        <Route index element={ <Homepage/>}/>
        <Route path='/game' element={<Game/>}/>
    </Routes>

    </div>
    </div>
    </>
  );
}

export default App;
