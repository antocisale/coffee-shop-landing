import React from 'react';
import './TheBestCoffee.scss';
import Texts from '../../Components/Texts/Texts';
import TheBestBack from '../../Images/thebest-background.jpg';
import TheBestCoffeeIcons from '../../Components/CoffeIcons/TheBestCoffeeIcons';

const TheBestCoffee = ()=>{

    return(
        <section style={{
            backgroundImage:`url(${TheBestBack})`
        }} className="best-coffee-container">
            <Texts title="THE BEST COFFEE SHOP"
                subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, omnis iste natus error sit voluptatem 
                accusantium doloremque, totam rem aperiam, voluptatem accusantium doloremque."
                claseTitle="section-titles white story-title"
                claseSubtitle="section-subtitles white story-subtitle">
                    <div className="icons-container">
                        {TheBestCoffeeIcons.map(icon=>{
                                return <div>
                                        <img src={icon.icon} alt=""/>
                                        <h3>{icon.title}</h3>
                                    </div>
                                
                            })
                        }
                    </div>
            </Texts>
        </section>
    )
}

export default TheBestCoffee;