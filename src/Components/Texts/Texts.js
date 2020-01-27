import React from 'react';
import './Texts.scss';

const Texts = props =>{
    return(
        <div className="titles">
            <h2 className={props.claseTitle}>{props.title}</h2>
            {props.children}
            <p className={props.claseSubtitle}>{props.subtitle}</p>
        </div>
    )
}

export default Texts;