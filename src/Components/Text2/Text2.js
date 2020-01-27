import React from 'react';
import './Text2.scss';

const Text2 = props =>{
    return(
        <div className="info">
            <h3 className={props.claseTitle}>{props.title}</h3>
            <p className={props.claseSubtitle}>{props.paragraph}</p>
            <a href={props.referencia}>LEARN MORE</a>
        </div>
    )
}

export default Text2;