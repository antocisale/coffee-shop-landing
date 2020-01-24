import React from 'react';
import './App.css';
import Parallax from './Sections/Parallax/Parallax'
import ParallaxImg1 from './Images/hero-background.jpg';
import CoffeePart2 from './Sections/CoffeePart2/CoffeePart2';

function App() {
  return (
    <div>
      <Parallax image={ParallaxImg1}>
        <h1 className="main-title">Portwell, Inc.</h1>
        <p className="subtitle">Serving only the best since 2019</p>
      </Parallax>
      <CoffeePart2></CoffeePart2>
     
    </div>
  );
}

export default App;
