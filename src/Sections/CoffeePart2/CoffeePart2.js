import React from 'react';
import CoffeeCup from '../../Components/CoffeeCups/CoffeeCups';
import CoffeeCupsInfo from '../../Components/CoffeeCups/CoffeeCupInfo';
import Part2Background from '../../Images/coffeeCup-background.jpg'
import Texts from '../../Components/Texts/Texts';
import './CoffeePart2.scss';

const CoffeePart2 = ()=>{
    return(
        <section className="part2" style={{
            backgroundImage: `url(${Part2Background})`
        }}>
            <Texts title="WE BELIEVE IN COFFEE THAT TASTES INCREDIBLE" 
                    subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                    doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                    claseTitle="section-titles black"
                    claseSubtitle="section-subtitles gray">
            </Texts>

            <div className="part2-cups">
                {CoffeeCupsInfo.map(cup=>{
                    return <CoffeeCup CoffeeCupImg={cup.image} CoffeeCupTitle={cup.title} CoffeeCupInfo={cup.info}></CoffeeCup>
                })}
            </div>
        </section>
    )  
}


export default CoffeePart2;