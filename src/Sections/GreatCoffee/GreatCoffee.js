import React from 'react';
import './GreatCoffee.scss';
import GreatCoffeeImg from '../../Images/great-coffee-background.jpg';
import Text2 from '../../Components/Text2/Text2';

const GreatCoffee = ()=>{
    return(
        <section className="parallax-effect hero twocols" style={{
            backgroundImage:`url(${GreatCoffeeImg})`
        }}>
            <div className="container"></div>
            <Text2 title="GREAT COFFEE"
                paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                     accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
                     illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                referencia = "#"
                claseTitle=""
                claseSubtitle="CoffeeCup">

            </Text2>
        </section>
    )
}

export default GreatCoffee;