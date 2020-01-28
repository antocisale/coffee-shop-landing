import React from 'react';
import './Cards.scss';

const Cards = props =>{
    return(
        <article className="cofeeCup">
            <img className="cup-img" src={props.CardImg} alt={props.ImgAlt}/>
            <h3>{props.CardTitle}</h3>
            <p>{props.CardDate}</p>
            <p>{props.CardInfo}</p>
        </article>
    )
}

export default Cards;