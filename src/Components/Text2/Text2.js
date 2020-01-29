import React from 'react';
import './Text2.scss';

const Text2 = props =>{
    return(
        <div className="info">
            <h3>{props.title}</h3>
            <p>{props.paragraph}</p>
            <a href={props.referencia}>LEARN MORE</a>
        </div>
    )
}

export default Text2;