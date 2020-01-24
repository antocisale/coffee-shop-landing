import React from 'react';
import './CoffeeCup.scss';

const CoffeeCups = props =>{
    return(
        <article className="cofeeCup">
            <img className="cup-img" src={props.CoffeeCupImg}/>
            <h3>{props.CoffeeCupTitle}</h3>
            <p>{props.CoffeeCupInfo}</p>
        </article>
    ) 
}

export default CoffeeCups;