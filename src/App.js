import React from 'react';
import './App.css';
import Parallax from './Sections/Parallax/Parallax'
import ParallaxImg1 from './Images/hero-background.jpg';
import CoffeePart2 from './Sections/CoffeePart2/CoffeePart2';
import OurStoryImg from './Images/story-background.jpg';
import OurStory from './Sections/OurStory/OurStory';
import FreshBeans from './Sections/FreshBeans/FreshBeans';
import GreatCoffee from './Sections/GreatCoffee/GreatCoffee'
import TheBestCoffee from './Sections/TheBestCoffee/TheBestCoffee';
import Gallery from './Sections/Gallery/Gallery';
import Blog from './Sections/Blog/Blog';
import Contact from './Sections/Contact/Contact';


function App() {
  return (
    <div>
      <Parallax image={ParallaxImg1}>
        <h1 className="main-title">Portwell, Inc.</h1>
        <p className="subtitle">Serving only the best since 2019</p>
      </Parallax>
      <CoffeePart2></CoffeePart2>
      <OurStory image={OurStoryImg} altImg="Cup of Coffee"></OurStory>
      <FreshBeans></FreshBeans>
      <GreatCoffee></GreatCoffee>
      <TheBestCoffee></TheBestCoffee>
      <Gallery></Gallery>
      <Blog></Blog>
      <Contact></Contact>
    </div>
  );
}

export default App;
